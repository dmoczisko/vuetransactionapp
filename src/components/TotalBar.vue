<template>
  <div class="balance">
    <h2>
      Account Balance
      <strong>{{ formatMoney(getTotal) }}</strong>
    </h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getTotal"])
  }
};
</script>
