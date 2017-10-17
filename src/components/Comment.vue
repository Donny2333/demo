<template>
  <Card style="margin: 10px;width: 200px">Comment</Card>
</template>

<script>
  export default {
    created () {
      this.$store.dispatch('updateSelectedMenu', 'comment')
    }
  }
</script>
