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

          <!-- Departamento -->
          <ion-item>
            <ion-input
              v-model="nuevoRegistro.Departamento_ID"
              label="Departamento"
              label-placement="floating"
              placeholder="ID del Departamento"
            ></ion-input>
          </ion-item>

          <!-- Cedula Profesional -->
          <ion-item>
            <ion-input
              v-model="nuevoRegistro.Cedula_Profesional"
              label="Cédula Profesional"
              label-placement="floating"
              placeholder="Número de Cédula Profesional"
            ></ion-input>
          </ion-item>

          <!-- Tipo -->
          <ion-item>
            <ion-input
              v-model="nuevoRegistro.Tipo"
              label="Tipo"
              label-placement="floating"
              placeholder="Tipo de Contrato"
            ></ion-input>
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
        Salario: '',
        Estatus: 'Activo',
        Fecha_Actualizacion: new Date().toISOString().substr(0, 10),
      }
    };
  },

  methods: {
    registrarProfesional() {
      console.log('Registro del Profesional Médico:', this.nuevoRegistro);

      alert(`El registro del profesional con cédula ${this.nuevoRegistro.Cedula_Profesional} fue exitoso!`);

      this.limpiarFormulario();
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
    }
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
