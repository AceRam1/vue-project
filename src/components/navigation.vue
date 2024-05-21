<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
      color="blue-darken-3"

      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            subtitle="Administrator"
            title="Peter Alforte"
          ></v-list-item>
        </v-list>
        <hr>

        <v-divider></v-divider>

        <v-list density="compact" nav >
          <router-link to="/Dash" style="text-decoration:none;color:white">
            <v-list-item prepend-icon="mdi-home" title="Home" ></v-list-item>
          </router-link>
          <router-link to="/Tutors" style="text-decoration:none;color:white">
            <v-list-item prepend-icon="mdi-human-male-board" title="Tutors"></v-list-item>
          </router-link>
          <router-link to="/Students" style="text-decoration:none;color:white">
            <v-list-item prepend-icon="mdi-account-school" title="Students"></v-list-item>
          </router-link>
          <router-link to="/Payment" style="text-decoration:none;color:white">
            <v-list-item prepend-icon="mdi-cash" title="Payment"></v-list-item>
          </router-link>
        </v-list>

        <template v-slot:append>
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-cog" title="Settings" value="settings"></v-list-item>
            <v-list-item prepend-icon="mdi-exit-to-app" title="Log Out" value="logout"></v-list-item>

          </v-list>
        </template>
      </v-navigation-drawer>

      <v-main style="height: 660px"></v-main>
      <router-view />

    </v-layout>
  </v-card>
</template>