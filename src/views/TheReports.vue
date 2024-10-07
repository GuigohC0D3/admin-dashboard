<template>
  <div>
    <h1>Report members</h1>

    <table class="table">
      <thead>
        <tr>
          <th>Report ID</th>
          <th>Item Name</th>
          <th>Reported By</th>
          <th>Description</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(report, index) in reports" :key="report.id">
          <td>{{ index + 1 }}</td>
          <td>{{ report.itemName }}</td>
          <td>{{ report.reportedBy }}</td>
          <td>{{ report.description }}</td>
          <td>{{ report.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      reports: [],
    };
  },
  methods: {
    async fetchReports() {
      try {
        const response = await axios.get("/api/reports");
        this.reports = response.data;
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    },
  },
  created() {
    this.fetchReports();
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>
