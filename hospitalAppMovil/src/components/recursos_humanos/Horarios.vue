<template>
    <ion-app>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Empleados y Horarios</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
          <!-- Tabla de Horarios -->
          <table class="w-full border-collapse">
            <tbody>
              <tr v-for="item in data" :key="item.horario_id" class="border-b">
                <!-- Fila de la tabla con datos -->
                <td class="p-4 border-t">
                  <div class="border-2 border-blue-200 p-4 rounded-lg mb-4 bg-blue-50">
                    <!-- Encabezados y datos -->
                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                      <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>ID Horario</strong></div>
                      <div class="md:w-5/6 font-bold text-blue-900">{{ item.horario_id }}</div>
                    </div>

                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                      <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>ID Empleado</strong></div>
                      <div class="md:w-5/6 font-bold text-blue-900">{{ item.empleado_id }}</div>
                    </div>
  
                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                      <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Nombre</strong></div>
                      <div class="md:w-5/6 text-sm text-blue-900">{{ item.nombre }}</div>
                    </div>
  
                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                      <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Especialidad</strong></div>
                      <div class="md:w-5/6 text-sm text-blue-900">{{ item.especialidad }}</div>
                    </div>
  
                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                      <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Día</strong></div>
                      <div class="md:w-5/6 text-sm text-blue-900">{{ item.dia_semana }}</div>
                    </div>
  
                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                      <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Hora Inicio</strong></div>
                      <div class="md:w-5/6 text-sm text-blue-900">{{ item.hora_inicio }}</div>
                    </div>
  
                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                      <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Hora Fin</strong></div>
                      <div class="md:w-5/6 text-sm text-blue-900">{{ item.hora_fin }}</div>
                    </div>
  
                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                      <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Turno</strong></div>
                      <div class="md:w-5/6 text-sm text-blue-900">{{ item.turno }}</div>
                    </div>
  
                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                      <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Departamento</strong></div>
                      <div class="md:w-5/6 text-sm text-blue-900">{{ item.nombre_departamento }}</div>
                    </div>
  
                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                      <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Sala</strong></div>
                      <div class="md:w-5/6 text-sm text-blue-900">{{ item.nombre_sala }}</div>
                    </div>
  
                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                      <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Fecha Creación</strong></div>
                      <div class="md:w-5/6 text-sm text-blue-900">{{ new Date(item.fecha_creacion).toLocaleString() }}</div>
                    </div>
  
                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0">
                      <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Fecha Actualización</strong></div>
                      <div class="md:w-5/6 text-sm text-blue-900">{{ new Date(item.fecha_actualizacion).toLocaleString() }}</div>
                    </div>

                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0 mt-4">
                    <!-- Botón Editar con solo el icono SVG -->
                    <button @click="editar(item.horario_id)" 
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
                    <button @click="eliminar(item.horario_id)" class="bg-red-500 text-white p-3 rounded-full mx-1 hover:bg-red-600 transition-all">
                      <!-- Icono de Eliminar -->
                       
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                      </svg>
                    </button>
                  </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <ion-content>
       <!-- Modal para Editar -->
       <ion-modal :is-open="isEditing" @ionModalDidDismiss="closeModal">
        <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div class="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-2xl rounded-lg">
            <h2>Editar Horario</h2>
            <form @submit.prevent="guardarCambios"> 
                <!-- Contenedor con scroll -->
                <div class="modal-content max-h-[70vh] overflow-y-auto">
              <div class="mb-4">
                <label for="nombre">Nombre:</label><br>
                <input
                  v-model="formData.nombre"
                  class="w-full p-3"
                  type="text"
                  id="nombre"
                  required
                />
              </div>
              <div class="mb-4">
                <label for="descripcion">Especialidad:</label><br>
                <input
                  v-model="formData.especialidad"
                  class="w-full p-3"
                  id="descripcion"
                  required
                ></input>
              </div>
              <div class="mb-4">
                <label for="descripcion">Dia de semana:</label><br>
                <input
                  v-model="formData.dia_semana"
                  class="w-full p-3"
                  id="descripcion"
                  required
                ></input>
              </div>
              <div class="mb-4">
                <label for="descripcion">Hora de inicio:</label><br>
                <input
                  v-model="formData.hora_inicio"
                  class="w-full p-3"
                  id="descripcion"
                  required
                  type="time"
                ></input>
              </div>
              <div class="mb-4">
                <label for="descripcion">Hora fin:</label><br>
                <input
                  v-model="formData.hora_fin"
                  class="w-full p-3"
                  id="descripcion"
                  required
                  type="time"
                ></input>
              </div>
              <div class="mb-6">
                <label for="turno">Turno</label><br>
                <select
                  v-model="formData.turno"
                  class="w-full p-3 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none dark:focus:ring-blue-400"
                  id="turno"
                  required
                >
                  <option value="Manana">Mañana</option>
                  <option value="Tarde">Tarde</option>
                  <option value="Noche">Noche</option>
                </select>
              </div>
              <div class="mb-4">
                <label for="descripcion">Nombre Departamento:</label><br>
                <input
                  v-model="formData.nombre_departamento"
                  class="w-full p-3"
                  id="descripcion"
                  required
                ></input>
              </div>
              <div class="mb-4">
                <label for="descripcion">Nombre de sala:</label><br>
                <textarea
                  v-model="formData.nombre_sala"
                  class="w-full p-3"
                  id="descripcion"
                  required
                ></textarea>
              </div>
              <div class="mb-4">
                <label for="descripcion">Fecha de creacion:</label><br>
                <input
                  v-model="formData.fecha_creacion"
                  class="w-full p-3"
                  id="descripcion"
                  required
                  type="date"
                ></input>
              </div>
              <div class="mb-4">
                <label for="descripcion">Fecha de Actualización:</label><br>
                <input
                  v-model="formData.fecha_actualizacion"
                  class="w-full p-3"
                  id="descripcion"
                  required
                  type="date"
                ></input>
              </div>
              <div class="flex justify-end space-x-4">
                <button
                  type="button"
                  @click="closeModal"
                  class="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  class="px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Guardar Cambios
                </button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </ion-modal>
    </ion-content>
      
</ion-content>
</ion-app>
</template>
  
  <script>
  import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import axios from 'axios';
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOb21icmVfVXN1YXJpbyI6ImJyYXlhbiIsIkNvcnJlb19FbGVjdHJvbmljbyI6IjIzMDg5M0B1dHhpY290ZXBlYy5lZHUubXgiLCJDb250cmFzZW5hIjoiUG9sbG8xMjMiLCJOdW1lcm9fVGVsZWZvbmljb19Nb3ZpbCI6Ijc0NjExODYxNDIifQ.8VyAOe8EjYtXpBDyDDAPwRERYFJ5lYI1kSYWnaGZd9I";

  export default {
    name: 'EmpleadoHorarioPage',
    components: {
      IonApp, IonHeader, IonToolbar, IonTitle, IonContent
    },
    data() {
      return {
      data: [],
      isEditing: false,
      formData: {
        empleado_id: '',
        nombre: '',
        especialidad: '',
        dia_semana: '',
        hora_inicio: '',
        hora_fin: '',
        turno: '',
        nombre_departamento: '',
        nombre_sala: '',
        fecha_creacion: new Date().toISOString().substr(0, 10),
        fecha_actualizacion: new Date().toISOString().substr(0, 10),
        horario_id: ''
        },
      };
    },
    mounted() {
    this.obtenerHorario();
  },
  methods: {
    async obtenerHorario() {
      try {
        const response = await axios.get("https://privilegecare-deploy-gqmt.onrender.com/horarios/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        this.data = response.data;
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    },
    editar(id) {
      const horario = this.data.find((item) => item.horario_id === id);
      if (horario) {
        this.formData = { ...horario };
        this.isEditing = true;
      }
    },
    async guardarCambios() {
      try {
        const response = await axios.put(
          `https://privilegecare-deploy-gqmt.onrender.com/horario/${this.formData.horario_id}`,
          this.formData,
          { headers: { Authorization: `Bearer ${token}` } }
          
        );
        

        const index = this.data.findIndex((item) => item.horario_id === this.formData.horario_id);
        if (index !== -1) this.data[index] = response.data;
        this.isEditing = false;
      } catch (error) {
        console.error("Error al guardar los cambios:", error);
      }
    },
    async eliminar(id) {
      try {
        await axios.delete(`https://privilegecare-deploy-gqmt.onrender.com/horario/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        this.data = this.data.filter((item) => item.horario_id !== id);
      } catch (error) {
        console.error("Error al eliminar:", error);
      }
    },
    closeModal() {
      this.isEditing = false;
    },
  },
};
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

  .modal-content {
  max-height: 70vh; /* Limita la altura del contenido */
  overflow-y: auto; /* Permite el scroll cuando el contenido excede la altura */
}
  </style>
  