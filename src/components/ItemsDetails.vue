<template>
  <ion-content>
    <ion-button router-link="/items-list" class="ion-margin-horizontal">
      <i class="fa-solid fa-arrow-left"></i>
    </ion-button>
    <ion-grid>
      <ion-row class="ion-margin-vertical">
        <ion-col size="9">
          <ion-card v-for="item in store.items" :key="item.id">
            <ion-card-header>
              <ion-card-title>{{ item.name }}</ion-card-title>
              <ion-card-subtitle>Rate: {{ item.rate }}</ion-card-subtitle>
              <h3>${{ item.price }}</h3>
              <ion-img :src="item.pic"></ion-img>
            </ion-card-header>

            <ion-card-content>
              {{ item.Overview }}
            </ion-card-content>
            <ion-fab-button>
              <ion-icon :icon="add" @click="addToCart(item)"></ion-icon>
            </ion-fab-button>
            <ion-fab-button>
              <ion-icon :icon="remove" @click="removeFromCart(item)"></ion-icon>
            </ion-fab-button>
          </ion-card>
        </ion-col>
        <ion-col size="3" class="col">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Your Cart</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <h2>Total Items: {{ totalItemsInCart }}</h2>
              <h3>Total Price: ${{ totalAmount }}</h3>
              <ion-item>
                <ion-checkbox slot="start"></ion-checkbox>
                <ion-label>Credit Card</ion-label>
              </ion-item>
              <p>Pay with your credit card via Authorize.Net</p>
              <ion-item counter="true">
                <ion-label position="floating">Card number</ion-label>
                <ion-input placeholder="Card number" maxlength="14"></ion-input>
              </ion-item>
              <ion-item counter="true">
                <ion-label position="floating">Expiry (MM/YY)</ion-label>
                <ion-input placeholder="MM/YY"></ion-input>
              </ion-item>
              <ion-item counter="true">
                <ion-label position="floating">Card code</ion-label>
                <ion-input placeholder="Card code"></ion-input>
              </ion-item>
              <ion-button @click="presentAlert">Place Order</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
import {
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonImg,
  IonButton,
  alertController,
  IonCheckbox,
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/vue";
import { add, remove } from "ionicons/icons";
import storeData from "../assets/database.json";

export default {
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonImg,
    IonButton,
    IonCheckbox,
    IonItem,
    IonLabel,
    IonInput,
  },

  data() {
    return {
      stores: storeData.stores,
      cart: JSON.parse(localStorage.getItem("cartData")) || [],
      qty: 0,
      total: 0,
      totalItems: 0,
    };
  },

  created() {
    const storeId = this.$route.params.storeId;
    this.store = storeData.stores.find((store) => store.id == storeId);
  },

  methods: {
    customFormatter(inputLength, maxLength) {
      return `${maxLength - inputLength} characters remaining`;
    },
    addToCart(item) {
      let indx = this.cart.indexOf(item);
      if (indx > 0) {
        this.cart[indx]["qty"]++;
        console.log(this.cart);
        this.cart[indx]["itemTotal"] = item.qty * item.price;
        console.log(item);
        this.cart[indx]["qty"] * this.cart[indx]["price"];
      } else {
        item["itemTotal"] = item.qty * item.price;
        this.cart.push(item);
      }

      localStorage.setItem("cartData", JSON.stringify(this.cart));
    },
    removeFromCart(item) {
      this.cart.splice(item, 1);
      this.cart.reduce(item);
      localStorage.removeItem("cartData", JSON.stringify(this.cart));
    },
  },

  computed: {
    totalAmount() {
      return this.cart.reduce(function (sum, item) {
        return sum + item.itemTotal;
      }, 0);
    },
    totalItemsInCart() {
      return this.cart.reduce(function (sum, item) {
        return sum + item.qty;
      }, 0);
    },
  },

  setup() {
    const presentAlert = async () => {
      const alert = await alertController.create({
        header: "Successful Purchase",
        buttons: ["OK"],
      });

      await alert.present();
    };

    return { presentAlert, add, remove };
  },
};
</script>

<style scoped>
ion-card-header.ios {
  display: flex;
  flex-flow: column-reverse;
}

.btn {
  display: block;
  margin: 10px auto;
  width: 15%;
}

.col {
  text-align: center;
}

ion-fab-button {
  display: inline-block;
  margin: 0 auto;
  margin-right: 10px;
  margin-left: 10px;
}

ion-grid {
  text-align: center;
}
</style>