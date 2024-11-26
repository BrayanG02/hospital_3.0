<!-- <template>
    <ion-content>
      <ion-header>
        <ion-toolbar>
          <ion-title>Registro de Usuario</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-item-group>
        <ion-item>
          <ion-label position="floating">Nombre</ion-label>
          <ion-input v-model="user.firstName" type="text" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Apellido</ion-label>
          <ion-input v-model="user.lastName" type="text" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Correo Electrónico</ion-label>
          <ion-input v-model="user.email" type="email" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Número de Teléfono</ion-label>
          <ion-input v-model="user.phone" type="tel" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Contraseña</ion-label>
          <ion-input v-model="user.password" type="password" required></ion-input>
        </ion-item>
      </ion-item-group>
  
      <ion-button expand="full" @click="registerUser ">Registrar</ion-button>
    </ion-content>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: ''
        }
      };
    },
    methods: {
      registerUser () {
        // Aquí puedes realizar la lógica para registrar al usuario
        console.log('Usuario registrado:', this.user);
        // Aquí puedes agregar la llamada a tu API para registrar al usuario
      }
    }
  };
  </script>
  
  <style scoped>
  /* Puedes agregar estilos aquí si lo deseas */
  </style> -->

  <template>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Regístrate y forma parte del hospital</ion-card-subtitle>
          <ion-card-title>REGÍSTRATE</ion-card-title>
        </ion-card-header>
  
        <ion-card-content>
          <!-- Selección de roles -->
          <ion-item>
            <ion-select
              label="Selecciona un Rol"
              label-placement="floating"
              v-model="selectedRole"
              @ionChange="fetchRole($event)"
              interface="popover"
            >
              <ion-select-option
                v-for="role in roles"
                :key="role.id"
                :value="role.id"
              >
                {{ role.Nombre }}
              </ion-select-option>
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
            <ion-button fill="clear" size="small" href="/login">Inicia Sesión</ion-button>
          </ion-text>
        </ion-card-footer>
      </ion-card>
    </ion-content>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: "",
          email: "",
          password: ""
        },
        confirmPassword: "",
        roles: [
          { id: 1, Nombre: "Administrador" },
          { id: 2, Nombre: "Editor" },
          { id: 3, Nombre: "Usuario" },
          { id: 4, Nombre: "Moderador" },
          { id: 5, Nombre: "Invitado" }
        ],
        selectedRole: null
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
      fetchRole(event) {
        this.selectedRole = event.detail.value; // Actualiza el modelo
  setTimeout(() => {
    console.log("Rol seleccionado:", this.selectedRole);
  }, 4); // Luego actualiza el modelo
      }

    }
  };
  </script>
  