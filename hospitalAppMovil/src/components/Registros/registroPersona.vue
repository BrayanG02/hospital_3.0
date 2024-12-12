<template>
  <ion-app>
    <ion-content>
      <ion-card>
        <ion-header>
          <ion-toolbar>
            <ion-title>Registro de Persona</ion-title><br />
          </ion-toolbar>
        </ion-header>
        <ion-card-content>
          <!-- Título de cortesía -->
          <ion-item>
            <ion-input
              label="Título de cortesía"
              label-placement="floating"
              v-model="nuevoHorario.titulo_cortesia"
            ></ion-input>
          </ion-item>
          <!-- Nombre -->
          <ion-item>
            <ion-input
              label="Nombre"
              label-placement="floating"
              v-model="nuevoHorario.nombre"
            ></ion-input>
          </ion-item>
          <!-- Primer Apellido -->
          <ion-item>
            <ion-input
              label="Primer Apellido"
              label-placement="floating"
              v-model="nuevoHorario.primer_apellido"
            ></ion-input>
          </ion-item>
          <!-- Segundo Apellido -->
          <ion-item>
            <ion-input
              label="Segundo Apellido"
              label-placement="floating"
              v-model="nuevoHorario.segundo_apellido"
            ></ion-input>
          </ion-item>
          <!-- CURP -->
          <ion-item>
            <ion-input
              label="CURP"
              label-placement="floating"
              v-model="nuevoHorario.curp"
            ></ion-input>
          </ion-item>
          <!-- Correo Electrónico -->
          <ion-item>
            <ion-input
              label="Correo Electrónico"
              type="email"
              label-placement="floating"
              v-model="nuevoHorario.correo_electronico"
            ></ion-input>
          </ion-item>
          <!-- Teléfono -->
          <ion-item>
            <ion-input
              label="Teléfono"
              type="tel"
              label-placement="floating"
              v-model="nuevoHorario.telefono"
            ></ion-input>
          </ion-item>
          <!-- Fecha de Nacimiento -->
          <ion-item>
            <ion-input
              v-model="nuevoHorario.fecha_nacimiento"
              label="Fecha de Nacimiento"
              label-placement="floating"
              type="date"
              placeholder="(YYYY-MM-DD)"
            ></ion-input>
          </ion-item>
          <!-- Fotografía -->
          <ion-item>
            <ion-input
              label="Fotografía (URL)"
              type="url"
              label-placement="floating"
              v-model="nuevoHorario.fotografia"
            ></ion-input>
          </ion-item>
         <!-- Género -->
<ion-item>
  <ion-select v-model="nuevoHorario.genero" placeholder="Género">
    <ion-select-option value="M">Masculino</ion-select-option>
    <ion-select-option value="F">Femenino</ion-select-option>
    <ion-select-option value="N/B">No Binario</ion-select-option>
  </ion-select>
</ion-item>
          <!-- Tipo de Sangre -->
          <ion-item>
            <ion-select v-model="nuevoHorario.tipo_sangre" placeholder="Tipo de Sangre">
              <ion-select-option value="O+">O+</ion-select-option>
              <ion-select-option value="O-">O-</ion-select-option>
              <ion-select-option value="A+">A+</ion-select-option>
              <ion-select-option value="A-">A-</ion-select-option>
              <ion-select-option value="B+">B+</ion-select-option>
              <ion-select-option value="B-">B-</ion-select-option>
              <ion-select-option value="AB+">AB+</ion-select-option>
              <ion-select-option value="AB-">AB-</ion-select-option>
            </ion-select>
          </ion-item>
          <!-- Estatus -->
          
          <!-- Fechas de Registro y Actualización -->
          <ion-item>
            <ion-input
              v-model="nuevoHorario.fecha_registro"
              label="Fecha de Registro"
              label-placement="floating"
              type="date"
              placeholder="(YYYY-MM-DD)"
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-input
              v-model="nuevoHorario.fecha_actualizacion"
              label="Fecha de Actualización"
              label-placement="floating"
              type="date"
              placeholder="(YYYY-MM-DD)"
            ></ion-input>
          </ion-item>
          <!-- ID -->
          <ion-item>
            <ion-input
              label="ID"
              readonly
              label-placement="floating"
              v-model="nuevoHorario.id"
            ></ion-input>
          </ion-item>
          <!-- Botón de registro -->
          <ion-button expand="block">Guardar</ion-button>
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
  IonApp,
  IonToggle,
} from "@ionic/vue";

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
    IonToggle,
  },
  data() {
    return {
      nuevoHorario: {
        titulo_cortesia: "",
        nombre: "",
        primer_apellido: "",
        segundo_apellido: "",
        curp: "",
        correo_electronico: "",
        telefono: "",
        fecha_nacimiento: "",
        fotografia: "",
        genero: "",
        tipo_sangre: "",
        estatus: true,
        fecha_registro: "2024-12-12T02:55:38.874Z",
        fecha_actualizacion: "2024-12-12T02:55:38.874Z",
        id: 0,
      },
    };
  },
};
</script>
