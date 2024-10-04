<template>
  <div>
    <canvas id="lineChart"></canvas>
  </div>
</template>

<script>
import { Chart } from "chart.js/auto"; // Importação correta do Chart.js

export default {
  name: "LineChart",
  mounted() {
    this.renderLineChart();
  },
  methods: {
    renderLineChart() {
      const ctx = document.getElementById("lineChart").getContext("2d");
      new Chart(ctx, {
        type: "line", // Especifica o tipo do gráfico aqui
        data: {
          labels: [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
          ],
          datasets: [
            {
              label: "Vendas no Ano",
              data: [40, 59, 80, 60, 70, 64, 102, 70, 50, 40, 60, 100],
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderWidth: 2,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
  },
};
</script>

<style scoped>
canvas {
  max-width: 100%;
  height: 200px;
  display: flex;
  justify-content: flex-end;
}
</style>
