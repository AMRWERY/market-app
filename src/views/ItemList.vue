<template>
  <ion-content class="ion-padding">
  <ion-header>
    <ion-toolbar>
      <ion-title>Sporting Store</ion-title>
    </ion-toolbar>
  </ion-header>

  <h1>Check out our Stores</h1>

  <ion-list v-for="store in stores" :key="store">
    <ion-item>
      <ion-label
        @click="
          $router.push({ name: 'ItemsDetails', params: { storeId: store.id } })
        "
        >{{ store.id }}</ion-label
      >
    </ion-item>
  </ion-list>

  
    <ion-footer class="ion-margin-vertical">
      <ion-toolbar>
        <ion-button class="ion-margin" @click="presentAlert">Request Now</ion-button>
        <ion-button class="ion-margin" @click="presentAlarm">Contact Us</ion-button>
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
ion-title{
  color: var(--ion-color-success);
}

ion-header,
h1 {
  text-align: center;
  color: var(--ion-color-warning);
}

ion-label {
  text-align: center;
}

ion-button {
  display: block; 
}
</style>