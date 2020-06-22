export default {
  state: {
    transactions: [
      { type: "debit", description: "Vue Class", amount: 4500 },
      { type: "credit", description: "Payroll", amount: 100000 },
    ],
  },

  getters: {
    getTransactions: function(state) {
      return state.transactions;
    },
  },

  mutations: {
    addTransaction: function(state, transaction) {
      state.transactions.unshift(JSON.parse(JSON.stringify(transaction)));
    },
    removeTransaction: function(state, index) {
      state.transactions.splice(index, 1);
    },
  },

  actions: {
    addTransaction: function(context, transaction) {
      context.commit("addTransaction", transaction);
    },
    removeTransaction: function(context, index) {
      context.commit("removeTransaction", index);
    },
  },
};
