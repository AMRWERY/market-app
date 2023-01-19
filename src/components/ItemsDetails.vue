<template>
  <ion-card v-for="item in store.items" :key="item.id">
    <ion-card-header>
      <ion-card-title>{{ item.name }}</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      Here's a small text description for the card content. Nothing more, nothing less.
    </ion-card-content>
  </ion-card>
</template>

<script>
  import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/vue';
  import storeData from '../assets/database.json';

  export default {
    components: { IonCard, IonCardContent, IonCardHeader, IonCardTitle },

    data() {
      return {
        stores: storeData.stores
      }
    },

    created() {
    const storeId = this.$route.params.storeId;
    this.store = storeData.stores.find(store=> store.id == storeId)
    console.log(this.store)
  },
  };
</script>

<style scoped>
  /* iOS places the subtitle above the title */
  ion-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }
</style>