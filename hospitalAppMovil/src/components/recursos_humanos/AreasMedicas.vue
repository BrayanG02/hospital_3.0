<template>
  <ion-app>
    <ion-header>
      <ion-toolbar>
        <ion-title>Áreas Médicas</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
        
        <!-- Tabla -->
        <table class="w-full border-collapse">
          <tbody>
            <tr v-for="item in data" :key="item.ID" class="border-b">
              <!-- Fila de la tabla con datos -->
              <td class="p-4 border-t">
                <!-- Encerrar cada ID en un bloque -->
                <div class="border-2 border-gray-300 p-4 rounded-lg mb-4">
                  <!-- Columna ID (en negrita) -->
                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <div class="md:w-1/6 font-semibold text-sm text-gray-700">ID</div>
                    <div class="md:w-5/6 font-bold text-gray-900">{{ item.ID }}</div>
                  </div>
                  
                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <!-- Columna Nombre -->
                    <div class="md:w-1/6 font-semibold text-sm text-gray-700">Nombre</div>
                    <div class="md:w-5/6 text-sm text-gray-900">{{ item.Nombre }}</div>
                  </div>

                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <!-- Columna Descripción -->
                    <div class="md:w-1/6 font-semibold text-sm text-gray-700">Descripción</div>
                    <div class="md:w-5/6 text-sm text-gray-900">{{ item.Descripcion }}</div>
                  </div>

                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <!-- Columna Estatus -->
                    <div class="md:w-1/6 font-semibold text-sm text-gray-700">Estatus</div>
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
                    <!-- Columna Fecha Registro -->
                    <div class="md:w-1/6 font-semibold text-sm text-gray-700">Fecha Registro</div>
                    <div class="md:w-5/6 text-sm text-gray-900">{{ new Date(item.Fecha_Registro).toLocaleDateString() }}</div>
                  </div>

                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0">
                    <!-- Columna Fecha Actualización -->
                    <div class="md:w-1/6 font-semibold text-sm text-gray-700">Fecha Actualización</div>
                    <div class="md:w-5/6 text-sm text-gray-900">{{ new Date(item.Fecha_Actualizacion).toLocaleDateString() }}</div>
                  </div>

                  <!-- Botones de acción -->
                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 mt-4">
                    <button @click="editar(item.ID)" class="bg-yellow-400 text-white px-4 py-2 rounded-full text-xs mx-1 hover:bg-yellow-500">
                      Editar
                    </button>
                    <button @click="eliminar(item.ID)" class="bg-red-500 text-white px-4 py-2 rounded-full text-xs mx-1 hover:bg-red-600">
                      Eliminar
                    </button>
                    <button @click="actualizar(item.ID)" class="bg-blue-500 text-white px-4 py-2 rounded-full text-xs mx-1 hover:bg-blue-600">
                      Actualizar
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
      // Datos estáticos
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
    // Métodos para manejar los botones
    editar(id) {
      alert(`Editar área con ID: ${id}`);
      // Aquí puedes agregar la lógica para editar el registro
    },
    eliminar(id) {
      alert(`Eliminar área con ID: ${id}`);
      // Aquí puedes agregar la lógica para eliminar el registro
    },
    actualizar(id) {
      alert(`Actualizar área con ID: ${id}`);
      // Aquí puedes agregar la lógica para actualizar el registro
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
  color: #4a5568;
}

.text-sm {
  font-size: 0.875rem;
}

.text-gray-700 {
  color: #4a5568;
}

.text-gray-900 {
  color: #1a202c;
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
  padding: 6px 12px;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2b6cb0; /* Color azul más oscuro */
}

/* Estilo responsivo */
@media (max-width: 768px) {
  .md\:w-1\/6 {
    width: 100%;
    margin-bottom: 8px;
  }

  .md\:w-5\/6 {
    width: 100%;
  }

  td {
    padding: 12px;
  }

  /* Ajuste de márgenes en las celdas */
  .border-b {
    border-bottom: 2px solid #e2e8f0;
  }

  .border-2 {
    border: 2px solid #e2e8f0;
  }
}
</style>
