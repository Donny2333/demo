<template>
  <div>
    <Row>
      <Menu mode="horizontal" width="auto" :activeName="selectedMenu" @on-select="select">
        <Menu-item name="about">
          <Icon type="ios-paper"></Icon>
          关于
        </Menu-item>
        <Menu-item name="browser">
          <Icon type="ios-people"></Icon>
          浏览
        </Menu-item>
        <Menu-item name="comment">
          <Icon type="settings"></Icon>
          评论
        </Menu-item>
      </Menu>
    </Row>
    <Row>
      <router-view/>
    </Row>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      select (name) {
        this.$router.push({name: name})
      }
    },
    computed: {
      selectedMenu () {
        return this.$store.state.selectedMenu
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
