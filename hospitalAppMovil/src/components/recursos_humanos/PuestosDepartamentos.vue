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
                    
                    <!-- Columna ID (en negrita) -->
                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0 border-b pb-4">
                      <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>ID</strong></div>
                      <div class="md:w-5/6 font-bold text-blue-900">{{ item.ID }}</div>
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
  
                    <!-- Columna Fecha de Registro -->
                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0">
                      <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Fecha Registro</strong></div>
                      <div class="md:w-5/6 text-sm text-blue-900">{{ new Date(item.Fecha_Registro).toLocaleDateString() }}</div>
                    </div>
  
                    <!-- Columna Fecha de Actualización -->
                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0">
                      <div class="md:w-1/6 font-semibold text-sm text-blue-800"><strong>Última Actualización</strong></div>
                      <div class="md:w-5/6 text-sm text-blue-900">{{ new Date(item.Fecha_Actualizacion).toLocaleDateString() }}</div>
                    </div>
  
                    <!-- Botones de acción con iconos SVG -->
                    <div class="md:flex justify-between items-center space-y-4 md:space-y-0 mt-4">
                      <!-- Botón Editar -->
                      <button @click="editar(item.ID)" class="text-white p-3 rounded-full mx-1 transition-all" style="background-color: #fbbf24;" onmouseover="this.style.backgroundColor='#f59e0b'" onmouseout="this.style.backgroundColor='#fbbf24'">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                          <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>
                        </svg>
                      </button>
  
                      <!-- Botón Eliminar -->
                      <button @click="eliminar(item.ID)" class="bg-red-500 text-white p-3 rounded-full mx-1 hover:bg-red-600 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                          <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                        </svg>
                      </button>
  
                      <!-- Botón Actualizar -->
                      <button @click="actualizar(item.ID)" class="bg-green-500 text-white p-3 rounded-full mx-1 hover:bg-green-600 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                          <path d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-94h80v240H600v-80h110q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480 q0 117 81.5 198.5T480-200q105 0 183.5-68T756-440h82q-15 137-117.5 228.5T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"/>
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
  export default {
    data() {
      return {
        data: [
          { ID: 1, Nombre: "Gerente", Descripcion: "Responsable de administración", Estatus: "Activo", Fecha_Registro: "2024-01-01T08:00:00Z", Fecha_Actualizacion: "2024-04-01T12:00:00Z" },
          { ID: 2, Nombre: "Desarrollador", Descripcion: "Encargado del desarrollo del software", Estatus: "Activo", Fecha_Registro: "2024-02-01T08:00:00Z", Fecha_Actualizacion: "2024-03-15T10:00:00Z" }
        ]
      };
    },
    methods: {
      editar(id) {
        alert(`Editar puesto con ID: ${id}`);
      },
      eliminar(id) {
        alert(`Eliminar puesto con ID: ${id}`);
      },
      actualizar(id) {
        alert(`Actualizar puesto con ID: ${id}`);
      }
    }
  }
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  td {
    padding: 16px;
    vertical-align: top;
  }
  button {
    font-size: 0.8rem;
    padding: 8px;
    border-radius: 12px;
    cursor: pointer;
  }
  .bg-green-500 {
    background-color: #48bb78;
  }
  .bg-red-500 {
    background-color: #f56565;
  }
  .bg-blue-50 {
    background-color: #ebf8ff;
  }
  </style>
  