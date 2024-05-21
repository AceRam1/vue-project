<template>
    <v-container>
      <v-responsive>
        
<hr>
<p class="font-weight-black text-h5" style="margin-top: 1%;">
Payment
</p>
<v-form v-model="valid" style="border: 1px solid #000000; padding: 20px; margin-top: 20px; border-radius: 5px;">
  <v-container >
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="firstname"
          :counter="10"
          :rules="nameRules"
          label="First name"
          hide-details
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          v-model="lastname"
          :counter="10"
          :rules="nameRules"
          label="Last name"
          hide-details
          required
        ></v-text-field>
      </v-col>
    </v-row>
    <br>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          hide-details
          required
        ></v-text-field>

        <router-link :to="{ name: 'Paymentv2' }" style="text-decoration: none;">
          <v-btn class="mt-5 bg-orange text-white pa-6" type="submit" block>Go to Payment</v-btn>
        </router-link>
  </v-container>

</v-form>

        </v-responsive>
        </v-container>
  </template>
  
  <script setup>
    //
  </script>
  