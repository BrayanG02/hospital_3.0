<template>
  <ion-app>
    <ion-content>

      <!-- Tarjeta para registrar el horario de un empleado -->
      <ion-card>
        <ion-header>
          <ion-toolbar>
            <ion-title>Registro de Horario de Empleado</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-card-content>

          <!-- ID del Empleado -->
          <ion-item>
            <ion-input
              v-model="nuevoHorario.empleado_id"
              label="ID del Empleado"
              label-placement="floating"
              type="number"
              placeholder="ID del empleado"
            ></ion-input>
          </ion-item>

          <!-- Nombre del Empleado -->
          <ion-item>
            <ion-input
              v-model="nuevoHorario.nombre"
              label="Nombre"
              label-placement="floating"
              placeholder="Nombre del empleado"
            ></ion-input>
          </ion-item>

          <!-- Especialidad -->
          <ion-item>
            <ion-input
              v-model="nuevoHorario.especialidad"
              label="Especialidad"
              label-placement="floating"
              placeholder="Especialidad del empleado"
            ></ion-input>
          </ion-item>

          <!-- Día de la Semana (Desplegable) -->
          <ion-item class="select-item">
            <ion-label position="floating">Día de la Semana</ion-label>
            <ion-select v-model="nuevoHorario.dia_semana" placeholder="Seleccione un día">
              <ion-select-option value="Lunes">Lunes</ion-select-option>
              <ion-select-option value="Martes">Martes</ion-select-option>
              <ion-select-option value="Miércoles">Miércoles</ion-select-option>
              <ion-select-option value="Jueves">Jueves</ion-select-option>
              <ion-select-option value="Viernes">Viernes</ion-select-option>
              <ion-select-option value="Sábado">Sábado</ion-select-option>
              <ion-select-option value="Domingo">Domingo</ion-select-option>
            </ion-select>
          </ion-item>

          <!-- Turno (Desplegable) -->
          <ion-item class="select-item">
            <ion-label position="floating">Turno</ion-label>
            <ion-select v-model="nuevoHorario.turno" placeholder="Seleccione un turno">
              <ion-select-option value="Mañana">Mañana</ion-select-option>
              <ion-select-option value="Tarde">Tarde</ion-select-option>
              <ion-select-option value="Noche">Noche</ion-select-option>
            </ion-select>
          </ion-item>

          <!-- Hora de Inicio -->
          <ion-item>
            <ion-input
              v-model="nuevoHorario.hora_inicio"
              label="Hora de Inicio"
              label-placement="floating"
              type="time"
              placeholder="Hora de inicio"
            ></ion-input>
          </ion-item>

          <!-- Hora de Fin -->
          <ion-item>
            <ion-input
              v-model="nuevoHorario.hora_fin"
              label="Hora de Fin"
              label-placement="floating"
              type="time"
              placeholder="Hora de fin"
            ></ion-input>
          </ion-item>

          <!-- Nombre del Departamento -->
          <ion-item>
            <ion-input
              v-model="nuevoHorario.nombre_departamento"
              label="Departamento"
              label-placement="floating"
              placeholder="Nombre del departamento"
            ></ion-input>
          </ion-item>

          <!-- Nombre de la Sala -->
          <ion-item>
            <ion-input
              v-model="nuevoHorario.nombre_sala"
              label="Sala"
              label-placement="floating"
              placeholder="Nombre de la sala"
            ></ion-input>
          </ion-item>

          <!-- Fecha de Creación -->
          <ion-item>
            <ion-input
              v-model="nuevoHorario.fecha_creacion"
              label="Fecha de Creación"
              label-placement="floating"
              type="date"
              placeholder="Fecha de creación"
            ></ion-input>
          </ion-item>

          <!-- Fecha de Actualización -->
          <ion-item>
            <ion-input
              v-model="nuevoHorario.fecha_actualizacion"
              label="Fecha de Actualización"
              label-placement="floating"
              type="date"
              placeholder="Fecha de actualización"
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
  IonContent,
  IonButton,
  IonItem,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonCardContent,
  IonLabel,
  IonCard,
  IonApp
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
    IonCardContent,
    IonCard,
    IonLabel
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
        turno: '',
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
      console.log('Horario del Empleado registrado:', this.nuevoHorario);

      alert(`El horario del empleado '${this.nuevoHorario.nombre}' fue registrado exitosamente!`);

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
        turno: '',
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
/* Input básico */
.ion-input {
  font-weight: bold;
  padding: 12px;
}

/* Estilo para separadores entre campos */
ion-item {
  margin-bottom: 16px;
}

/* Personalización para los campos con marco alrededor */
.select-item {
  border: 1px solid #ccc; /* Borde gris claro */
  border-radius: 8px; /* Bordes redondeados */
  padding: 12px;
  margin-bottom: 16px;
}

.select-item ion-select {
  padding: 10px;
}

/* Botones personalizados */
.ion-button {
  margin-top: 16px;
  font-weight: bold;
  background-color: #007BFF;
}

.ion-button:hover {
  background-color: #0056b3;
}
</style>
