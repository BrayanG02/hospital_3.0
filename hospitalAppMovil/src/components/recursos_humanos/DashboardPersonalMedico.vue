<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Dashboard Personal Médico</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="chart-container">
        <canvas id="barChart1" ref="barChart1"></canvas>
      </div>
      <div class="chart-container">
        <canvas id="barChart2" ref="barChart2"></canvas>
      </div>
      <div class="chart-container">
        <canvas id="pieChart" ref="pieChart"></canvas>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { Chart } from "chart.js/auto";

export default defineComponent({
  name: "Dashboard",
  setup() {
    const barChart1 = ref(null);
    const barChart2 = ref(null);
    const pieChart = ref(null);

    onMounted(() => {
      // Gráfica 1: Pacientes atendidos
      new Chart(barChart1.value, {
        type: "bar",
        data: {
          labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
          datasets: [
            {
              label: "Pacientes atendidos",
              data: [12, 19, 3, 5, 2],
              backgroundColor: "rgba(75, 192, 192, 0.8)",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: true, position: "top" },
          },
        },
      });

      // Gráfica 2: Consultas diarias
      new Chart(barChart2.value, {
        type: "bar",
        data: {
          labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
          datasets: [
            {
              label: "Consultas diarias",
              data: [10, 15, 8, 12, 7],
              backgroundColor: "rgba(153, 102, 255, 0.8)",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: true, position: "top" },
          },
        },
      });

      // Gráfica 3: Distribución de especialidades
      new Chart(pieChart.value, {
        type: "pie",
        data: {
          labels: ["Cardiología", "Neurología", "Pediatría", "Dermatología"],
          datasets: [
            {
              data: [20, 15, 30, 10],
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
              ],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: true, position: "right" },
          },
        },
      });
    });

    return {
      barChart1,
      barChart2,
      pieChart,
    };
  },
});
</script>

<style scoped>
.chart-container {
  margin: 20px auto;
  width: 100%;
  height: 300px; /* Tamaño fijo ideal para móviles */
  max-width: 500px; /* Límites para pantallas más grandes */
}

ion-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
