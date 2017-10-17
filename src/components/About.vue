<template>
  <Card style="margin: 10px;width: 200px">About</Card>
</template>

<script>
  export default {
    created () {
      this.$store.dispatch('updateSelectedMenu', 'about')
    }
  }
</script>
