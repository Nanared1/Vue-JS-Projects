<template>
  <div id="app">

    <div class="ui attached stackable menu">
      <div class="ui container">
        <a class="item" id="menu-item">
          <i class="grid layout icon"></i>{{header}}
        </a>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
        header: 'Get $#it DONE!!!'
    }
  }
}
</script>

<style>
#menu-item{
  background-color: lightgrey;
  text-font: bold;
}
#app{
  background-image: url("https://source.unsplash.com/daily");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
