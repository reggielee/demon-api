<template>
  <div id="login" class="container">
    <h1>Hello World!</h1>
    <div class="row">
      <div class="col-sm-6" style="background-color:yellow;">
        <p>Lorem ipsum...</p>
      </div>
      <div class="col-sm-6" style="background-color:pink;">
        <p>Sed ut perspiciatis...</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'login',
    computed: mapGetters({
      count: 'count'
    }),
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
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
