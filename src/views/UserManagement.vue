<template>
  <div>
    <h1>Vendedores</h1>
    <button @click="showCreateModal = true" class="btn btn-success">
      Create Student
    </button>

    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in students" :key="student.id">
          <td>{{ index + 1 }}</td>
          <td>{{ student.firstname }}</td>
          <td>{{ student.lastname }}</td>
          <td>{{ student.age }}</td>
          <td>
            <button @click="showStudent(student)" class="btn btn-primary">
              Info
            </button>
            <button @click="editStudent(student)" class="btn btn-info">
              Edit
            </button>
            <button @click="deleteStudent(student.id)" class="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal for Create/Edit -->
    <div v-if="showCreateModal" class="modal">
      <div class="modal-content">
        <h3>{{ isEditing ? "Edit Student" : "Create Student" }}</h3>
        <form @submit.prevent="isEditing ? updateStudent() : addStudent()">
          <div>
            <label>Firstname:</label>
            <input v-model="newStudent.firstname" required />
          </div>
          <div>
            <label>Lastname:</label>
            <input v-model="newStudent.lastname" required />
          </div>
          <div>
            <label>Age:</label>
            <input v-model="newStudent.age" type="number" required />
          </div>
          <button type="submit" class="btn btn-success">
            {{ isEditing ? "Update" : "Create" }}
          </button>
          <button @click="showCreateModal = false" class="btn btn-secondary">
            Cancel
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [
        { id: 1, firstname: "Harry", lastname: "Porter", age: 46 },
        { id: 2, firstname: "Jonn", lastname: "Deep", age: 25 },
        { id: 3, firstname: "Pall", lastname: "Walker", age: 45 },
        { id: 4, firstname: "Emaly", lastname: "Kill", age: 22 },
        { id: 5, firstname: "Die", lastname: "Joi", age: 22 },
        { id: 6, firstname: "Guilherme", lastname: "Pereira", age: 23 },
      ],
      newStudent: { id: null, firstname: "", lastname: "", age: null },
      showCreateModal: false,
      isEditing: false,
      currentEditId: null,
    };
  },
  methods: {
    showStudent(student) {
      alert(
        `Student: ${student.firstname} ${student.lastname}, Age: ${student.age}`
      );
    },
    addStudent() {
      const newId = this.students.length + 1;
      this.newStudent.id = newId;
      this.students.push({ ...this.newStudent });
      this.resetForm();
    },
    editStudent(student) {
      this.newStudent = { ...student };
      this.currentEditId = student.id;
      this.isEditing = true;
      this.showCreateModal = true;
    },
    updateStudent() {
      const index = this.students.findIndex((s) => s.id === this.currentEditId);
      if (index !== -1) {
        this.students.splice(index, 1, { ...this.newStudent });
      }
      this.resetForm();
    },
    deleteStudent(id) {
      this.students = this.students.filter((student) => student.id !== id);
    },
    resetForm() {
      this.newStudent = { id: null, firstname: "", lastname: "", age: null };
      this.isEditing = false;
      this.showCreateModal = false;
      this.currentEditId = null;
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
}

.btn {
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
}

.btn-success {
  background-color: green;
  color: white;
}

.btn-primary {
  background-color: blue;
  color: white;
}

.btn-info {
  background-color: skyblue;
  color: white;
}

.btn-danger {
  background-color: red;
  color: white;
}

.btn-secondary {
  background-color: grey;
  color: white;
}
</style>
