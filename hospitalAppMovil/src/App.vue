<template>
  <ion-menu content-id="main-content" v-if="isAuthenticated">
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-title>Recursos Humanos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
    <ion-list>
      <ion-menu-toggle>
      <ion-item>
        <RouterLink to="/PerfilUsuario">
          <ion-button class="myButton">
            <img src="../buttons/usuario.png" class="button-icon" />
            Perfil de usuario
          </ion-button>
      </RouterLink>
      </ion-item>
    </ion-menu-toggle>
    <ion-menu-toggle>
      <ion-item>
     <RouterLink to="/AreasMedicas">
          <ion-button class="myButton">
            <img src="../buttons/areas_medicas.png" class="button-icon" />
            Areas Medicas
          </ion-button>
        </RouterLink>
      </ion-item>
    </ion-menu-toggle>
    <ion-menu-toggle>
      <ion-item>
     <RouterLink to="/Horarios">
          <ion-button class="myButton">
            <img src="../buttons/areas_medicas.png" class="button-icon" />
            Horarios
          </ion-button>
        </RouterLink>
      </ion-item>
    </ion-menu-toggle>
    
    <ion-menu-toggle>
      <ion-item>
        <RouterLink to="/dashboardPersonalMedico">
          <ion-button class="myButton">
            <img src="../buttons/dashboard.png" class="button-icon" />
            Dashboard de personal medico
          </ion-button>
        </RouterLink>
      </ion-item>
    </ion-menu-toggle>
    <ion-menu-toggle>
      <ion-item>
        <RouterLink to="/PersonalMedico">
          <ion-button  class="myButton">
            <img src="../buttons/personal_medico.png" class="button-icon" />
            Personal medico
          </ion-button>
        </RouterLink>
      </ion-item>
    </ion-menu-toggle>
    <ion-menu-toggle>
      <ion-item>
        <RouterLink to="/PuestosDepartamentos">
          <ion-button class="myButton">
            <img src="../buttons/puesto_departamentos.png" class="button-icon" />
            Puesto Departamentos
          </ion-button>
        </RouterLink>
      </ion-item>
    </ion-menu-toggle>
    <ion-menu-toggle>
      <ion-item>
        <RouterLink to="/RegistroAreaMedica">
          <ion-button class="myButton">
            <img src="../buttons/registro_persona.png" class="button-icon" />
            Registro de areas medicas
          </ion-button>
        </RouterLink>
      </ion-item>
    </ion-menu-toggle>
    <ion-menu-toggle>
      <ion-item>
        <RouterLink to="/RegistroPersonalMedico">
          <ion-button class="myButton">
            <img src="../buttons/registro_PersonalMedico.png" class="button-icon" />
            Registro de Personal Medico
          </ion-button>
        </RouterLink>
      </ion-item>
    </ion-menu-toggle>
    <ion-menu-toggle>
      <ion-item>
     <RouterLink to="/RegistroHorarios">
          <ion-button class="myButton">
            <img src="../buttons/areas_medicas.png" class="button-icon" />
            Registro Horarios
          </ion-button>
        </RouterLink>
      </ion-item>
    </ion-menu-toggle>
    <ion-menu-toggle>
      <ion-item>
        <RouterLink to="/RegistroPersona">
          <ion-button class="myButton">
            <img src="../buttons/registro_persona.png" class="button-icon" />
            Registro de Persona
          </ion-button>
        </RouterLink>
      </ion-item>
    </ion-menu-toggle>
    <!-- Botón de Cerrar Sesión -->
    <ion-menu-toggle>
          <ion-item @click="logout">
            <ion-button class="myButton">
              <img src="../buttons/cerrar_sesion.png" class="button-icon" />
              Cerrar sesión
            </ion-button>
          </ion-item>
    </ion-menu-toggle>
    </ion-list>
    </ion-content>
  </ion-menu>
  

  <ion-router-outlet id="main-content"></ion-router-outlet>
  
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start" v-if="isAuthenticated">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Hospital Privilege Care</ion-title>

      </ion-toolbar>
    </ion-header>
    <ion-content> 
    <!-- aqui se muestran las vistas de routerlink -->
    <router-view/>
    <!-- aqui se muestran las vistas de routerlink -->
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
      // Lógica de cerrar sesión
      this.isAuthenticated = false; // Cambia el estado para ocultar el menú
      this.$router.push('/'); // Redirige a la pantalla de inicio de sesión
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

  .button-icon {
  width: 30px;
  height: 30px;
  margin-right: 8px; /* Espacio entre la imagen y el texto */
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





</style>