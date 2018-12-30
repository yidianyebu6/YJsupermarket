<template>
<div class="backg">
  <div id="app">
    <router-view></router-view>
   
  </div>
</div>
  
</template>

<script>


export default {
  name:'app',
  data(){
      return{
          
      }
      

  },
  methods:{

  },
  computes:{

  }
}
</script>

<style>
html, body, #app,#index, .backg {
  width: 100%;
  min-height: 100%;
  margin: 0
}


</style>
