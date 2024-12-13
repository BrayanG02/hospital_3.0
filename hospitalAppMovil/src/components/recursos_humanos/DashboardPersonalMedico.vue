<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Dashboard</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- Gráfica 3: Distribución de Puestos Departamentos -->
      <div class="chart-container">
        <canvas id="pieChart" ref="pieChart"></canvas>
      </div>

      <!-- Gráfica 4: Horarios agrupados por hora -->
      <div class="chart-container">
        <canvas id="horariosChart" ref="horariosChart"></canvas>
      </div>

        <!-- Gráfica 3: Cantidad de especialidades -->
      <div class="chart-container">
        <canvas id="barChart" ref="barChart"></canvas>
      </div>

    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { Chart } from "chart.js/auto";
import axios from 'axios';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOb21icmVfVXN1YXJpbyI6ImJyYXlhbiIsIkNvcnJlb19FbGVjdHJvbmljbyI6IjIzMDg5M0B1dHhpY290ZXBlYy5lZHUubXgiLCJDb250cmFzZW5hIjoiUG9sbG8xMjMiLCJOdW1lcm9fVGVsZWZvbmljb19Nb3ZpbCI6Ijc0NjExODYxNDIifQ.8VyAOe8EjYtXpBDyDDAPwRERYFJ5lYI1kSYWnaGZd9I";


export default defineComponent({
  name: "Dashboard",
  setup() {
    // grafica circular
    const pieChart = ref(null);
    const data = ref([]);
    //grafica de barras
    const horariosChart = ref(null);
    const horariosAgrupados = ref({});  // Para almacenar los horarios agrupados por hora
    //grafica de especialidades
    const barChart = ref(null);
    let chartInstance = null; // Referencia al objeto Chart

    // Método para obtener los horarios de la API
    const obtenerHorarios = async () => {
      try {
        const response = await axios.get('https://privilegecare-deploy-gqmt.onrender.com/horarios/', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const horarios = response.data;
        agruparHorarios(horarios);
      } catch (error) {
        alert("Error al obtener los horarios");
        console.error(error);
      }
    };

    // Método para agrupar los horarios por hora
    const agruparHorarios = (horarios) => {
      horariosAgrupados.value = horarios.reduce((acc, horario) => {
        const horaInicio = horario.hora_inicio;  // Hora de inicio como clave
        if (!acc[horaInicio]) {
          acc[horaInicio] = [];  // Inicializar si no existe la clave
        }
        acc[horaInicio].push(horario);  // Agregar el horario a la lista
        return acc;
      }, {});
      mostrarGraficoHorarios();
    };

    // Método para mostrar el gráfico de los horarios
    const mostrarGraficoHorarios = () => {
      const horas = Object.keys(horariosAgrupados.value);
      const cantidades = horas.map(hora => horariosAgrupados.value[hora].length);  // Contar las citas por hora

      new Chart(horariosChart.value, {
        type: "bar",
        data: {
          labels: horas,
          datasets: [{
            label: "Cantidad de citas por hora",
            data: cantidades,
            backgroundColor: "rgba(54, 162, 235, 0.8)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: { display: true, position: "top" },
            tooltip: { enabled: true },
          }
        }
      });
    };

    // Crear las gráficas cuando el componente se monta
    onMounted(() => {
      // Obtén los horarios al cargar la página
      obtenerHorarios()
    });

    //grafica de departamentos
    const obtenerDepartamentos = async () => {
      try {
        const response = await axios.get(
          "https://privilegecare-deploy-gqmt.onrender.com/puestos/",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        data.value = response.data;
        mostrarGrafico();
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    const mostrarGrafico = () => {
      // Agrupar por departamento y contar
      const agrupadoPorDepartamento = data.value.reduce((acc, item) => {
        acc[item.Nombre] = (acc[item.Nombre] || 0) + 1; // Incrementar el contador por departamento
        return acc;
      }, {});

      // Preparar datos para la gráfica
      const labels = Object.keys(agrupadoPorDepartamento); // Nombres de departamentos
      const cantidades = Object.values(agrupadoPorDepartamento); // Cantidad de puestos por departamento

      // Crear gráfica de pastel
      new Chart(pieChart.value, {
        type: "pie",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Cantidad de Puestos",
              data: cantidades,
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)",
                "rgba(255, 159, 64, 0.8)",
              ],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: true, position: "right" },
            tooltip: { enabled: true },
          },
        },
      });
    };

    onMounted(() => {
      obtenerDepartamentos();
    });

    const obtenerPersonalMedico = async () => {
      try {
        const response = await axios.get(
          "https://privilegecare-deploy-gqmt.onrender.com/personal_medico/",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        data.value = response.data;
        actualizarGrafico(); // Actualiza la gráfica con los datos
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    const actualizarGrafico = () => {
      // Agrupar datos por especialidad
      const agrupadoPorEspecialidad = data.value.reduce((acc, item) => {
        const especialidad = item.Especialidad || "Sin Especialidad"; // Considera "Sin Especialidad" si no hay valor
        acc[especialidad] = (acc[especialidad] || 0) + 1;
        return acc;
      }, {});

      const labels = Object.keys(agrupadoPorEspecialidad);
      const cantidades = Object.values(agrupadoPorEspecialidad);

      // Si el gráfico ya existe, actualiza los datos
      if (chartInstance) {
        chartInstance.data.labels = labels; // Actualizar etiquetas
        chartInstance.data.datasets[0].data = cantidades; // Actualizar datos
        chartInstance.update(); // Refrescar la gráfica
      } else {
        // Crear nueva gráfica si no existe
        chartInstance = new Chart(barChart.value, {
          type: "bar",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Cantidad de Personal por Especialidad",
                data: cantidades,
                backgroundColor: "rgba(75, 192, 192, 0.8)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: true },
              tooltip: { enabled: true },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Especialidades",
                },
              },
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Cantidad",
                },
              },
            },
          },
        });
      }
    };

    const actualizarDatos = () => {
      obtenerPersonalMedico(); // Vuelve a llamar a la API para obtener datos nuevos
    };

    onMounted(() => {
      obtenerPersonalMedico(); // Cargar datos iniciales
    });




    return {
      barChart,
      pieChart,
      horariosChart,
    };
  },
});
</script>


<style scoped>
.chart-container {
  margin: 20px auto;
  width: 100%;
  height: 300px; /* Tamaño ajustado para dispositivos móviles */
  max-width: 500px; /* Límites para pantallas más grandes */
}

ion-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
