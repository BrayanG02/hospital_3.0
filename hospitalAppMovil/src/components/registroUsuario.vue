<template>
    <ion-page>
    <ion-content>
    <div class="container">
    <ion-card class="login-card">
      <!-- Contenido del formulario -->
      <ion-card-content>
        <ion-toolbar>
        <ion-title>Perfil</ion-title>
      </ion-toolbar>

  
        <ion-item>
          <ion-input
            v-model="usuario"
            type="text"
            required
            label="Nombre"
            label-placement="floating"
          ></ion-input>
        </ion-item>
  
        <ion-item>
          <ion-input
            v-model="usuario"
            type="text"
            required
            label="Pimer Apellido"
            label-placement="floating"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-input
            v-model="usuario"
            type="text"
            required
            label="Email"
            label-placement="floating"
            placeholder="Segundo Apellido"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-input
            v-model="usuario"
            type="text"
            required
            label="CURP"
            label-placement="floating"
            
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-input
            v-model="usuario"
            type="text"
            required
            label="Tipo de Sangre"
            label-placement="floating"
            
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-input
            v-model="usuario"
            type="text"
            required
            label="Genero"
            label-placement="floating"
            
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-input
            v-model="usuario"
            type="text"
            required
            label="Nacimiento"
            label-placement="floating"
          ></ion-input>
        </ion-item>
        <RouterLink  to="/dashboardPersonalMedico">
          <ion-button class="myButton" fill="outline" @click="signIn">
            Registrar
          </ion-button>
        </RouterLink>
        
      </ion-card-content>
    </ion-card>
   </div>
   </ion-content>
   </ion-page>
  </template>
  
  <script>
  import {
    IonPage,
    IonContent,
    IonButton,
    IonLabel,
    IonItem,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonIcon,
  } from '@ionic/vue';
  
  export default {
    components: {
      IonPage,
      IonContent,
      IonButton,
      IonLabel,
      IonItem,
      IonInput,
      IonSelect,
      IonSelectOption,
      IonIcon,
    },
    methods: {
      signInWithGoogle() {
        console.log('Sign in with Google');
      },
      signIn() {
        console.log('Sign in');
        this.$root.isAuthenticated = true;
        this.$router.push('/');
      },
      register() {
        console.log('Register');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilo principal del contenedor */
  .login-card {
    margin: 20px;
    border-radius: 12px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
  }
  
  /* Logo */
  .logo-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .logo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 2px solid #e0e0e0;
    padding: 10px;
    background-color: #fff;
  }
  
  /* Divider para separar el contenido */
  .divider {
    margin: 16px 0;
    font-size: 14px;
    color: #666;
    text-align: center;
    position: relative;
  }
  
  .divider::before,
  .divider::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 40%;
    background: #ddd;
    top: 50%;
  }
  
  .divider::before {
    left: 0;
  }
  
  .divider::after {
    right: 0;
  }
  
  /* Estilo de los botones */
  ion-button {
    margin-top: 10px;
  }
  
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
  
  .container { display: flex; justify-content: center; align-items: center; height: 100%; /* Asegúrate de que el contenedor ocupe toda la altura de la ventana */
   }
  
   ion-content { --ion-background-color: transparent; }
  </style>
  