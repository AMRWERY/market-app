<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>⚽Sporting Store⚽</ion-title>
    </ion-toolbar>
  </ion-header>

  <h1>Check out our Stores</h1>

  <ion-list v-for="store in stores" :key="store">
    <ion-item>
      <ion-label>{{ store.id }}</ion-label>
      <ion-button
        @click="
          $router.push({ name: 'ItemsDetails', params: { itemId: store.id } })
        "
      >
        <i class="fa-regular fa-eye"></i>
      </ion-button>
    </ion-item>
  </ion-list>

  <ion-content>
    <ion-footer>
      <ion-toolbar>
        <ion-button @click="presentAlert">Request Now</ion-button>
        <ion-button @click="presentAlarm">Contact Us</ion-button>
      </ion-toolbar>
    </ion-footer>
  </ion-content>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonButton,
  alertController,
} from "@ionic/vue";
import storeData from "../assets/database.json";

export default {
  components: {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonFooter,
    IonButton,
  },

  data() {
    return {
      stores: storeData.stores,
    };
  },

  setup() {
    const presentAlert = async () => {
      const alert = await alertController.create({
        header: "Please submit your request",
        buttons: ["OK"],
        inputs: [
          {
            placeholder: "Name",
          },
          {
            type: "email",
            placeholder: "E-mail",
          },
          {
            type: "text",
            placeholder: "What's your request?",
          },
        ],
      });

      await alert.present();
    };

    const presentAlarm = async () => {
      const alert = await alertController.create({
        header: "Please submit this form",
        buttons: ["OK"],
        inputs: [
          {
            placeholder: "Name",
          },
          {
            type: "email",
            placeholder: "E-mail",
          },
          {
            type: "textarea",
            placeholder: "What's your message?",
          },
        ],
      });

      await alert.present();
    };

    return { presentAlert, presentAlarm };
  },
};
</script>

<style scoped>
ion-header,
h1 {
  text-align: center;
}
</style>
