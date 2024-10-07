<template>
  <div class="report-page">
    <h2>Report a Member</h2>
    
    <form @submit.prevent="submitReport">
      <div class="form-group">
        <label for="reporter">Your ID:</label>
        <input type="number" v-model="reporter_id" required />
      </div>
      
      <div class="form-group">
        <label for="reported_member">Reported Member:</label>
        <select v-model="reported_member_id" required>
          <option v-for="member in members" :key="member.id" :value="member.id">
            {{ member.name }} ({{ member.email }})
          </option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="reason">Reason for Report:</label>
        <textarea v-model="report_reason" rows="4" required></textarea>
      </div>
      
      <button type="submit">Submit Report</button>
    </form>

    <div v-if="message" class="message">
      {{ message }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      reporter_id: null, // ID of the reporting user
      reported_member_id: null, // ID of the member being reported
      report_reason: '', // Reason for the report
      members: [], // List of members to select from
      message: '', // Feedback message for the user
    };
  },
  created() {
    this.fetchMembers(); // Fetch the members when the page loads
  },
  methods: {
    async fetchMembers() {
      try {
        const response = await axios.get('http://localhost:3000/dados');
        this.members = response.data;
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    },
    async submitReport() {
      try {
        const report = {
          reporter_id: this.reporter_id,
          reported_member_id: this.reported_member_id,
          report_reason: this.report_reason
        };
        await axios.post('http://localhost:3000/reports/create', report);
        this.message = 'Report successfully submitted!';
        this.resetForm();
      } catch (error) {
        console.error('Error submitting report:', error);
        this.message = 'Error submitting report.';
      }
    },
    resetForm() {
      this.reporter_id = null;
      this.reported_member_id = null;
      this.report_reason = '';
    }
  }
};
</script>

<style scoped>
.report-page {
  width: 100%;
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  background-color: #f4f4f4;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}

.message {
  margin-top: 20px;
  font-weight: bold;
}
</style>
