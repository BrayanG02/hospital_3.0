<template>
  <ion-app>
    <!-- Menu -->
    <ion-menu content-id="main" ref="menu">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item v-for="item in items" :key="item.title" :router-link="item.url">
            <ion-icon :name="item.icon" slot="start"></ion-icon>
            <ion-label>{{ item.title }}</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <!-- Main Content -->
    <ion-page id="main">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button @click="toggleMenu"></ion-menu-button>
          </ion-buttons>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <p>Tap the button in the toolbar to open the menu.</p>
      </ion-content>
    </ion-page>
  </ion-app>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import {
  IonApp,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

export default defineComponent({
  components: {
    IonApp,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  setup() {
    // Usamos ref para referenciar el menú
    const menuRef = ref(null);

    // Método para abrir el menú
    const toggleMenu = () => {
      if (menuRef.value) {
        menuRef.value.open(); // Abre el menú
      }
    };

    return {
      menuRef,
      toggleMenu,
    };
  },
  data() {
    return {
      items: [
        { title: "Inbox", url: "/folder/Inbox", icon: "mail" },
        { title: "Outbox", url: "/folder/Outbox", icon: "paper-plane" },
        { title: "Favorites", url: "/folder/Favorites", icon: "heart" },
        { title: "Archived", url: "/folder/Archived", icon: "archive" },
        { title: "Trash", url: "/folder/Trash", icon: "trash" },
      ],
    };
  },
});
</script>

<style scoped>
ion-menu {
  --background: #fff;
}

ion-item {
  --ion-item-background: transparent;
}
</style>
