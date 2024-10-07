<template>
  <div>
    <h1>Vendedores</h1>
    <button @click="gohome" id="btn-icon"><i class="bi bi-arrow-left" ></i></button>
    <button @click="showCreateModal = true" class="btn btn-success">
      Create Member
    </button>

    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
          <th>CPF</th>
          <th>Age</th>
          <th>Phone Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(member, index) in members" :key="member.id">
          <td>{{ index + 1 }}</td>
          <td>{{ member.name }}</td>
          <td>{{ member.email }}</td>
          <td>{{ member.username }}</td>
          <td>{{ member.CPF }}</td>
          <td>{{ member.age }}</td>
          <td>{{ member.phonenumber }}</td>
          <td>
            <button @click="showMember(member)" class="btn btn-primary">
              Info
            </button>
            <button @click="editMember(member)" class="btn btn-info">
              Edit
            </button>
            <button @click="deleteMember(member.id)" class="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal for Create/Edit -->
    <div v-if="showCreateModal" class="modal">
      <div class="modal-content">
        <h3>{{ isEditing ? "Edit Member" : "Create Member" }}</h3>
        <form @submit.prevent="isEditing ? updateMember() : addMember()">
          <div>
            <label>Name:</label>
            <input v-model="newMember.name" required />
          </div>
          <div>
            <label>Email:</label>
            <input v-model="newMember.email" required />
          </div>
          <div>
            <label>Username:</label>
            <input v-model="newMember.username" required />
          </div>
          <div>
            <label>CPF:</label>
            <input v-model="newMember.CPF" required />
          </div>
          <div>
            <label>Age:</label>
            <input v-model="newMember.age" type="number" required />
          </div>
          <div>
            <label>Phone Number:</label>
            <input v-model="newMember.phonenumber" required />
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
    <footer id="footer">
    <h2>Guilherme Admin</h2>
    <p>&copy; 2024 GuiBoard's, Inc.</p>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      members: [], // Array para armazenar membros vindos do backend
      newMember: { id: null, name: "", email: "", username: "", CPF: "", age: null, phonenumber: "" },
      showCreateModal: false,
      isEditing: false,
      currentEditId: null,
    };
  },
  created() {
    // Chama a função para buscar os membros do backend quando o componente é montado
    this.fetchMembers();
  },
  methods: {
    async fetchMembers() {
      try {
        const response = await axios.get('http://localhost:3000/dados');
        this.members = response.data; // Armazena os dados recebidos
      } catch (error) {
        console.error("Erro ao buscar membros:", error);
      }
    },
    showMember(member) {
      alert(
        `Member: ${member.name}, Email: ${member.email}, Username: ${member.username}, CPF: ${member.CPF}, Age: ${member.age}, Phone Number: ${member.phonenumber}`
      );
    },
    addMember() {
      const newId = this.members.length + 1;
      this.newMember.id = newId;
      this.members.push({ ...this.newMember });
      this.resetForm();
    },
    editMember(member) {
      this.newMember = { ...member };
      this.currentEditId = member.id;
      this.isEditing = true;
      this.showCreateModal = true;
    },
    updateMember() {
      const index = this.members.findIndex((m) => m.id === this.currentEditId);
      if (index !== -1) {
        this.members.splice(index, 1, { ...this.newMember });
      }
      this.resetForm();
    },
    deleteMember(id) {
      this.members = this.members.filter((member) => member.id !== id);
    },
    resetForm() {
      this.newMember = { id: null, name: "", email: "", username: "", CPF: "", age: null, phonenumber: "" };
      this.isEditing = false;
      this.showCreateModal = false;
      this.currentEditId = null;
    },
    gohome() {
      this.$router.push('/Home')
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

#footer {
    border-top: 2px solid #ddd;
    padding: 1rem;
    text-align: center;
    background-color: #6d6060b4
}

#footer h2,
#footer p {
    margin-bottom: 1rem;
    color: #fff;
}

#btn-icon {
  color: rgb(0, 0, 0);
  background-color: #fff;
  border: none;
  font-size: 40px;
  margin-right: 85%
}

#btn-icon:hover {
  color: #6d6060b4;
}
</style>
