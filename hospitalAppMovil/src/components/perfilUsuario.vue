<template>
    <ion-app>
      <ion-content>
        <ion-card>
          <ion-header>
        <ion-toolbar>
          <ion-title>Perfil del Usuario</ion-title><br>
        </ion-toolbar>
      </ion-header>
          <ion-card-content>
            <!-- Nombre de area medica -->
            <ion-item>
              <ion-input
                label="Nombre"
                label-placement="floating"
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-input
                label="Correo electronico"
                label-placement="floating"
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-input
                label="Rol"
                label-placement="floating"
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
     import {  IonContent, IonButton, IonItem, IonInput,IonCardContent, IonApp } from '@ionic/vue';
    
    export default {
      components: {
        IonApp,
        IonContent,
        IonButton,
        IonItem,
        IonInput,

        IonCardContent,
      }
  };
    </script>
    