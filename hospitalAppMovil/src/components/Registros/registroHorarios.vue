<template>
  <ion-app>
    <ion-content>

      <!-- Tarjeta para registrar el horario -->
      <ion-card>
        <ion-header>
          <ion-toolbar>
            <ion-title>Registro de Horario de Empleado</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-card-content>

          <ion-item>
            <ion-input
              v-model="nuevoHorario.empleado_id"
              label="Empleado ID"
              label-placement="floating"
              placeholder="ID del empleado"
            ></ion-input>
          </ion-item>

          <!-- Nombre del empleado -->
          <ion-item>
            <ion-input
              v-model="nuevoHorario.nombre"
              label="Nombre"
              label-placement="floating"
              placeholder="Nombre del empleado"
            ></ion-input>
          </ion-item>

          <!-- Especialidad del empleado -->
          <ion-item>
            <ion-input
              v-model="nuevoHorario.especialidad"
              label="Especialidad"
              label-placement="floating"
              placeholder="Especialidad"
            ></ion-input>
          </ion-item>

          <!-- Desplegable para seleccionar día de la semana -->
          <ion-item>
            <ion-select v-model="nuevoHorario.dia_semana" placeholder="Día de la semana">
              <ion-select-option value="Lunes">Lunes</ion-select-option>
              <ion-select-option value="Martes">Martes</ion-select-option>
              <ion-select-option value="Miércoles">Miércoles</ion-select-option>
              <ion-select-option value="Jueves">Jueves</ion-select-option>
              <ion-select-option value="Viernes">Viernes</ion-select-option>
              <ion-select-option value="Sábado">Sábado</ion-select-option>
              <ion-select-option value="Domingo">Domingo</ion-select-option>
            </ion-select>
          </ion-item>

          <!-- Hora de Inicio -->
          <ion-item>
            <ion-input
              v-model="nuevoHorario.hora_inicio"
              label="Hora de inicio"
              type="time"
              placeholder="Hora de Inicio"
            ></ion-input>
          </ion-item>

          <!-- Hora de Fin -->
          <ion-item>
            <ion-input
              v-model="nuevoHorario.hora_fin"
              label="Hora fin"
              type="time"
              placeholder="Hora de Fin"
            ></ion-input>
          </ion-item>

          <!-- Desplegable para seleccionar el turno -->
          <ion-item>
            <ion-select v-model="nuevoHorario.turno" placeholder="Turno">
              <ion-select-option value="Mañana">Mañana</ion-select-option>
              <ion-select-option value="Tarde">Tarde</ion-select-option>
              <ion-select-option value="Noche">Noche</ion-select-option>
            </ion-select>
          </ion-item>

          <!-- Nombre del departamento -->
          <ion-item>
            <ion-input
              v-model="nuevoHorario.nombre_departamento"
              label="Departamento"
              label-placement="floating"
              placeholder="Nombre del departamento"
            ></ion-input>
          </ion-item>

          <!-- Nombre de la sala -->
          <ion-item>
            <ion-input
              v-model="nuevoHorario.nombre_sala"
              label="Sala"
              label-placement="floating"
              placeholder="Nombre de la sala"
              type="number"
            ></ion-input>
          </ion-item>

           <!-- Fecha de Registro -->
           <ion-item>
            <ion-input
              v-model="nuevoHorario.fecha_creacion"
              label="Fecha de Registro"
              label-placement="floating"
              type="date"
              placeholder="(YYYY-MM-DD)"
            ></ion-input>
          </ion-item>

           <!-- Fecha de Registro -->
           <ion-item>
            <ion-input
              v-model="nuevoHorario.fecha_actualizacion"
              label="Fecha de Registro"
              label-placement="floating"
              type="date"
              placeholder="(YYYY-MM-DD)"
            ></ion-input>
          </ion-item>

          <!-- Botón para guardar el registro -->
          <ion-button expand="block" @click="registrarHorario">
            Guardar
          </ion-button>

        </ion-card-content>

      </ion-card>

    </ion-content>
  </ion-app>
</template>

<script>
import { alertController } from '@ionic/vue'; // Asegúrate de importarlo correctamente
import axios from 'axios';
import {
  IonApp,
  IonContent,
  IonButton,
  IonItem,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonCardContent
} from '@ionic/vue';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOb21icmVfVXN1YXJpbyI6ImJyYXlhbiIsIkNvcnJlb19FbGVjdHJvbmljbyI6IjIzMDg5M0B1dHhpY290ZXBlYy5lZHUubXgiLCJDb250cmFzZW5hIjoiUG9sbG8xMjMiLCJOdW1lcm9fVGVsZWZvbmljb19Nb3ZpbCI6Ijc0NjExODYxNDIifQ.8VyAOe8EjYtXpBDyDDAPwRERYFJ5lYI1kSYWnaGZd9I";

export default {
  components: {
    IonApp,
    IonContent,
    IonButton,
    IonItem,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonCardContent
  },

  data() {
    return {
      nuevoHorario: {
        empleado_id: '',
        nombre: '',
        especialidad: '',
        dia_semana: '',
        hora_inicio: '',
        hora_fin: '',
        turno: '',
        nombre_departamento: '',
        nombre_sala: '',
        fecha_creacion: new Date().toISOString().substr(0, 10),
        fecha_actualizacion: new Date().toISOString().substr(0, 10),
        horario_id: ''
      }
    };
  },

  methods: {
    async registrarHorario() {
      try {
        const response = await axios.post('https://privilegecare-deploy-gqmt.onrender.com/horario/', this.nuevoHorario, {
          headers: { Authorization: `Bearer ${token}` }
        });
        this.showAlert(`El registro del horario ${this.nuevoHorario.nombre} fue exitoso!`);
        this.limpiarFormulario();
      } catch (error) {
        this.showAlert('Error al registrar el área médica:', error.message);

        if (error.response) {
          // Si la respuesta existe, muestra los detalles del error del servidor
          const mensajeError = error.response.data.detail || 'Ocurrió un problema con el registro.';
          this.showAlert(`${mensajeError}`);
        } else if (error.request) {
          this.showAlert('No se recibió respuesta del servidor. Verifica tu conexión.');
        } else {
          this.showAlert('Ocurrió un error al intentar registrar. Intenta nuevamente.');
        }
      }
    },

    limpiarFormulario() {
      this.nuevoHorario = {
        empleado_id: '',
        nombre: '',
        especialidad: '',
        dia_semana: '',
        hora_inicio: '',
        hora_fin: '',
        turno: 'Mañana',
        nombre_departamento: '',
        nombre_sala: '',
        fecha_creacion: new Date().toISOString().substr(0, 10),
        fecha_actualizacion: new Date().toISOString().substr(0, 10),
        horario_id: 0
      };
    },
    async showAlert(header, message) {
      const alert = await alertController.create({
        header: header,
        message: message,
        buttons: ['OK'],
      });
      await alert.present();
    },
  }
}
</script>

<style scoped>
.ion-input {
  font-weight: bold;
  padding: 12px;
}

.ion-button {
  margin-top: 16px;
  font-weight: bold;
  background-color: #007BFF;
}

.ion-button:hover {
  background-color: #0056b3;
}
</style>
