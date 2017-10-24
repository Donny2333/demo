<template>
  <div>
    <Row>
      <Menu mode="horizontal" width="auto" :activeName="selectedMenu" @on-select="select">
        <Menu-item v-for="menu in menus" :name="menu.name">
          <Icon :type="menu.icon"></Icon>
          {{ menu.text }}
        </Menu-item>
      </Menu>
    </Row>
    <Row>
      <router-view/>
    </Row>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        menus: [{
          name: 'about',
          icon: 'information-circled',
          text: '关于'
        }, {
          name: 'browser',
          icon: 'search',
          text: '浏览'
        }, {
          name: 'comment',
          icon: 'gear-a',
          text: '评论'
        }, {
          name: 'diagram',
          icon: 'stats-bars',
          text: '图表'
        }]
      }
    },
    methods: {
      select (name) {
        this.$router.push({name: name})
      }
    },
    computed: mapState({
      selectedMenu: state => state.selectedMenu
    })

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
