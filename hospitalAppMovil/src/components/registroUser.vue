<template>
    <ion-content>
      <ion-card>
        <ion-header>
      <ion-toolbar>
        <ion-title>Registro de usuario</ion-title><br>
        <ion-subtitle>Regístrate y forma parte del hospital</ion-subtitle>
      </ion-toolbar>
    </ion-header>  
        <ion-card-content>
          <!-- Selección de roles -->
          <ion-item>
            <ion-select
              label="Selecciona un Rol"
              label-placement="floating">
              <ion-select-option value="recursosHumanos">Recursos Humanos</ion-select-option>
              <ion-select-option value="recursosHumanos">Programacion quirurgica</ion-select-option>
              <ion-select-option value="recursosHumanos">Pediatria</ion-select-option>
            </ion-select>
          </ion-item>
  
          <!-- Nombre completo -->
          <ion-item>
            <ion-input
              v-model="user.name"
              required
              label="Nombre completo"
              label-placement="floating"
            ></ion-input>
          </ion-item>
  
          <!-- Correo electrónico -->
          <ion-item>
            <ion-input
              v-model="user.email"
              type="email"
              required
              label="Correo electrónico"
              label-placement="floating"
            ></ion-input>
          </ion-item>
  
          <!-- Contraseña -->
          <ion-item>
            <ion-input
              v-model="user.password"
              type="password"
              required
              label="Contraseña"
              label-placement="floating"
            ></ion-input>
          </ion-item>
  
          <!-- Confirmar contraseña -->
          <ion-item>
            <ion-input
              v-model="confirmPassword"
              type="password"
              required
              label="Confirma Contraseña"
              label-placement="floating"
            ></ion-input>
          </ion-item>
  
          <!-- Botón de registro -->
          <ion-button expand="block" @click="registerUser">Regístrate</ion-button>
        </ion-card-content>
  
        <ion-card-footer>
          <ion-text>
            ¿Ya tienes cuenta?
            <ion-button fill="clear" size="small" href="/">Inicia Sesión</ion-button>
          </ion-text>
        </ion-card-footer>
      </ion-card>
    </ion-content>
  </template>
  
  <script>
  import {  IonContent, IonButton, IonItem, IonInput, IonSelect, IonSelectOption, IonCardContent } from '@ionic/vue';
  
  export default {
    components: {
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
        user: {
          name: "",
          email: "",
          password: ""
        },
        confirmPassword: "",
/*         roles: [
          { id: 1, Nombre: "Administrador" },
          { id: 2, Nombre: "Editor" },
          { id: 3, Nombre: "Usuario" },
          { id: 4, Nombre: "Moderador" },
          { id: 5, Nombre: "Invitado" }
        ],
        selectedRole: null*/
      }; 
    },
    methods: {
      registerUser() {
        if (this.user.password !== this.confirmPassword) {
          console.error("Las contraseñas no coinciden.");
          return;
        }
  
        console.log("Usuario registrado:", {
          ...this.user,
          role: this.selectedRole
        });
        // Aquí puedes agregar la lógica para registrar al usuario (API, validaciones, etc.)
      },
/*       fetchRole(event) {
        this.selectedRole = event.detail.value;  Actualiza el modelo
  setTimeout(() => {
    console.log("Rol seleccionado:", this.selectedRole);
  }, 4);  Luego actualiza el modelo
      } */

    }
};
  </script>
  