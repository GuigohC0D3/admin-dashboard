<template>
  <div class="dashboard-home">
    <h2>Dashboard</h2>
    <div class="dashboard-cards">
      <div class="card">
        <h3>Total de Usuários</h3>
        <p>{{ totalUsers }}</p>
      </div>
      <div class="card">
        <h3>Total de Itens</h3>
        <p>{{ totalPosts }}</p>
      </div>
      <div class="card">
        <h3>Total de Comentários</h3>
        <p>{{ totalComments }}</p>
      </div>
      <div class="card">
        <h3>Feedbacks Recentes</h3>
        <p>{{ recentFeedback }}</p>
      </div>
    </div>

    <div class="dashboard-charts">
      <h2>Visão Geral</h2>
      <TheProgress />
      <DashboardChart /> 
      <TaskHome/>
      <LineChart/>
    </div>
    
  </div>
</template>

<script>
import DashboardChart from './DashboardChart.vue';
import LineChart from './LineChart.vue';
import TaskHome from './TaskHome.vue';
import TheProgress from './TheProgress.vue';
export default {
  name: 'DashboardHome',
  components: {
    DashboardChart,
    TheProgress,
    LineChart,
    TaskHome
  },
  data() {
    return {
      totalUsers: 150,
      totalPosts: 120,
      totalComments: 300,
      recentFeedback: '200 feedbacks recentes',
    };
  },
};
</script>

<style scoped>
.dashboard-home {
  padding: 20px;
}

.dashboard-cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.card {
  background-color: #3498db;
  color: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  flex: 1;
  margin: 10px;
  text-align: center;
}

.dashboard-charts {
  background-color: #ecf0f1;
  padding: 20px;
  border-radius: 10px;
}

.chart {
  height: 400px; /* Aumente a altura se necessário */
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
</style>
