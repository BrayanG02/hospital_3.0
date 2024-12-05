<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Personal Médico</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">

        <!-- Tabla -->
        <table class="w-full border-collapse">
          <tbody>
            <tr v-for="item in data" :key="item.Persona_ID" class="border-b">
              <!-- Fila de la tabla con datos -->
              <td class="p-4 border-t">
                <!-- Encerrar cada ID en un bloque -->
                <div class="border-2 border-blue-200 p-4 rounded-lg mb-4 bg-blue-50">
                  <!-- Columna Persona ID (en negrita) -->
                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <div class="md:w-1/6 font-bold text-sm text-blue-800">Persona ID</div>
                    <div class="md:w-5/6 font-bold text-blue-900">{{ item.Persona_ID }}</div>
                  </div>

                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <!-- Columna Departamento ID (en negrita) -->
                    <div class="md:w-1/6 font-bold text-sm text-blue-800">Departamento ID</div>
                    <div class="md:w-5/6 text-sm text-blue-900">{{ item.Departamento_ID }}</div>
                  </div>

                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <!-- Columna Cédula Profesional (en negrita) -->
                    <div class="md:w-1/6 font-bold text-sm text-blue-800">Cédula Profesional</div>
                    <div class="md:w-5/6 text-sm text-blue-900">{{ item.Cedula_Profesional }}</div>
                  </div>

                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <!-- Columna Tipo (en negrita) -->
                    <div class="md:w-1/6 font-bold text-sm text-blue-800">Tipo</div>
                    <div class="md:w-5/6 text-sm text-blue-900">{{ item.Tipo }}</div>
                  </div>

                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <!-- Columna Especialidad (en negrita) -->
                    <div class="md:w-1/6 font-bold text-sm text-blue-800">Especialidad</div>
                    <div class="md:w-5/6 text-sm text-blue-900">{{ item.Especialidad }}</div>
                  </div>

                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <!-- Columna Fecha Registro (en negrita) -->
                    <div class="md:w-1/6 font-bold text-sm text-blue-800">Fecha Registro</div>
                    <div class="md:w-5/6 text-sm text-blue-900">{{ new Date(item.Fecha_Registro).toLocaleDateString() }}</div>
                  </div>

                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <!-- Columna Fecha Contratación (en negrita) -->
                    <div class="md:w-1/6 font-bold text-sm text-blue-800">Fecha Contratación</div>
                    <div class="md:w-5/6 text-sm text-blue-900">{{ new Date(item.Fecha_Contratacion).toLocaleDateString() }}</div>
                  </div>

                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <!-- Columna Fecha Término Contrato (en negrita) -->
                    <div class="md:w-1/6 font-bold text-sm text-blue-800">Fecha Término Contrato</div>
                    <div class="md:w-5/6 text-sm text-blue-900">{{ new Date(item.Fecha_Termino_Contrato).toLocaleDateString() }}</div>
                  </div>

                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <!-- Columna Salario (en negrita) -->
                    <div class="md:w-1/6 font-bold text-sm text-blue-800">Salario</div>
                    <div class="md:w-5/6 text-sm text-blue-900">{{ item.Salario | currency }}</div>
                  </div>

                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <!-- Columna Estatus (en negrita) -->
                    <div class="md:w-1/6 font-bold text-sm text-blue-800">Estatus</div>
                    <div class="md:w-5/6">
                      <span :class="{
                        'bg-green-500': item.Estatus === 'Activo',
                        'bg-red-500': item.Estatus === 'Inactivo'
                      }" class="text-white py-1 px-3 rounded-full text-xs">
                        {{ item.Estatus }}
                      </span>
                    </div>
                  </div>

                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <!-- Columna Fecha Actualización (en negrita) -->
                    <div class="md:w-1/6 font-bold text-sm text-blue-800">Fecha Actualización</div>
                    <div class="md:w-5/6 text-sm text-blue-900">{{ new Date(item.Fecha_Actualizacion).toLocaleDateString() }}</div>
                  </div>

                  <!-- Botones de acción con solo iconos (SVG personalizados) -->
                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 mt-4">
                    <!-- Botón Editar con solo el icono SVG -->
                    <button @click="editar(item.Persona_ID)" 
                      class="text-white p-3 rounded-full mx-1 transition-all"
                      style="background-color: #fbbf24;" 
                      onmouseover="this.style.backgroundColor='#f59e0b'" 
                      onmouseout="this.style.backgroundColor='#fbbf24'">
                      <!-- Icono de Editar -->
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                        <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>
                      </svg>
                    </button>

                    <!-- Botón Eliminar con solo el icono SVG -->
                    <button @click="eliminar(item.Persona_ID)" class="bg-red-500 text-white p-3 rounded-full mx-1 hover:bg-red-600 transition-all">
                      <!-- Icono de Eliminar -->
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                      </svg>
                    </button>

                    <!-- Botón Actualizar con solo el icono SVG -->
                    <button @click="actualizar(item.ID)" class="bg-green-500 text-white p-3 rounded-full mx-1 hover:bg-green-600 transition-all">
                      <!-- Icono de Actualizar -->
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                        <path d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-94h80v240H600v-80h110q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200q105 0 183.5-68T756-440h82q-15 137-117.5 228.5T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </ion-content>
  </ion-app>
</template>

<script>
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default {
  name: 'AreaMedicaPage',
  components: {
    IonApp, IonHeader, IonToolbar, IonTitle, IonContent
  },
  data() {
    return {
      // Datos estáticos con todos los campos
      data: [
        {
          Persona_ID: 1,
          Departamento_ID: 101,
          Cedula_Profesional: '1234567',
          Tipo: 'Médico',
          Especialidad: 'Cardiología',
          Fecha_Registro: '2024-01-10T08:00:00Z',
          Fecha_Contratacion: '2024-02-01T08:00:00Z',
          Fecha_Termino_Contrato: '2025-02-01T08:00:00Z',
          Salario: 50000,
          Estatus: 'Activo',
          Fecha_Actualizacion: '2024-03-01T10:00:00Z'
        },
        {
          Persona_ID: 2,
          Departamento_ID: 102,
          Cedula_Profesional: '7654321',
          Tipo: 'Médico',
          Especialidad: 'Neurología',
          Fecha_Registro: '2023-06-20T08:00:00Z',
          Fecha_Contratacion: '2023-07-15T08:00:00Z',
          Fecha_Termino_Contrato: '2024-07-15T08:00:00Z',
          Salario: 55000,
          Estatus: 'Inactivo',
          Fecha_Actualizacion: '2023-09-10T14:00:00Z'
        },
        {
          Persona_ID: 3,
          Departamento_ID: 103,
          Cedula_Profesional: '1112223',
          Tipo: 'Médico',
          Especialidad: 'Oncología',
          Fecha_Registro: '2024-03-01T08:00:00Z',
          Fecha_Contratacion: '2024-04-01T08:00:00Z',
          Fecha_Termino_Contrato: '2025-04-01T08:00:00Z',
          Salario: 60000,
          Estatus: 'Activo',
          Fecha_Actualizacion: '2024-03-10T14:00:00Z'
        }
      ]
    };
  },
  methods: {
    editar(id) {
      alert(`Editar persona con ID: ${id}`);
    },
    eliminar(id) {
      alert(`Eliminar persona con ID: ${id}`);
    },
    actualizar(id) {
      alert(`Actualizar persona con ID: ${id}`);
    }
  }
}
</script>

<style scoped>
/* Estilo general para la tabla */
table {
  width: 100%;
  border-collapse: collapse;
}

td {
  padding: 16px;
  vertical-align: top;
}

/* Estilo para las celdas de Estatus */
.bg-green-500 {
  background-color: #48bb78; /* Verde */
  color: white;
}

.bg-red-500 {
  background-color: #f56565; /* Rojo */
  color: white;
}

/* Estilo de las celdas (márgenes entre las secciones de la tabla) */
td {
  border-top: 1px solid #e2e8f0;
  padding: 16px;
}

.font-semibold {
  font-size: 1rem;
  color: #1c3d5a; /* Azul más oscuro */
}

.text-sm {
  font-size: 0.875rem;
}

.text-blue-800 {
  color: #1c3d5a;
}

.text-blue-900 {
  color: #1a202c;
}

.bg-blue-50 {
  background-color: #ebf8ff;
}

/* Columna ID en negrita */
.font-bold {
  font-weight: bold;
  color: #1a202c; /* Color de texto oscuro */
}

/* Encerrar cada ID con un borde */
.border-2 {
  border: 2px solid #e2e8f0;
}

.rounded-lg {
  border-radius: 8px;
}

/* Espacio entre registros */
.mb-4 {
  margin-bottom: 16px;
}

/* Botones */
button {
  font-size: 0.8rem;
  padding: 8px 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color;
}
</style>
