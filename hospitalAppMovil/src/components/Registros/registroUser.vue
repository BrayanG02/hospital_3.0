<template>
  <ion-app>
    <ion-content>
      <ion-card>
        <ion-header>
          <ion-toolbar>
            <ion-title>Registro de Usuario</ion-title><br />
          </ion-toolbar>
        </ion-header>
        <ion-card-content>

          <!-- CURP -->
          <ion-item>
            <ion-input
              label="Usuario"
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
          <!-- ID -->
          <ion-item>
            <ion-input
              type="password"
              required
              label="Contraseña"
              label-placement="floating"
              v-model="nuevoHorario.contrasena"
            ></ion-input>
          </ion-item>
          <!-- Botón de registro -->
          <ion-button class="myButton" fill="outline">Registrar Usuario</ion-button>
        
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
        contrasena: "",
      },
    };
  },
};
</script>

<style>
.myButton {
  --background:    #001F3F; /* Fondo morado */
  --color: white; /* Texto blanco */
  --border-radius: 12px; /* Bordes redondeados */
  --padding-start: 20px; /* Espaciado interno para texto */
  --padding-end: 20px;
  --height: 50px; /* Altura fija para diseño móvil */
  font-size: 16px; /* Tamaño de texto más grande para táctiles */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra suave */
  text-transform: uppercase; /* Texto en mayúsculas */
  transition: background-color 0.2s ease, transform 0.2s ease;
}

/* Efecto de presión en el botón */
.myButton:active {
  transform: scale(0.96); /* Leve reducción de tamaño */
  --background: #5379d0; /* Fondo más oscuro al presionar */
}
</style>
