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
              type="time"
              placeholder="Hora de Inicio"
            ></ion-input>
          </ion-item>

          <!-- Hora de Fin -->
          <ion-item>
            <ion-input
              v-model="nuevoHorario.hora_fin"
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
        empleado_id: 0,
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
      }
    };
  },

  methods: {
    registrarHorario() {
      console.log('Horario registrado:', this.nuevoHorario);

      alert(`¡Registro exitoso para ${this.nuevoHorario.nombre}!`);

      this.limpiarFormulario();
    },

    limpiarFormulario() {
      this.nuevoHorario = {
        empleado_id: 0,
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
    }
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
