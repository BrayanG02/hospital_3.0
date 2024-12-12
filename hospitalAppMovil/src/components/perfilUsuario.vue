<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Perfil</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="profile-container">
        <ion-avatar>
          <img :src="user.photo" alt="Foto de perfil">
        </ion-avatar>
        <h6>Sube una foto diferente...</h6> 
        <input type="file" class="text-center center-block file-upload" @change="onFileChange" />
        <ion-list>
          <ion-item>
            <ion-label position="floating">Nombre</ion-label>
            <ion-input v-model="user.name"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Correo Electrónico</ion-label>
            <ion-input v-model="user.email" type="email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Rol</ion-label>
            <ion-input v-model="user.role"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Contraseña</ion-label>
            <ion-input v-model="user.password" type="password"></ion-input>
          </ion-item>
        </ion-list>

        <ion-button class="myButton" fill="outline" @click="saveProfile">
          Guardar Cambios
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: 'ProfileView',
  data() {
    return {
      user: {
        photo: 'https://w7.pngwing.com/pngs/882/225/png-transparent-google-logo-google-logo-google-search-icon-google-text-logo-business-thumbnail.png', // URL de la foto de perfil
        name: '',
        email: '',
        role: '',
        password: ''
      }
    }
  },
  methods: {
    saveProfile() {
      // Aquí puedes implementar la lógica para guardar los cambios del perfil
      console.log('Perfil guardado:', this.user);
      // Puedes realizar una llamada a una API para guardar los datos en el servidor, por ejemplo
    },
    onFileChange(event) { const file = event.target.files[0]; const reader = new FileReader(); reader.onload = (e) =>
      {
        this.user.photo = e.target.result; 
      }; reader.readAsDataURL(file); 
    },
  }
}
</script>

<style>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}
ion-avatar {
  margin-bottom: 20px;
  --size: 100px;
}
ion-list {
  width: 100%;
  max-width: 400px;
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
