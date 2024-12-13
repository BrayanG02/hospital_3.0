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
                    <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Persona ID</strong></div>
                    <div class="md:w-5/6 font-bold text-blue-900">{{ item.Persona_ID }}</div>
                  </div>

                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <!-- Columna Departamento ID (en negrita) -->
                    <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Departamento ID</strong></div>
                    <div class="md:w-5/6 text-sm text-blue-900">{{ item.Departamento_ID }}</div>
                  </div>

                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <!-- Columna Cédula Profesional (en negrita) -->
                    <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Cédula Profesional</strong></div>
                    <div class="md:w-5/6 text-sm text-blue-900">{{ item.Cedula_Profesional }}</div>
                  </div>

                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <!-- Columna Tipo (en negrita) -->
                    <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Tipo</strong></div>
                    <div class="md:w-5/6 text-sm text-blue-900">{{ item.Tipo }}</div>
                  </div>

                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <!-- Columna Especialidad (en negrita) -->
                    <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Especialidad</strong></div>
                    <div class="md:w-5/6 text-sm text-blue-900">{{ item.Especialidad }}</div>
                  </div>

                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <!-- Columna Fecha Registro (en negrita) -->
                    <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Fecha Registro</strong></div>
                    <div class="md:w-5/6 text-sm text-blue-900">{{ new Date(item.Fecha_Registro).toLocaleDateString() }}</div>
                  </div>

                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <!-- Columna Fecha Contratación (en negrita) -->
                    <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Fecha Contratación</strong></div>
                    <div class="md:w-5/6 text-sm text-blue-900">{{ new Date(item.Fecha_Contratacion).toLocaleDateString() }}</div>
                  </div>

                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <!-- Columna Fecha Término Contrato (en negrita) -->
                    <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Fecha Término Contrato</strong></div>
                    <div class="md:w-5/6 text-sm text-blue-900">{{ new Date(item.Fecha_Termino_Contrato).toLocaleDateString() }}</div>
                  </div>

                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <!-- Columna Salario (en negrita) -->
                    <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Salario</strong></div>
                    <div class="md:w-5/6 text-sm text-blue-900">{{ item.Salario | currency }}</div>
                  </div>

                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <!-- Columna Estatus (en negrita) -->
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

                  <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                    <!-- Columna Fecha Actualización (en negrita) -->
                    <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Fecha Actualización</strong></div>
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
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

       <!-- Modal para Editar -->
       <ion-modal :is-open="isEditing" @ionModalDidDismiss="closeModal">
        <div class="p-4 bg-white shadow-lg rounded-lg mx-4 md:mx-10 mt-4">
          <h2>Editar Personal Médico</h2>
          <form @submit.prevent="guardarCambios">
            <div class="mb-4">
              <label for="departamento">Departamento ID</label><br>
              <input v-model="formData.Departamento_ID" class="w-full p-2 border rounded-lg" type="number" id="departamento" required />
            </div>
            <div class="mb-4">
              <label for="cedula">Cédula Profesional</label><br>
              <input v-model="formData.Cedula_Profesional" class="w-full p-2 border rounded-lg" type="number" id="cedula" required />
            </div>
            <div class="mb-6">
          <label for="estatus">Tipo</label><br>
          <select
            v-model="formData.Tipo"
            class="w-full p-3 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none dark:focus:ring-blue-400"
            id="estatus"
            required
          >
            <option value="Médico">Médico</option>
            <option value="Enfermero">Enfermero</option>
            <option value="Administrativo">Administrativo</option>
            <option value="Directivo">Directivo</option>
            <option value="Apoyo">Apoyo</option>
            <option value="Directivo">Directivo</option>
            <option value="Interno">Interno</option>
          </select>
        </div>
            <div class="mb-4">
              <label for="especialidad">Especialidad</label><br>
              <input v-model="formData.Especialidad" class="w-full p-2 border rounded-lg" type="text" id="especialidad" required />
            </div>
            <div class="mb-4">
              <label for="salario">Salario</label><br>
              <input v-model="formData.Salario" class="w-full p-2 border rounded-lg" type="number" id="salario" required />
            </div>
            <div class="mb-6">
          <label for="estatus">Estatus</label><br>
          <select
            v-model="formData.Estatus"
            class="w-full p-3 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none dark:focus:ring-blue-400"
            id="estatus"
            required
          >
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>

          <div class="flex justify-end space-x-4">
          <button
            type="button"
            @click="closeModal"
            class="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
          >
            Cancelar
          </button>
          <button
            type="submit"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          >
            Guardar Cambios
          </button>
        </div>
          </form>
        </div>
      </ion-modal>



    </ion-content>
  </ion-app>
</template>

<script>
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonModal } from '@ionic/vue';
import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOb21icmVfVXN1YXJpbyI6ImJyYXlhbiIsIkNvcnJlb19FbGVjdHJvbmljbyI6IjIzMDg5M0B1dHhpY290ZXBlYy5lZHUubXgiLCJDb250cmFzZW5hIjoiUG9sbG8xMjMiLCJOdW1lcm9fVGVsZWZvbmljb19Nb3ZpbCI6Ijc0NjExODYxNDIifQ.8VyAOe8EjYtXpBDyDDAPwRERYFJ5lYI1kSYWnaGZd9I";

export default {
  name: 'AreaMedicaPage',
  components: {
    IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonModal
  },
  data() {
    return {
      data: [],
      isEditing: false,  // Controla si estamos en modo edición
      formData: {
        Persona_ID: null,
        Departamento_ID: '',
        Cedula_Profesional: '',
        Tipo: '',
        Especialidad: '',
        Salario: ''
      }
    };
  },
  mounted() {
    this.obtenerPersonalMedico(); // Cargar los datos al montar el componente
  },
  methods: {
    async obtenerPersonalMedico() {
      try {
        const response = await axios.get('https://privilegecare-deploy-gqmt.onrender.com/personal_medico/', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        this.data = response.data;
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    },

    editar(id) {
      const persona = this.data.find(item => item.Persona_ID === id);
      if (persona) {
        this.formData = { ...persona };  // Llenar el formulario con los datos de la persona
        this.isEditing = true;  // Activar el modo de edición
      }
    },

    async guardarCambios() {
      try {
        const response = await axios.put(`https://privilegecare-deploy-gqmt.onrender.com/personal_medico/${this.formData.Persona_ID}`, this.formData, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        // Actualizar los datos localmente
        const index = this.data.findIndex(item => item.Persona_ID === this.formData.Persona_ID);
        if (index !== -1) {
          this.data[index] = response.data;
        }
        this.isEditing = false;  // Cerrar el modal
      } catch (error) {
        console.error("Error al guardar los cambios:", error);
      }
    },

    eliminar(id) {
      this.eliminarPersonalMedico(id);
    },

    async eliminarPersonalMedico(id) {
      try {
        await axios.delete(`https://privilegecare-deploy-gqmt.onrender.com/personal_medico/${id}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        this.data = this.data.filter(item => item.Persona_ID !== id);
      } catch (error) {
        console.error("Error al eliminar el personal médico:", error);
      }
    },

    closeModal() {
      this.isEditing = false;  // Cerrar el modal
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
  