<template>
  <ion-app>
    <ion-content>
      <!-- Tarjeta para registrar el área médica -->
      <ion-card>
        <ion-header>
          <ion-toolbar>
            <ion-title>Registro de Área Médica</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-card-content>
          <!-- Nombre del área médica -->
          <ion-item>
            <ion-input
              v-model="nuevaArea.Nombre"
              label="Nombre"
              label-placement="floating"
              placeholder="Nombre del área"
            ></ion-input>
          </ion-item>

          <!-- Descripción del área médica -->
          <ion-item>
            <ion-input
              v-model="nuevaArea.Descripcion"
              label="Descripción"
              label-placement="floating"
              placeholder="Descripción del área"
            ></ion-input>
          </ion-item>

          <!-- Estado (Etiquetas y selector de estado) -->
          <ion-item>
            <ion-select v-model="nuevaArea.Estatus" placeholder="Estatus">
              <ion-select-option value="Activo">Activo</ion-select-option>
              <ion-select-option value="Inactivo">Inactivo</ion-select-option>
            </ion-select>
          </ion-item>

          <!-- Fecha de Registro -->
          <ion-item>
            <ion-input
              v-model="nuevaArea.Fecha_Registro"
              label="Fecha de Registro"
              label-placement="floating"
              type="date"
              placeholder="(YYYY-MM-DD)"
            ></ion-input>
          </ion-item>

          <!-- Fecha de Actualización -->
          <ion-item>
            <ion-input
              v-model="nuevaArea.Fecha_Actualizacion"
              label="Fecha de Actualización"
              label-placement="floating"
              type="date"
              placeholder="(YYYY-MM-DD)"
            ></ion-input>
          </ion-item>

          <!-- Botón para guardar el registro -->
          <ion-button expand="block" @click="registrarArea">
            Guardar
          </ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-app>
</template>

<script>
import { alertController } from '@ionic/vue'; // Asegúrate de importarlo correctamente
import {
  IonContent,
  IonButton,
  IonItem,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonCardContent,
  IonApp
} from '@ionic/vue';
import axios from 'axios';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOb21icmVfVXN1YXJpbyI6ImJyYXlhbiIsIkNvcnJlb19FbGVjdHJvbmljbyI6IjIzMDg5M0B1dHhpY290ZXBlYy5lZHUubXgiLCJDb250cmFzZW5hIjoiUG9sbG8xMjMiLCJOdW1lcm9fVGVsZWZvbmljb19Nb3ZpbCI6Ijc0NjExODYxNDIifQ.8VyAOe8EjYtXpBDyDDAPwRERYFJ5lYI1kSYWnaGZd9I";

export default {
  components: {
    IonApp,
    IonContent,
    IonButton,
    IonItem,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonCardContent,
  },
  data() {
    return {
      nuevaArea: {
        Nombre: '',
        Descripcion: '',
        Estatus: '',
        Fecha_Registro: new Date().toISOString().substr(0, 10),
        Fecha_Actualizacion: new Date().toISOString().substr(0, 10),
      }
    };
  },
  methods: {
    async registrarArea() {
      try {
        const response = await axios.post('https://privilegecare-deploy-gqmt.onrender.com/areas_medicas/', this.nuevaArea, {
          headers: { Authorization: `Bearer ${token}` }
        });
        this.showAlert(`El registro de la area medica ${this.nuevaArea.Nombre} fue exitoso!`);
        this.limpiarFormulario();
      } catch (error) {
        this.showAlert('Error al registrar el área médica:', error.message);

        if (error.response) {
          // Si la respuesta existe, muestra los detalles del error del servidor
          const mensajeError = error.response.data.detail || 'Ocurrió un problema con el registro.';
          this.showAlert(`${mensajeError}`);
        } else if (error.request) {
          this.showAlert('No se recibió respuesta del servidor. Verifica tu conexión.');
        } else {
          this.showAlert('Ocurrió un error al intentar registrar. Intenta nuevamente.');
        }
      }
    },

    limpiarFormulario() {
      this.nuevaArea = {
        Nombre: '',
        Descripcion: '',
        Estatus: 'Activo',
        Fecha_Registro: new Date().toISOString().substr(0, 10),
        Fecha_Actualizacion: new Date().toISOString().substr(0, 10),
      };
    },

    async showAlert(header, message) {
      const alert = await alertController.create({
        header: header,
        message: message,
        buttons: ['OK'],
      });
      await alert.present();
    },
  }
};
</script>


<style scoped>
/* Input básico */
.ion-input {
  font-weight: bold;
  padding: 12px;
}

/* Botones personalizados */
.ion-button {
  margin-top: 16px;
  font-weight: bold;
  background-color: #007BFF;
}

.ion-button:hover {
  background-color: #0056b3;
}
</style>
