<template>
  <v-container>
    <v-responsive>
      <router-link :to="{ name: 'Payment' }" style="text-decoration: none;">
        <v-btn class="bg-orange text-white" prepend-icon="mdi-arrow-left" style="margin: 15px 0px;">Go Back</v-btn>          
      </router-link>
      <hr>
      
      <v-form v-model="valid" style="border: 1px solid #000000; padding: 20px; margin-top: 20px; border-radius: 5px;">
        <p class="font-weight-black text-h5" style="margin-top: 1%;margin-left:2%;">Choose Payment Method</p>
        <br>
        <v-row>
          <v-col cols="4" class="d-flex justify-center">
            <a href="/gcash">
              <img src="@/assets/gcash.png" alt="GCash" class="button-size" style="border: 3px solid #E66E00;">
            </a>
          </v-col>
          <v-col cols="4" class="d-flex justify-center">
            <a href="/bpi">
              <img src="@/assets/bpi.png" alt="BPI" class="button-size" style="border: 1px solid #000000;">
            </a>
          </v-col>
          <v-col cols="4" class="d-flex justify-center">
            <a href="/bdo">
              <img src="@/assets/bdo.png" alt="BDO" class="button-size" style="border: 1px solid #000000;">
            </a>
          </v-col>
        </v-row>
        <hr style="margin-top: 2%;">

      </v-form>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      text: 'center',
      icon: 'justify',
      toggle_none: null,
      toggle_one: 0,
      toggle_exclusive: 2,
      toggle_multiple: [0, 1, 2],
    }
  },
}
</script>