<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">
        <h1>Admin Dashboard</h1>
      </div>
      <div class="navbar-search">
        <div class="search-wrapper">
          <input
            type="text"
            placeholder="CLIQUE NA LUPA PARA PESQUISAR...."
            class="search-input"
          />
          <el-icon class="search-icon">
            <Search />
          </el-icon>
        </div>
      </div>
      <div class="navbar-links">
        <router-link to="/dashboard" class="navbar-link">Dashboard</router-link>
        <router-link to="/users" class="navbar-link">Users</router-link>
        <router-link to="/reports" class="navbar-link">Reports</router-link>
        <router-link to="/settings" class="navbar-link">Settings</router-link>
        <button @click="logout" class="navbar-button">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
  methods: {
    logout() {
      // Lógica para logout
      console.log('Logout');
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
  position: relative;
  cursor: pointer;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.navbar-brand h1 {
  margin: 0;
}

.navbar-search {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  margin: 0 1rem;
}

.search-wrapper {
  position: relative;
  width: 300px;
}

.search-input {
  width: 85%;
  padding: 0.5rem 2.5rem 0.5rem 0.75rem; /* Espaço para o ícone */
  border: none;
  border-radius: 5px;
}

.search-icon {
  position: absolute;
  right: 0.1%;
  top: 50%;
  transform: translateY(-50%);
  color: rgb(0, 0, 0);
  font-size: 20px;
}

.navbar-links {
  display: flex;
  align-items: center;
}

.navbar-link {
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  transition: color 0.3s;
}

.navbar-link:hover {
  color: #3498db;
  cursor: pointer;
}

.navbar-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.navbar-button:hover {
  background-color: #c0392b;
}
</style>
