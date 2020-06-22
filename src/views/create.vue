<template>
  <div class="flex flex-col items-center" @keyup.enter="addTransaction">
    <h1>Add Transaction</h1>

    <div class="toggle-switch">
      <input
        type="radio"
        id="debit"
        name="transaction_type"
        v-model="form.type"
        value="debit"
        checked
      />
      <label for="debit">Debit</label>

      <input type="radio" id="credit" name="transaction_type" v-model="form.type" value="credit" />
      <label for="credit">Credit</label>
    </div>

    <template v-if="errors">
      <ul>
        <li v-for="error in errors" :key="error">- {{ error }}</li>
      </ul>
    </template>

    <div class="input-field">
      <label for="description">Description</label>
      <input
        type="text"
        id="description"
        name="transaction_description"
        placeholder="Enter your description"
        v-model="form.description"
      />
    </div>

    <div class="input-field">
      <label for="amount">Amount</label>
      <div>
        <span class="currency">$</span>
        <input type="text" id="amount" name="transaction_amount" v-model="form.amount" />
      </div>
    </div>

    <div class="mb-12">
      <button @click.prevent="addTransaction">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      form: {
        type: "debit",
        description: "",
        amount: ""
      },

      errors: []
    };
  },

  methods: {
    addTransaction: function() {
      if (!this.validForm()) {
        return;
      }

      this.form.amount *= 100;

      this.$store.dispatch("addTransaction", this.form);

      this.$router.push({ path: "/" });
    },

    validForm: function() {
      this.errors = [];

      if (!this.form.description) {
        this.errors.push("Description is required");
      }

      if (!this.form.amount) {
        this.errors.push("Amount is required");
      }

      return this.errors.length ? false : true;
    }
  }
};
</script>