import { createRouter, createWebHistory } from '@ionic/vue-router';
//IMPORTACIONES DE LAS VISTAS
import LoginView from '../components/loginInicio.vue';

import PerfilUsuario from '../components/perfilUsuario.vue';
//Recursos humanos
import AreasMedicas from '../components/recursos_humanos/AreasMedicas.vue';
import DashboardPersonalMedico from '../components/recursos_humanos/DashboardPersonalMedico.vue';
import PersonalMedico from '../components/recursos_humanos/PersonalMedico.vue';
import PuestosDepartamentos from '../components/recursos_humanos/PuestosDepartamentos.vue';
import Horarios from '../components/recursos_humanos/Horarios.vue';
//Registros
import RegistroAreasMedicas from '../components/Registros/registroAreasMedicas.vue';
import RegistroPersona from '../components/Registros/registroPersona.vue';
import RegistroHorarios from '../components/Registros/registroHorarios.vue';
import RegistroPersonalMedico from '../components/Registros/registroPersonalMedico.vue';
import RegistroUser from '../components/Registros/registroUser.vue';

const routes= [
 {
  path: '/',
  redirect: '/LoginView'
 },
 {  
  path: '/LoginView',
  name: 'LoginView',
  component: LoginView
 },
 {
  path: '/RegisterUser',
  name: 'RegisterUser',
  component: RegistroUser

 },
 {
    path: '/dashboardPersonalMedico',
    name: 'DashboardPersonalMedico',
    component: DashboardPersonalMedico,
    meta: { requiresAuth: true }, // Esta ruta requiere que el usuario esté logueado.
    children:[

    ],
 },
 {
  path: '/RegistroAreaMedica',
  name: 'RegistroAreaMedica',
  component: RegistroAreasMedicas  
 },
 {
  path: '/RegistroPersona',
  name: 'RegistroPersona',
  component: RegistroPersona  
 },
 {
  path: '/registroHorarios',
  name: 'RegistroHorarios',
  component: RegistroHorarios,   
 },
 {
  path: '/RegistroPersonalMedico',
  name: 'RegistroPersonalMedico',
  component: RegistroPersonalMedico  
 },
 {
  path: '/PerfilUsuario',
  name: 'PerfilUsuario',
  component: PerfilUsuario   
 },
 {
  path: '/AreasMedicas',
  name: 'AreasMedicas',
  component: AreasMedicas,   
 },
 {
  path: '/PersonalMedico',
  name: 'PersonalMedico',
  component: PersonalMedico,   
 },
 {
  path: '/PuestosDepartamentos',
  name: 'PuestosDepartamentos',
  component: PuestosDepartamentos,   
 },
{
  path: '/registroHorarios',
  name: 'RegistroHorarios',
  component: RegistroHorarios,   
 },
 {
  path: '/Horarios',
  name: 'Horarios',
  component: Horarios,   
 }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
