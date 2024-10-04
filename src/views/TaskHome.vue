<template>
  <div class="container">
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
    <div class="users-container">
      <h1>Users</h1>
      <ul>
        <li v-for="(user, index) in users" :key="index" class="user-item">
          <label>
            <span :class="{ completed: user.completed }">{{ user.name }}</span>
          </label>
        </li>
      </ul>
      <input
        v-model="newUser"
        placeholder="Add a new user..."
        @keyup.enter="addUser"
      />
      <button @click="addUser" class="btn-add-user">Add User</button>
    </div>
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
      users: [
        { name: "Gabriel Angelo Macedo", completed: false },
        { name: "Pedro de Alcantara Silva", completed: false },
        { name: "Ronaldo Oliver Cardoso", completed: false },
      ],
      newUser: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        this.tasks.push({ name: this.newTask, completed: false });
        this.newTask = "";
      }
      if (this.newUser.trim() !== "") {
        this.users.push({ name: this.newUser, completed: false });
        this.newUser = "";
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
.task-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #4caf50;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  position: relative;
}

.users-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #4caf50;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.task-container:hover {
  transform: scale(1.02);
}

.users-container:hover {
  transform: scale(1.02);
}

.task-item {
  list-style: none;
  margin-bottom: 10px;
}

.user-item {
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

.btn-add-user {
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-add-task:hover {
  background-color: #45a049;
}

.btn-add-user:hover {
    background-color: #45a049;
}
</style>
