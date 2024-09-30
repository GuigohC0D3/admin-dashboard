<template>
  <div class="the-sidebar">
    <ul class="sidebar-menu">
      <li class="sidebar-item">
        <router-link to="/dashboard" class="sidebar-link">
          <el-icon><Grid /></el-icon>
          <span>Chama<br/>dos TI</span> 
        </router-link>
      </li>
      <li class="sidebar-item">
        <router-link to="/users" class="sidebar-link">
          <el-icon><User /></el-icon>
          <span>Perfil</span>
        </router-link>
      </li>
      <li class="sidebar-item">
        <router-link to="/reports" class="sidebar-link">
          <el-icon><Document /></el-icon>
          <span>Rules</span>
        </router-link>
      </li>
      <li class="sidebar-item">
        <router-link to="/settings" class="sidebar-link">
          <el-icon><Setting /></el-icon>
          <span>Support</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TheSidebar'
};
</script>

<style scoped>
.the-sidebar {
  width: 110px;
  height: 150vh;
  background-color: #2c3e50;
  padding-top: 20px;
  position: fixed;
  left: 1;
  top: 10;
  color: white;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-item {
  margin-bottom: 1.5rem;
}

.sidebar-link {
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
}

.sidebar-link:hover {
  background-color: #34495e;
  cursor: pointer;
}

.sidebar-link span {
  margin-left: 10px;
}

.el-icon {
  font-size: 20px;
  color: aqua;
}
</style>
