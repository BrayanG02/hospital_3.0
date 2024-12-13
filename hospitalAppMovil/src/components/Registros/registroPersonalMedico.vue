<template>
  <ion-app>
    <ion-content>
      <!-- Tarjeta para registrar el área médica -->
      <ion-card>
        <ion-header>
          <ion-toolbar>
            <ion-title>Registro de Profesional Médico</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-card-content>

          <ion-item>
            <ion-input
              v-model="nuevoRegistro.Persona_ID"
              label="Persona ID"
              label-placement="floating"
              placeholder="ID de la Persona"
              type="number"
            ></ion-input>
          </ion-item>
          <!-- Departamento -->
          <ion-item>
            <ion-input
              v-model="nuevoRegistro.Departamento_ID"
              label="Departamento ID"
              label-placement="floating"
              placeholder="ID del Departamento"
              type="number"
            ></ion-input>
          </ion-item>

          <!-- Cedula Profesional -->
          <ion-item>
            <ion-input
              v-model="nuevoRegistro.Cedula_Profesional"
              label="Cédula Profesional"
              label-placement="floating"
              placeholder="Número de Cédula Profesional"
              type="number"
            ></ion-input>
          </ion-item>

          <!-- Tipo -->
          <ion-item>
            <ion-select v-model="nuevoRegistro.Tipo" placeholder="Tipo">
              <ion-select-option value="Médico">Médico</ion-select-option>
              <ion-select-option value="Enfermero">Enfermero</ion-select-option>
              <ion-select-option value="Administrativo">Administrativo</ion-select-option>
              <ion-select-option value="Directivo">Directivo</ion-select-option>
              <ion-select-option value="Apoyo">Apoyo</ion-select-option>
              <ion-select-option value="Directivo">Directivo</ion-select-option>
              <ion-select-option value="Interno">Interno</ion-select-option>
            </ion-select>
          </ion-item>

          <!-- Especialidad -->
          <ion-item>
            <ion-input
              v-model="nuevoRegistro.Especialidad"
              label="Especialidad"
              label-placement="floating"
              placeholder="Especialidad del Profesional"
            ></ion-input>
          </ion-item>

                    <!-- Fecha de Registro (con calendario) -->
          <ion-item>
            <ion-input
              v-model="nuevoRegistro.Fecha_Registro"
              label="Fecha de Registro"
              label-placement="floating"
              type="date"
              placeholder="(YYYY-MM-DD)"
            ></ion-input>
          </ion-item>

                    <!-- Fecha de Contratación (con calendario) -->
          <ion-item>
            <ion-input
              v-model="nuevoRegistro.Fecha_Contratacion"
              label="Fecha de Contratación"
              label-placement="floating"
              type="date"
              placeholder="(YYYY-MM-DD)"
            ></ion-input>
          </ion-item>

          <!-- Fecha de Término de Contrato (con calendario) -->
          <ion-item>
            <ion-input
              v-model="nuevoRegistro.Fecha_Termino_Contrato"
              label="Fecha de Término de Contrato"
              label-placement="floating"
              type="date"
              placeholder="(YYYY-MM-DD)"
            ></ion-input>
          </ion-item>

          <!-- Salario -->
          <ion-item>
            <ion-input
              v-model="nuevoRegistro.Salario"
              label="Salario"
              label-placement="floating"
              placeholder="Salario del Profesional"
              type="number"
            ></ion-input>
          </ion-item>

          <!-- Estatus -->
          <ion-item>
            <ion-select v-model="nuevoRegistro.Estatus" placeholder="Estatus">
              <ion-select-option value="Activo">Activo</ion-select-option>
              <ion-select-option value="Inactivo">Inactivo</ion-select-option>
            </ion-select>
          </ion-item>

           <!-- Fecha de Actualización (con calendario) -->
           <ion-item>
            <ion-input
              v-model="nuevoRegistro.Fecha_Actualizacion"
              label="Fecha de Actualización"
              label-placement="floating"
              type="date"
              placeholder="(YYYY-MM-DD)"
            ></ion-input>
          </ion-item>

          <!-- Botón para guardar el registro -->
          <ion-button expand="block" @click="registrarProfesional">
            Guardar
          </ion-button>

        </ion-card-content>

      </ion-card>

    </ion-content>
  </ion-app>
</template>

<script>
import axios from 'axios';
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
import { alertController } from '@ionic/vue';

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
      nuevoRegistro: {
        Persona_ID: '',
        Departamento_ID: '',
        Cedula_Profesional: '',
        Tipo: '',
        Especialidad: '',
        Fecha_Registro: new Date().toISOString().substr(0, 10),
        Fecha_Contratacion: new Date().toISOString().substr(0, 10),
        Fecha_Termino_Contrato: new Date().toISOString().substr(0, 10),
        Fecha_Termino_Contrato: '', 
        Salario: '',
        Estatus: '',
        Fecha_Actualizacion: new Date().toISOString().substr(0, 10),
      }
    };
  },

  methods: {
    async registrarProfesional() {
  try {
    const response = await axios.post('https://privilegecare-deploy-gqmt.onrender.com/personal_medico/', this.nuevoRegistro,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    this.showAlert(`El registro del profesional con cédula ${this.nuevoRegistro.Cedula_Profesional} fue exitoso!`);
    this.limpiarFormulario();
  } catch (error) {
    this.showAlert('Error al registrar el profesional:', error);

    if (error.response) {
      // Si la respuesta existe, muestra los detalles del error del servidor
      console.error('Detalles del error:', error.response.data);
      const mensajeError = error.response.data.detail || 'Ocurrió un problema con el registro.';
      this.showAlert(`${mensajeError}`);
    } else if (error.request) {
      // Si no hay respuesta del servidor
      /* console.error('El servidor no respondió:', error.request); */
      this.showAlert('No se recibió respuesta del servidor. Verifica tu conexión.');
    } else {
      // Otros errores, como de configuración
      console.error('Error al configurar la solicitud:', error.message);
      this.showAlert('Ocurrió un error al intentar registrar. Intenta nuevamente.');
    }
  }
  
},
    limpiarFormulario() {
      this.nuevoRegistro = {
        Persona_ID: '',
        Departamento_ID: '',
        Cedula_Profesional: '',
        Tipo: '',
        Especialidad: '',
        Fecha_Registro: new Date().toISOString().substr(0, 10),
        Fecha_Contratacion: new Date().toISOString().substr(0, 10),
        Fecha_Termino_Contrato: new Date().toISOString().substr(0, 10),
        Salario: '',
        Estatus: 'Activo',
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
}
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
