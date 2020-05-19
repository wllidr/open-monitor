<template>
  <div class="hello">
    <h1 id="xx">TEST2</h1>
    <Button type="primary" @click="test">Primary</Button>
  </div>
</template>

<script>
// import {getArticles} from '@/assets/js/articles'
import request from '@/assets/js/request'
export default {
  name: 'TEST',
  mounted() {
  },
  methods: {
    async test () {
      let params = {
        search: '.',
        page: 1,
        size: 1000
      }
      const data = await request({
        url: 'dashboard/search',
        method: 'get',
        params,
        isNeedloading: true
      })
      console.log(data)
      console.log(6)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
