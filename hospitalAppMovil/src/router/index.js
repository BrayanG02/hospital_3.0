import { createRouter, createWebHistory } from '@ionic/vue-router';
//IMPORTACIONES DE LAS VISTAS
import DashBoard from '../components/DashBoard.vue'
import LoginView from '../components/loginInicio.vue'
import RegistroUser from '../components/registroUser.vue'
import DashboardPersonalMedico from '../components/recursos_humanos/DashboardPersonalMedico.vue';

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
  path: '/DashBoard',
  name: 'DashBoard',
  component: DashBoard,
  },
  {
    path: '/dashboardPersonalMedico',
    name: 'DashboardPersonalMedico',
    component: DashboardPersonalMedico,
    meta: { requiresAuth: true } // Esta ruta requiere que el usuario esté logueado.
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
