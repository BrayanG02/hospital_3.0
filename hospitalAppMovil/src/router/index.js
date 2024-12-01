import { createRouter, createWebHistory } from '@ionic/vue-router';
//IMPORTACIONES DE LAS VISTAS
import LoginView from '../components/loginInicio.vue';
import RegistroUser from '../components/registroUser.vue';
import PerfilUsuario from '../components/perfilUsuario.vue';
//Recursos humanos
import AreasMedicas from '../components/recursos_humanos/AreasMedicas.vue';
import DashboardPersonalMedico from '../components/recursos_humanos/DashboardPersonalMedico.vue';
import PersonalMedico from '../components/recursos_humanos/PersonalMedico.vue';
import PuestoPersonalMedico from '../components/recursos_humanos/PuestoPersonalMedico.vue';
import PuestosDepartamentos from '../components/recursos_humanos/PuestosDepartamentos.vue';
//Registros
import RegistroAreasMedicas from '../components/Registros/registroAreasMedicas.vue';
import RegistroPersona from '../components/Registros/registroPersona.vue';


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
    meta: { requiresAuth: true } // Esta ruta requiere que el usuario esté logueado.
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
  path: '/PuestoPersonalMedico',
  name: 'PuestoPersonalMedico',
  component: PuestoPersonalMedico,   
 },
 {
  path: '/PuestosDepartamentos',
  name: 'PuestosDepartamentos',
  component: PuestosDepartamentos,   
 },


]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
