<template>
    <ion-page>
      <ion-content>
        <ion-button expand="block" fill="outline" @click="signInWithGoogle">
          INICIA SESIÓN CON GOOGLE
        </ion-button>
  
        <ion-label>O inicia sesión con tu email</ion-label>
  
        <ion-item>
          <ion-select label="Selecciona un Rol"
          label-placement="floating">
            <ion-select-option value="Paciente">Paciente</ion-select-option>
            <ion-select-option value="Medico">Medico</ion-select-option>
          </ion-select>
        </ion-item>
  
        <ion-item>
          <ion-input
          v-model="usuario"
           type="email"
           required label="Email"
           label-placement="floating"
           placeholder="Escribe tu email"
           >
          </ion-input>
        </ion-item>
  
        <ion-item>
          <ion-input
            v-model="usuario"
            type="password"
            required label="Contraseña"
            label-placement="floating"
            placeholder="Escribe tu contraseña">
            </ion-input>
        </ion-item>
        
      <RouterLink to="/dashboardPersonalMedico">
        <ion-button expand="block" fill="solid" @click="signIn">
          INICIAR SESIÓN
        </ion-button>
      </RouterLink>
        
      <RouterLink to="/RegisterUser">
        <ion-button expand="block" fill="outline" @click="register">
          O REGISTRATE
        </ion-button>
      </RouterLink>

      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonPage, IonContent, IonButton, IonLabel, IonItem, IonInput, IonSelect, IonSelectOption } from '@ionic/vue';
  
  export default {
    components: {
      IonPage,
      IonContent,
      IonButton,
      IonLabel,
      IonItem,
      IonInput,
      IonSelect,
      IonSelectOption
    },
    methods: {
      signInWithGoogle() {
        // Your Google Sign-in logic here
        console.log('Sign in with Google');
      },
      signIn() {
        // Your Sign-in logic here
        console.log('Sign in'); 
       // Simula inicio de sesión exitoso
       this.$root.isAuthenticated = true;
       this.$router.push('/');
      },
      register() {
        // Your registration logic here
        console.log('Register');
      }
    }
  };
  </script>
  
  <style scoped>
  ion-content {
    padding: 16px;
  }
  </style>