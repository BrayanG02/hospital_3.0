<template>
  <ion-app>
<ion-header>
  <ion-toolbar color="tertiary">
    <ion-title>Menú personalizado</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-list>
    <ion-item>Tomates</ion-item>
    <ion-item>Lechugas</ion-item>
    <ion-item>Cebollas</ion-item>
    <ion-item>Calabazas</ion-item>
    <ion-item>Pepinos</ion-item>
  </ion-list>
</ion-content>


<ion-menu side="end" type="push">

<ion-header>
  <ion-toolbar color="danger">
    <ion-title>Inicio</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-list>
    <ion-item>Ajustes</ion-item>
    <ion-item>Mi cuenta</ion-item>
    <ion-item>Usuarios</ion-item>
    <ion-item>Vídeos</ion-item>
    <ion-item>Publicaciones</ion-item>
  </ion-list>
</ion-content>

</ion-menu>


<ion-router-outlet main></ion-router-outlet>

    
</ion-app>
</template>

<script>
import {IonApp, IonMenu, IonContent, IonList } from '@ionic/vue';

export default{
  components: {
    IonApp,
    IonMenu,
    IonContent,
    IonList
  }
}

</script>