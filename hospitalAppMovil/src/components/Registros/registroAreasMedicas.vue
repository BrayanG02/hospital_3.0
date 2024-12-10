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
            <ion-label position="floating" style="margin-bottom: 0px;">Estado</ion-label> <!-- Separar etiqueta con margin-bottom -->
            <ion-select 
              v-model="nuevaArea.Estatus" 
              placeholder="Selecciona el estado" 
              style="margin-top: 10px;"> <!-- Separar opciones con margin-top -->
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
      nuevaArea: {
        Nombre: '',
        Descripcion: '',
        Estatus: 'Activo',
        Fecha_Registro: new Date().toISOString().substr(0, 10),
        Fecha_Actualizacion: new Date().toISOString().substr(0, 10),
      }
    };
  },

  methods: {
    registrarArea() {
      console.log('Área médica registrada:', this.nuevaArea);

      alert(`Registro del área '${this.nuevaArea.Nombre}' exitoso!`);

      this.limpiarFormulario();
    },

    limpiarFormulario() {
      this.nuevaArea = {
        Nombre: '',
        Descripcion: '',
        Estatus: 'Activo',
        Fecha_Registro: new Date().toISOString().substr(0, 10),
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
