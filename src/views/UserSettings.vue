<template>
  <div class="settings-container">
    <h2>User Settings</h2>
    <form @submit.prevent="updateSettings">
      <div>
        <label>Name:</label>
        <input v-model="settings.name" type="text" required />
      </div>
      <div>
        <label>Email:</label>
        <input v-model="settings.email" type="email" required />
      </div>
      <div>
        <label>Username:</label>
        <input v-model="settings.username" type="text" required />
      </div>
      <div>
        <label>CPF:</label>
        <input v-model="settings.CPF" type="text" required />
      </div>
      <div>
        <label>Phone Number:</label>
        <input v-model="settings.phonenumber" type="text" required />
      </div>
      <div>
        <label>Age:</label>
        <input v-model="settings.age" type="number" required />
      </div>
      <button type="submit" class="btn btn-primary">Save Settings</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      settings: {
        name: "",
        email: "",
        username: "",
        CPF: "",
        phonenumber: "",
        age: null,
      },
    };
  },
  methods: {
    async updateSettings() {
      try {
        await axios.put("http://localhost:3000/update-settings", this.settings);
        alert("Settings updated successfully!");
      } catch (error) {
        console.error("Error updating settings:", error);
      }
    },
    async fetchSettings() {
      try {
        const response = await axios.get("http://localhost:3000/settings");
        this.settings = response.data;
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    },
  },
  created() {
    this.fetchSettings(); // Pega as configurações quando o componente é criado
  },
};
</script>

<style scoped>
.settings-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  background-color: #f9fbfc;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.profile-avatar {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 15px;
}

.profile-info h2 {
  margin: 0;
  font-size: 18px;
}

.profile-info a {
  font-size: 14px;
  color: #007bff;
  text-decoration: none;
}

.upload-btn {
  background-color: #f4f6f8;
  border: 1px solid #d1d5da;
  color: #007bff;
  border-radius: 5px;
  padding: 5px 10px;
  margin-left: auto;
}

h3 {
  margin-top: 0;
  margin-bottom: 20px;
}

.form-row {
  display: flex;
  justify-content: space-between;
}

.form-group {
  flex: 1;
  margin-right: 10px;
  margin-bottom: 20px;
}

.form-group:last-child {
  margin-right: 0;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 14px;
}

input[type="text"],
input[type="email"],
input[type="number"],
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #d1d5da;
  border-radius: 5px;
  font-size: 14px;
  background-color: #fff;
}

input[type="checkbox"] {
  margin-right: 10px;
}

.form-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.cancel-btn,
.save-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
}

.cancel-btn {
  background-color: #f4f6f8;
  color: #6c757d;
}

.save-btn {
  background-color: #6f42c1;
  color: #fff;
  margin-bottom: 50%;
}

.save-btn:hover {
  background-color: #563d7c;
}

.cancel-btn:hover {
  background-color: #e2e6ea;
}
</style>
 
