<template>
  
</template>

<script>
import EventBus from '../event-bus';

export default {
  name: 'error',
  mounted() {
    EventBus.$on('ERROR', (errorMsg) => {
      this.$toast.open({
        message: errorMsg,
        type: 'is-danger',
      });
    });
  },
};
</script>

<style>

</style>
