<template>
  <ion-menu content-id="main-content" v-if="isAuthenticated">
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-title>Recursos humanos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
    <ion-list>
      <ion-item>
     <RouterLink to="/RegisterUSer" @click="closeMenu">
          <ion-button>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="28px" fill="#e8eaed"><path d="M420-280h120v-100h100v-120H540v-100H420v100H320v120h100v100ZM160-120v-480l320-240 320 240v480H160Zm80-80h480v-360L480-740 240-560v360Zm240-270Z"/></svg>
            <span class="material-symbols-outlined">
            Areas Medicas
            </span>
          </ion-button>
        </RouterLink>
      </ion-item>
      <ion-item>
        <RouterLink to="/dashboardPersonalMedico">
          <ion-button>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="28px" fill="#e8eaed"><path d="M80-120v-80h800v80H80Zm40-120v-280h120v280H120Zm200 0v-480h120v480H320Zm200 0v-360h120v360H520Zm200 0v-600h120v600H720Z"/></svg>
            <span class="material-symbols-outlined">
            Dashboard de personal medico
            </span>
          </ion-button>
        </RouterLink>
      </ion-item>
      <ion-item>
        <RouterLink to="/">
          <ion-button>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="28px" fill="#e8eaed"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
            <span class="material-symbols-outlined">
            Personal Medico
            </span>
          </ion-button>
        </RouterLink>
      </ion-item>
      <ion-item>
        <RouterLink to="/RegisterUSer">
          <ion-button>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M343-470ZM80-120v-480l320-240 215 162q-25 3-47 11.5T526-644l-126-96-240 180v360h160v80H80Zm320 0v-76q0-21 10.5-39.5T439-265q46-27 96.5-41T640-320q54 0 104.5 14t96.5 41q18 11 28.5 29.5T880-196v76H400Zm86-80h308q-35-20-74-30t-80-10q-41 0-80 10t-74 30Zm154-160q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520q-17 0-28.5 11.5T600-480q0 17 11.5 28.5T640-440Zm0 240Z"/></svg>
            <span class="material-symbols-outlined">
            Puesto personal medico
            </span>
          </ion-button>
        </RouterLink>
      </ion-item>
      <ion-item>
        <RouterLink to="/RegisterUSer">
          <ion-button>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"/></svg>
            <span class="material-symbols-outlined">
            Puesto departamentos
            </span>
          </ion-button>
        </RouterLink>
      </ion-item>
    </ion-list>
    </ion-content>
  </ion-menu>

  <ion-router-outlet id="main-content"></ion-router-outlet>
  
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Menu de Recursos Humanos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"> 
    <!-- aqui se muestran las vistas de routerlink -->
    <router-view/>
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';


  export default defineComponent({
    components: {
      IonButtons,
      IonContent,
      IonHeader,
      IonMenu,
      IonMenuButton,
      IonPage,
      IonTitle,
      IonToolbar,
    },
    data() {
    return {
      isAuthenticated: false, // Controla si el usuario está autenticado
    };
  },
  methods: {
    login() {
      this.isAuthenticated = true; // Llama a esto cuando el usuario inicie sesión
    },
    logout() {
      this.isAuthenticated = false; // Llama a esto cuando el usuario cierre sesión
    },
  },
  });
</script>

<style scoped>
  ion-menu::part(backdrop) {
    background-color: rgb(11, 105, 246);
  }

  ion-menu::part(container) {
    border-radius: 0 20px 20px 0;

    box-shadow: 10px 0px 16px rgba(11, 105, 246);
  }
</style>