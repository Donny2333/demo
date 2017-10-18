<template>
  <div>
    <Input v-model="searchText" placeholder="请输入..." style="width: 300px;margin: 10px"></Input>
    <Button type="primary" @click="search">搜索</Button>
    <Table :columns="table.columns" :data="table.data" style="margin: 5px 10px"></Table>
  </div>
</template>

<script>
  //  import _ from 'lodash'
  import table from './mockData'

  export default {
    data () {
      return {
        searchText: '',
        table: table
      }
    },
    methods: {
      search () {
        console.log(this.searchText)
      }
    },
    created () {
      this.$store.dispatch('updateSelectedMenu', 'browser')
    }
  }
</script>
