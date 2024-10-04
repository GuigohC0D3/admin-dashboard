<template>
  <div class="demo-progress">
    <el-progress type="dashboard" :percentage="percentage2" :color="colors" />
    <el-progress type="dashboard" :percentage="percentage2" :color="colors" />
    <el-progress type="dashboard" :percentage="percentage2" :color="colors" />
    <el-progress type="dashboard" :percentage="percentage2" :color="colors" />
  </div>
  <div id="column-vendas">
  <p id="vendas">vendas</p> 
  <p id="vendas">Vendas</p>
  <p id="vendas">Vendas</p>
  <p id="vendas">Vendas</p>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { Minus, Plus } from "@element-plus/icons-vue";

export default {
    name: 'TheProgress',
  setup() {
    const percentage = ref(10);
    const percentage2 = ref(0);

    const colors = [
      { color: "#f56c6c", percentage: 20 },
      { color: "#e6a23c", percentage: 40 },
      { color: "#5cb87a", percentage: 60 },
      { color: "#1989fa", percentage: 80 },
      { color: "#6f7ad3", percentage: 100 },
    ];

    const increase = () => {
      percentage.value += 10;
      if (percentage.value > 100) {
        percentage.value = 100;
      }
    };

    const decrease = () => {
      percentage.value -= 10;
      if (percentage.value < 0) {
        percentage.value = 0;
      }
    };

    onMounted(() => {
      setInterval(() => {
        percentage2.value = (percentage2.value % 100) + 10;
      }, 500);
    });

    return {
      percentage,
      percentage2,
      colors,
      increase,
      decrease,
      Minus,
      Plus,
    };
  },
};
</script>

<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
.demo-progress .el-progress--circle {
  margin-right: 15px;
}

#column-vendas {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: red;
}
</style>
