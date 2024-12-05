<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Áreas Médicas</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">

        <!-- Tabla Áreas Médicas -->
        <table class="w-full border-collapse">
          <tbody>
            <tr v-for="item in data" :key="item.ID" class="border-b">
              <!-- Fila de la tabla con datos -->
              <td class="p-4 border-t">
                <!-- Encerrar cada área en un bloque -->
                <div class="border-2 border-blue-200 p-4 rounded-lg mb-4 bg-blue-50">
                  
                  <!-- Columna ID (en negrita) -->
                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>ID</strong></div>
                    <div class="md:w-5/6 font-bold text-blue-900">{{ item.ID }}</div>
                  </div>

                  <!-- Columna Nombre (en negrita) -->
                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Nombre</strong></div>
                    <div class="md:w-5/6 text-sm text-blue-900">{{ item.Nombre }}</div>
                  </div>

                  <!-- Columna Descripción (en negrita) -->
                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Descripción</strong></div>
                    <div class="md:w-5/6 text-sm text-blue-900">{{ item.Descripcion }}</div>
                  </div>

                  <!-- Columna Estatus (en negrita) -->
                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Estatus</strong></div>
                    <div class="md:w-5/6">
                      <span :class="{
                        'bg-green-500': item.Estatus === 'Activo',
                        'bg-red-500': item.Estatus === 'Inactivo'
                      }" class="text-white py-1 px-3 rounded-full text-xs">
                        {{ item.Estatus }}
                      </span>
                    </div>
                  </div>

                  <!-- Columna Fecha Registro (en negrita) -->
                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Fecha Registro</strong></div>
                    <div class="md:w-5/6 text-sm text-blue-900">{{ new Date(item.Fecha_Registro).toLocaleDateString() }}</div>
                  </div>

                  <!-- Columna Fecha Actualización (en negrita) -->
                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0">
                    <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Fecha Actualización</strong></div>
                    <div class="md:w-5/6 text-sm text-blue-900">{{ new Date(item.Fecha_Actualizacion).toLocaleDateString() }}</div>
                  </div>

                  <!-- Botones de acción con solo iconos (SVG personalizados) -->
                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 mt-4">
                    <!-- Botón Editar con solo el icono SVG -->
                    <button @click="editar(item.ID)" 
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
                    <button @click="eliminar(item.ID)" class="bg-red-500 text-white p-3 rounded-full mx-1 hover:bg-red-600 transition-all">
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
      // Datos de áreas médicas
      data: [
        {
          ID: 1,
          Nombre: 'Área de Cardiología',
          Descripcion: 'Especializada en enfermedades del corazón.',
          Estatus: 'Activo',
          Fecha_Registro: '2024-01-10T08:00:00Z',
          Fecha_Actualizacion: '2024-02-15T12:00:00Z'
        },
        {
          ID: 2,
          Nombre: 'Área de Neurología',
          Descripcion: 'Tratamiento de trastornos del sistema nervioso.',
          Estatus: 'Inactivo',
          Fecha_Registro: '2023-06-20T08:00:00Z',
          Fecha_Actualizacion: '2023-09-10T14:00:00Z'
        },
        {
          ID: 3,
          Nombre: 'Área de Oncología',
          Descripcion: 'Especialidad en el tratamiento del cáncer.',
          Estatus: 'Activo',
          Fecha_Registro: '2024-03-01T08:00:00Z',
          Fecha_Actualizacion: '2024-03-05T10:00:00Z'
        },
        {
          ID: 4,
          Nombre: 'Área de Dermatología',
          Descripcion: 'Enfermedades de la piel y sus cuidados.',
          Estatus: 'Activo',
          Fecha_Registro: '2024-02-10T08:00:00Z',
          Fecha_Actualizacion: '2024-02-20T09:30:00Z'
        }
      ]
    };
  },
  methods: {
    editar(id) {
      alert(`Editar área con ID: ${id}`);
    },
    eliminar(id) {
      alert(`Eliminar área con ID: ${id}`);
    },
    actualizar(id) {
      alert(`Actualizar área con ID: ${id}`);
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
