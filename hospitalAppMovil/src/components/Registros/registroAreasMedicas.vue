<template>
  <ion-app>
    <ion-content>
      <ion-card>
        <ion-header>
      <ion-toolbar>
        <ion-title>Registro de Área Médica</ion-title><br>
      </ion-toolbar>
    </ion-header>
        <ion-card-content>
          <!-- Nombre de area medica -->
          <ion-item>
            <ion-input
              label="Nombre del area"
              label-placement="floating"
            ></ion-input>
          </ion-item>
           <!-- seleccionar estado del area -->
          <ion-item>
          <ion-select placeholder="Selecciona el estado de la area">
            <ion-select-option value="Paciente">Activo</ion-select-option>
            <ion-select-option value="Medico">Baja</ion-select-option>
          </ion-select>
        </ion-item>
         <!-- Descripcion -->
        <ion-item>
            <ion-input
              label="Descripción"
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
  