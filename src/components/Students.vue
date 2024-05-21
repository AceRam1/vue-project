<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="schedules"
      class="elevation-1"
    >
      <template v-slot:item.status="{ item }">
        <v-chip
          v-if="item.status === 'Ongoing'"
          color="green"
          dark
        >
          {{ item.status }}
        </v-chip>
        <span v-else>
          {{ item.status }}
        </span>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: 'SchedulingTable',
  data() {
    return {
      headers: [
        { text: 'Student Name', value: 'name' },
        { text: 'Subject', value: 'subject' },
        { text: 'Date', value: 'date' },
        { text: 'Time', value: 'time' },
        { text: 'Status', value: 'status', sortable: false },
      ],
      schedules: [
        { name: 'Alice', subject: 'Math', date: '2024-03-16', time: '10:00 AM', status: 'Ongoing' },
        { name: 'Bob', subject: 'Science', date: '2024-03-17', time: '11:00 AM', status: 'Scheduled' },
        // Add more schedule items as needed
      ],
    };
  },
};
</script>