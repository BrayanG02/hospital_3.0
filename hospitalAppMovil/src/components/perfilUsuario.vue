<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Perfil de Usuario</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content>
      <div class="profile-container">
        <ion-list>
          <ion-item>
            <ion-input
              v-model="user.Nombre_Usuario"
              readonly
              label="Nombre de Usuario"
              label-placement="floating">
            </ion-input>
          </ion-item>

          <ion-item>
            <ion-input
              v-model="user.Correo_Electronico"
              readonly
              label="Correo electrónico"
              label-placement="floating">
            </ion-input>
          </ion-item>

          <ion-item>
            <ion-input
              v-model="user.Estatus"
              readonly
              label="Estatus"
              label-placement="floating">
            </ion-input>
          </ion-item>

          <ion-item>
            <ion-input
              v-model="user.Fecha_Registro"
              readonly
              label="Fecha de Registro"
              label-placement="floating">
            </ion-input>
          </ion-item>

          <ion-item>
            <ion-input
              v-model="user.Numero_Telefonico_Movil"
              readonly
              label="Número de Teléfono"
              label-placement="floating">
            </ion-input>
          </ion-item>
        </ion-list>
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
import axios from 'axios';

export default {
  name: 'Login',
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
  data() {
    return {
      user: {
      },
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOb21icmVfVXN1YXJpbyI6ImJyYXlhbiIsIkNvcnJlb19FbGVjdHJvbmljbyI6IjIzMDg5M0B1dHhpY290ZXBlYy5lZHUubXgiLCJDb250cmFzZW5hIjoiUG9sbG8xMjMiLCJOdW1lcm9fVGVsZWZvbmljb19Nb3ZpbCI6Ijc0NjExODYxNDIifQ.8VyAOe8EjYtXpBDyDDAPwRERYFJ5lYI1kSYWnaGZd9I", // Asegúrate de 
      ID: 5,
    };
  },
  created() {
    this.fetchPersonaID();
  },
  methods: {
    async fetchPersonaID() {
      try {
        const response = await axios.get('https://privilegecare-deploy-gqmt.onrender.com/users/',
          {
            headers: {
              Authorization: `Bearer ${this.token}`
          }
        }
      );
        const users = response.data;
        console.log('Datos de usuarios:', users);
        this.user = users.find(
          (u) => u.ID === this.ID
        ); // Encuentra el usuario con el ID especificado
        if (!this.user) {
          console.error("Usuario no encontrado");
        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    },
    },
};
</script>

<style scoped>
/* Estilos generales para la página */
.profile-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 /* Fondo suave */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

ion-list {
  width: 100%;
  max-width: 500px; /* Limita el ancho de la lista */
}

ion-item {
  background-color: #ffffff; /* Fondo blanco para los items */
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

ion-input {
  --padding-start: 15px;
  --padding-end: 15px;
}

/* Ajustes de los labels */
ion-label {
  color: #333;
  font-weight: 500;
}

ion-input[readonly] {
  color: #666;
}
</style>