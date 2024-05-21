<template>
  <v-container>
        <v-card class="mx-auto" max-width="1500">
          <v-card-title class="headline">Tutors</v-card-title>
          <v-data-table :headers="headers" :items="tutors" class="elevation-1">
            <template v-slot:item="{ item }">
              <tr>
                <td>
                  <v-avatar>
                    <img :src="item.avatar" alt="Avatar">
                  </v-avatar>
                </td>
                <td>{{ item.name }}</td>
                <td :class="{ 'green--text': item.status === 'Active', 'red--text': item.status === 'Offline' }">
                  <v-icon small>{{ item.status === 'Active' ? 'mdi-checkbox-marked-circle' : 'mdi-close-circle' }}</v-icon>
                  {{ item.status }}
                </td>
                <td>{{ item.time }}</td>
                <td>
                  <v-icon small>mdi-email</v-icon>
                  <v-icon small>mdi-file-document</v-icon>
                </td>
              </tr>
            </template>
          </v-data-table>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-pagination v-model="page" :length="pages"></v-pagination>
          </v-card-actions>
        </v-card>
      </v-container>

</template>

<script>
import t1 from '@/assets/t1.png';
import t2 from '@/assets/t2.png';

export default {
  data: () => ({
    userName: 'Peter Alforte',
    userRole: 'Admin',
    userImage: '/images/user_image.jpg',
    page: 1,
    headers: [
      { text: '', value: 'avatar', sortable: false },
      { text: 'Name', value: 'name' },
      { text: 'Status', value: 'status' },
      { text: 'Time', value: 'time' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    tutors: [
      {
        avatar: t1,
        name: 'Abubakkar Jamalul Hamar',
        status: 'Active',
        time: '10:00 am - 12:00 nn'
      },
      {
        avatar: t2,
        name: 'Jason Santos',
        status: 'Active',
        time: '1:00 pm - 3:00 pm'
      },
      // Add more tutors here
    ],
    pages: 3
  })
}
</script>

<style scoped>
.v-application {
  background-color: #fff;
}

.v-navigation-drawer {
  width: 240px;
}

.v-card-title {
  background-color: #ff9800; /* Change to orange */
  color: white;
}

.v-avatar img {
  width: 100%;
}

.v-data-table-header th {
  background-color: #ff9800; /* Change to orange */
  color: white;
}
</style>