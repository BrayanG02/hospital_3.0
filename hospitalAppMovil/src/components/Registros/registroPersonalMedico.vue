<template>
    <ion-app>
      <ion-content>
        <ion-card>
          <ion-header>
        <ion-toolbar>
          <ion-title>Registro de Persona</ion-title><br>
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
                label="Apellido paterno"
                label-placement="floating"
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-input
                label="Apellido materno"
                label-placement="floating"
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-input
                label="Genero"
                label-placement="floating"
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-input
                label="CURP"
                label-placement="floating"
              ></ion-input>
            </ion-item>
             <!-- seleccionar estado del area -->
            <ion-item>
            <ion-select placeholder="Tipo de sangre">
              <ion-select-option value="Paciente">O+</ion-select-option>
              <ion-select-option value="Medico">O-</ion-select-option>
            </ion-select>
          </ion-item>
            <!-- Botón de registro -->
            <ion-button expand="block">Guardar</ion-button>
          </ion-card-content>
        </ion-card>
      </ion-content>
    </ion-app>
  </template>
    
    <script>
     import {  IonContent, IonButton, IonItem, IonInput, IonSelect, IonSelectOption, IonCardContent, IonApp } from '@ionic/vue';
    
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
      }
  };
    </script>
    