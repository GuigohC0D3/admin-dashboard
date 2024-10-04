<template>
  <div class="task-container">
    <h1>Tasks</h1>
    <ul>
      <li v-for="(task, index) in tasks" :key="index" class="task-item">
        <label>
          <input type="checkbox" v-model="task.completed" />
          <span :class="{ completed: task.completed }">{{ task.name }}</span>
        </label>
      </li>
    </ul>
    <input
      v-model="newTask"
      placeholder="Add a new task..."
      @keyup.enter="addTask"
    />
    <button @click="addTask" class="btn-add-task">Add Task</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { name: "Completar o projeto Vue", completed: false },
        { name: "Escrever o report do projeto", completed: false },
        { name: "Mandar a documentação", completed: false },
      ],
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        this.tasks.push({ name: this.newTask, completed: false });
        this.newTask = "";
      }
    },
  },
};
</script>

<style scoped>
.task-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #4caf50;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  position: relative;
  margin-left: 60%;
  
}

.task-container:hover {
  transform: scale(1.02);
}

.task-item {
  list-style: none;
  margin-bottom: 10px;
}

label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
  color: grey;
}

.btn-add-task {
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-add-task:hover {
  background-color: #45a049;
}
</style>
