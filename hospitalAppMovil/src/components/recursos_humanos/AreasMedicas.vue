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
              <td class="p-4 border-t">
                <div class="border-2 border-blue-200 p-4 rounded-lg mb-4 bg-blue-50">
                  <!-- Nombre -->
                  <div class="md:flex justify-between items-center border-b pb-4">
                    <div class="font-semibold text-sm text-blue-800"><strong>Nombre</strong></div>
                    <div class="text-sm text-blue-900">{{ item.Nombre }}</div>
                  </div>
                  <!-- Descripción -->
                  <div class="md:flex justify-between items-center border-b pb-4">
                    <div class="font-semibold text-sm text-blue-800"><strong>Descripción</strong></div>
                    <div class="text-sm text-blue-900">{{ item.Descripcion }}</div>
                  </div>
                  <!-- Estatus -->
                  <div class="md:flex justify-between items-center border-b pb-4">
                    <div class="font-semibold text-sm text-blue-800"><strong>Estatus</strong></div>
                    <span :class="item.Estatus === 'Activo' ? 'bg-green-500' : 'bg-red-500'"
                      class="text-white py-1 px-3 rounded-full text-xs">
                      {{ item.Estatus }}
                    </span>
                  </div>
                  <!-- Botones de acción -->
                  <div class="flex justify-between items-center mt-4">
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
                    <button @click="eliminar(item.ID)" class="bg-red-500 text-white p-3 rounded-full mx-1 hover:bg-red-600">
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
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-2xl rounded-lg transform transition-all scale-100">
      <h2>Editar Área Médica</h2>
      <form @submit.prevent="guardarCambios">
        <div class="mb-4">
          <label for="nombre">Nombre:</label><br>
          <input
            v-model="formData.Nombre"
            class="w-full p-3 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none dark:focus:ring-blue-400"
            type="text"
            id="nombre"
            required
          />
        </div>
        <div class="mb-4">
          <label for="descripcion">Descripción</label><br>
          <textarea
            v-model="formData.Descripcion"
            class="w-full p-3 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none dark:focus:ring-blue-400"
            id="descripcion"
            required
          ></textarea>
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
  </div>
</ion-modal>



    </ion-content>
  </ion-app>
</template>

<script>
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonModal } from "@ionic/vue";
import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOb21icmVfVXN1YXJpbyI6ImJyYXlhbiIsIkNvcnJlb19FbGVjdHJvbmljbyI6IjIzMDg5M0B1dHhpY290ZXBlYy5lZHUubXgiLCJDb250cmFzZW5hIjoiUG9sbG8xMjMiLCJOdW1lcm9fVGVsZWZvbmljb19Nb3ZpbCI6Ijc0NjExODYxNDIifQ.8VyAOe8EjYtXpBDyDDAPwRERYFJ5lYI1kSYWnaGZd9I";

export default {
  name: "AreaMedicaPage",
  components: { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonModal },
  data() {
    return {
      data: [],
      isEditing: false,
      formData: { Nombre: "", Descripcion: "", Estatus: "" },
    };
  },
  mounted() {
    this.obtenerAreaMedica();
  },
  methods: {
    async obtenerAreaMedica() {
      try {
        const response = await axios.get("https://privilegecare-deploy-gqmt.onrender.com/areas_medicas/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        this.data = response.data;
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    },
    editar(id) {
      const areaMedica = this.data.find((item) => item.ID === id);
      if (areaMedica) {
        this.formData = { ...areaMedica };
        this.isEditing = true;
      }
    },
    async guardarCambios() {
      try {
        const response = await axios.put(
          `https://privilegecare-deploy-gqmt.onrender.com/area_medica/${this.formData.ID}`,
          this.formData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const index = this.data.findIndex((item) => item.ID === this.formData.ID);
        if (index !== -1) this.data[index] = response.data;
        this.isEditing = false;
      } catch (error) {
        console.error("Error al guardar los cambios:", error);
      }
    },
    async eliminar(id) {
      try {
        await axios.delete(`https://privilegecare-deploy-gqmt.onrender.com/area_medica/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        this.data = this.data.filter((item) => item.ID !== id);
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


</style>
