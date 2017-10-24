<template>
  <Card style="margin: 10px;width: 200px">Diagram</Card>
</template>

<script>
  export default {
    created () {
      this.$store.dispatch('updateSelectedMenu', 'diagram')
    }
  }
</script>
