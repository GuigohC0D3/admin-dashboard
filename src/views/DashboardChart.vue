<template>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import {
  Chart,
  BarController,  // Adicione esta linha
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Registre os elementos e controladores necessários
Chart.register(
  BarController,  // Registre o controlador de gráfico de barras
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default {
  name: 'DashboardChart',
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = document.getElementById('myChart').getContext('2d');

      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
          datasets: [{
            label: 'Vendas',
            data: [12, 19, 3, 5, 2],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
};
</script>

<style scoped>
canvas {
  max-width: 600px;
  max-height: 400px;
}
</style>
