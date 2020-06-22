<template>
  <div v-if="getModal">
    <div class="modal-wrapper">&nbsp;</div>

    <div class="modal-window">
      <div class="modal-title">Are you sure?</div>
      <div class="modal-body">This action can't be undone.</div>

      <div class="button-wrapper">
        <button class="cancel-button" @click.prevent="$store.dispatch('hideModal')">Cancel</button>
        <button class="ok-button" @click.prevent="$store.dispatch('resolveModal')">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getModal"])
  }
};
</script>