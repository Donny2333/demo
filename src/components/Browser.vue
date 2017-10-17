<template>
  <Card style="margin: 10px;width: 200px">Browse</Card>
</template>

<script>
  export default {
    created () {
      this.$store.dispatch('updateSelectedMenu', 'browser')
    }
  }
</script>
