<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">
        <el-icon class="hamburger-icon" @click="toggleSidebar"><Menu /></el-icon>
        <h1>Guilherme Admin</h1>
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

    <!-- Sidebar -->
    <div v-if="isSidebarVisible" class="sidebar">
      <button class="close-btn" @click="toggleSidebar">&times;</button>
      <router-link to="/dashboard" class="sidebar-link">Dashboard</router-link>
      <router-link to="/users" class="sidebar-link">Users</router-link>
      <router-link to="/reports" class="sidebar-link">Reports</router-link>
      <router-link to="/settings" class="sidebar-link">Settings</router-link>
    </div>

    <!-- Overlay for closing the sidebar -->
    <div v-if="isSidebarVisible" class="overlay" @click="toggleSidebar"></div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
  data() {
    return {
      isSidebarVisible: false, // Estado para controlar a visibilidade da sidebar
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible; // Alterna a visibilidade da sidebar
    },
    logout() {
      // Lógica para logout
      console.log('Logout');
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #2c3e50;
  color: white;
  padding: 0.5rem;
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

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-brand h1 {
  margin: 0;
  color: aliceblue;
}

.navbar-search {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  margin: 0 1rem;
}

.search-wrapper {
  position: relative;
  width: 320px;
}

.search-input {
  width: 103%;
  padding: 0.5rem 2.5rem 0.5rem 0.75rem;
  border: none;
  border-radius: 5px;
}

.search-icon {
  position: absolute;
  right: 0.1%;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(136, 121, 121, 0.89);
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

/* Sidebar Styles */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: #34495e;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: start;
  z-index: 999;
}

.sidebar-link {
  padding: 10px 15px;
  color: white;
  text-decoration: none;
  display: block;
}

.sidebar-link:hover {
  background-color: #1abc9c;
  transition: 1s;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 36px;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
}

/* Overlay Styles */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
}

.hamburger-icon {
  color: white;
  cursor: pointer;
  margin-right: 0.5rem;
  font-size: 24px;
}
</style>
