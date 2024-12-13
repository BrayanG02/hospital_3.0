<template>
    <ion-app>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Puestos  Departamentos</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
          <!-- Tabla Puestos y Departamentos -->
          <table class="w-full border-collapse">
            <tbody>
              <tr v-for="item in data" :key="item.ID" class="border-b">
                <!-- Fila de la tabla con datos -->
                <td class="p-4 border-t">
                  <div class="border-2 border-blue-200 p-4 rounded-lg mb-4 bg-blue-50">
                    
                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                      <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Puesto ID</strong></div>
                      <div class="md:w-5/6 text-sm text-blue-900">{{ item.PuestoID }}</div>
                    </div>
  
  
                    <!-- Columna Nombre del Puesto/Departamento (en negrita) -->
                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                      <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Nombre</strong></div>
                      <div class="md:w-5/6 text-sm text-blue-900">{{ item.Nombre }}</div>
                    </div>
  
                    <!-- Columna Descripción (en negrita) -->
                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                      <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Descripción</strong></div>
                      <div class="md:w-5/6 text-sm text-blue-900">{{ item.Descripcion }}</div>
                    </div>

                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                      <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Salario</strong></div>
                      <div class="md:w-5/6 text-sm text-blue-900">{{ item.Salario }}</div>
                    </div>

                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                      <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Turno</strong></div>
                      <div class="md:w-5/6 text-sm text-blue-900">{{ item.Turno }}</div>
                    </div>

                    <!-- Columna Fecha de Registro -->
                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0">
                      <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Creado</strong></div>
                      <div class="md:w-5/6 text-sm text-blue-900">{{ new Date(item.Creado).toLocaleDateString() }}</div>
                    </div>
  
                    <!-- Columna Fecha de Actualización -->
                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0">
                      <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Modificado</strong></div>
                      <div class="md:w-5/6 text-sm text-blue-900">{{ new Date(item.Modificado).toLocaleDateString() }}</div>
                    </div>


                    <!-- Botones de acción con iconos SVG -->
                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0 mt-4">
  
                      
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
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonModal } from "@ionic/vue";
import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOb21icmVfVXN1YXJpbyI6ImJyYXlhbiIsIkNvcnJlb19FbGVjdHJvbmljbyI6IjIzMDg5M0B1dHhpY290ZXBlYy5lZHUubXgiLCJDb250cmFzZW5hIjoiUG9sbG8xMjMiLCJOdW1lcm9fVGVsZWZvbmljb19Nb3ZpbCI6Ijc0NjExODYxNDIifQ.8VyAOe8EjYtXpBDyDDAPwRERYFJ5lYI1kSYWnaGZd9I";


  export default {
    name: "PuestoDepartamentosPage",
  components: { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonModal },
    data() {
      return {
        data: [],
      };
    },
    mounted() {
    this.obtenerDepartamentos();
  },
  methods: {
    async obtenerDepartamentos() {
      try {
        const response = await axios.get("https://privilegecare-deploy-gqmt.onrender.com/puestos/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        this.data = response.data;
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    },
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
  