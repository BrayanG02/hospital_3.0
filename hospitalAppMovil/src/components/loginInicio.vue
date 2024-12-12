<template>
  <ion-app>
  <ion-page>
  <ion-content>
  <div class="container">
  <ion-card class="login-card">
    <!-- Imagen principal -->
    <div class="logo-container">
      <img src="../../buttons/icono2.png" class="logo" alt="Icono principal" />
    </div>

    <!-- Contenido del formulario -->
    <ion-card-content>
      <ion-button class="myButton" fill="outline">
        <ion-icon slot="start" name="logo-google"></ion-icon>
        INICIA SESIÓN CON GOOGLE
      </ion-button>
      <div>O inicia sesión con tu email</div>

      <ion-item>
        <ion-input
          v-model="usuario.Correo_Electronico"
          type="email"
          required
          label="Email"
          label-placement="floating"
          placeholder="Escribe tu email"
          
        ></ion-input>
      </ion-item>

      <ion-item>
        <ion-input
          v-model="usuario.Contrasena"
          type="password"
          required
          label="Contraseña"
          label-placement="floating"
          placeholder="Escribe tu contraseña"
          
        ></ion-input>
      </ion-item>

      
        <ion-button class="myButton" fill="outline" expand="block" @click="login">
          INICIAR SESIÓN
        </ion-button>
      

      <RouterLink to="/RegistroPersona">
        <ion-button class="myButton" fill="outline" @click="register">
          O REGÍSTRATE
        </ion-button>
      </RouterLink>
    </ion-card-content>
  </ion-card>
 </div>
 </ion-content>
 </ion-page>
</ion-app>
</template>

<script>
import axios from "axios";
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
  IonAlert
} from '@ionic/vue';

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
    IonAlert
  },
  data() {
    return {
      usuario: {
        Nombre_Usuario: "", // Puede estar vacío si no se usa
        Correo_Electronico: "",
        Numero_Telefonico_Movil: "", // Puede estar vacío si no se usa
        Contrasena: "",
      },
      token: null,
    };
  },
  methods: {
    async login() {
      console.log('Iniciando sesión...');
      
      if (!this.usuario.Correo_Electronico || !this.usuario.Contrasena) {
        console.log('Campos vacíos');
        return this.showAlert('Error', 'Por favor, completa todos los campos.');
      }

      try {
    const response = await axios.post('https://privilegecare-deploy-gqmt.onrender.com/login/', {
      Nombre_Usuario: this.usuario.Nombre_Usuario,
      Correo_Electronico: this.usuario.Correo_Electronico,
      Numero_Telefonico_Movil: this.usuario.Numero_Telefonico_Movil,
      Contrasena: this.usuario.Contrasena,
    });
    console.log('Respuesta del servidor:', response.data);


    this.token = response.data; // Almacena el token en el estado
    localStorage.setItem("token", this.token);

        const { token } = response.data;
        
        if (this.token) {
          localStorage.setItem('authToken', this.token); // Almacena el token
          console.log('Token almacenado:', this.token);
          this.$router.push('/dashboardPersonalMedico'); // Redirige a la página principal
        } else {
          this.showAlert('Error', 'Credenciales incorrectas.');
        }
      } catch (error) {
        console.error(error);
        this.showAlert('Error', 'No se pudo conectar al servidor.');
      }
    },
    // Método para mostrar alertas
    async showAlert(header, message) {
      const alert = await this.$ionic.alert.create({
        header: header,
        message: message,
        buttons: ['OK'],
      });
      await alert.present();
    },
  },

};

</script>

<style scoped>
/* Estilo principal del contenedor */
.login-card {
  margin: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}

/* Logo */
.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.logo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid #e0e0e0;
  padding: 10px;
  background-color: #fff;
}

/* Divider para separar el contenido */
.divider {
  margin: 16px 0;
  font-size: 14px;
  color: #666;
  text-align: center;
  position: relative;
}

.divider::before,
.divider::after {
  content: '';
  position: absolute;
  height: 1px;
  width: 40%;
  background: #ddd;
  top: 50%;
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

/* Estilo de los botones */
ion-button {
  margin-top: 10px;
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

.container { display: flex; justify-content: center; align-items: center; height: 100%; /* Asegúrate de que el contenedor ocupe toda la altura de la ventana */
 }

 ion-content { --ion-background-color: transparent; }
</style>
