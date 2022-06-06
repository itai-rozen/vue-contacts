<template>
  <div class="modal-container">
    <form class="modal" @submit.prevent="addContact">
      <button @click.stop.prevent="closeModal">X</button>
      <div class="form-details">
        <div>

        <label for="fullname">Full Name</label>
        <input
          type="text"
          v-model="body.fullname"
          id="fullname"
          name="fullname"
          required
        />

        </div>
        <div>

        <label for="username">User Name</label>
        <input
          type="text"
          v-model="body.username"
          id="username"
          name="username"
          required
        />
        </div>
        <div>

        <label for="nickname"> Nickname</label>
        <input
          type="text"
          v-model="body.nickname"
          id="nickname"
          name="nickname"
          required
        />
        </div>
        <div>

        <label for="image_url">Image link</label>
        <input
          type="text"
          v-model="body.image_url"
          id="image_url"
          name="image_url"
        />
        </div>
        <div>

        <label for="is_female" class="checkbox-label"
          ><p>gender</p>
          <p>{{ getGender }}</p>
          <input
            type="checkbox"
            v-model="body.is_female"
            id="is_female"
            name="is_female"
            @check="() => this.is_female = !this.is_female"
          />
        </label>
        </div>
        <div>

        <label for="email">Email</label>
        <input
          type="email"
          v-model="body.email"
          id="email"
          name="email"
          required
        />
        </div>
        <div>

        <label for="num">Phone</label>
        <input
          type="phone"
          v-model="body.phone"
          id="phone"
          name="phone"
          required
        />
        </div>
        <div>

        <label for="address">Address</label>
        <input
          type="text"
          v-model="body.address"
          id="address"
          name="address"
          required
        />
        </div>
        <div>

        <label for="additional">anything else?</label>
        <textarea
          name="additional"
          v-model="body.additional"
          id="additional"
          cols="30"
          rows="10"
        ></textarea>
        </div>
      </div>

      <input type="submit" value="submit" />
    <div v-if="error !== ''">
      <p class="error">{{error}}</p>
    </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      body: {
        fullname: "test",
        username: "test",
        nickname: "test",
        is_female: true,
        email: "t@t.t",
        phone: 5546545345,
        address: "Tel Aviv",
        additional: "whooop",
        image_url: "",
      },
      error: ""
    };
  },
  computed: {
    getGender() {
      return this.body.is_female ? "👱‍♀️ Female" : "🧔 Male";
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    async addContact() {
      try {
      await axios.post("http://localhost:3001", this.body);
      this.$emit("addContact");
      this.$emit("closeModal");
      } catch(err){
         this.error = err.response?.data?.sqlMessage
        
      }
    },
  },
};
</script>

<style>
form.modal {
  display: flex;
  flex-direction: column;
}

form.modal > button {
  position: absolute;
  top: 0;
  right: 0;
}

.form-details {
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 80%;
  font-size: 1.2rem;
  align-items: flex-start;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: 10px;
}
.form-details > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;
  margin: 2px 0;
}

.form-details > input {
  margin: 3px 0;
  border-radius: 5px;
  padding: 2px 3px;
  font-size: 1.2rem;
}

.checkbox-label {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
}


input[type="checkbox"] {
  transform: scale(1.5);
}
</style>