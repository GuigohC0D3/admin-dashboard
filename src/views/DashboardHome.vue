<template>
  <div class="dashboard-home">
    <h2>Dashboard</h2>
    <div class="dashboard-cards">
      <div class="card">
        <h3>Total de Usuários</h3>
        <p>{{ totalUsers }}</p>
      </div>
      <div class="card">
        <h3>Total de Posts</h3>
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
      <div class="chart">
        <Bar :chart-data="barChartData" :options="chartOptions" />
      </div>
      <div class="chart">
        <Line :chart-data="lineChartData" :options="chartOptions" />
      </div>
    </div>
  </div>
</template>

<script>
import { Bar, Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, LineElement, CategoryScale, LinearScale);

export default {
  components: {
    Bar,
    Line,
  },
  data() {
    return {
      totalUsers: 150,
      totalPosts: 120,
      totalComments: 300,
      recentFeedback: '5 feedbacks recentes',

      // Dados para o gráfico de barras
      barChartData: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [
          {
            label: 'Usuários Novos',
            backgroundColor: '#42A5F5',
            data: [10, 20, 30, 15, 25],
          },
        ],
      },

      // Dados para o gráfico de linhas
      lineChartData: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [
          {
            label: 'Atividades',
            borderColor: '#FFCA28',
            backgroundColor: '#FFCA28',
            data: [5, 15, 25, 20, 30],
            fill: false,
          },
        ],
      },

      // Opções do gráfico
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
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
  padding: 20px;
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
