<template lang="html">

  <div class="blogs">

    <h2>{{ blogTitle }}</h2>
    <button type="button" name="button" @click='changeTitle'>Change Title</button>

    <input type="text" v-model="searchTerm" name="" value="">
    
    <div class="" v-for="post in filteredPost" :key="post.id">
      <h3> {{ post.title }} </h3>
      <p> {{ post.body | snippet }}</p>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Blogs',
  data() {
    return {
      blogTitle: "Blogs",
      posts: [],
      searchTerm: '',
    }
  },
  computed: {
    filteredPost(){
      return this.posts.filter(post => {
        return post.title.match(this.searchTerm)
      })
    }
  },
  methods: {
    changeTitle(){
      this.blogTitle = 'Amazing blog site.'
    },
  },
  // beforeCreate(){
  //   alert("before create hook")
  // },
  // created(){
  //   alert("Created hook")
  // },
  // beforeUpdate(){
  //   alert('Before update Hook')
  // }
  created(){
    axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then(response => {
      //console.log(response);
      this.posts = response.data
    }).catch(err =>{
      console.log(err)
    })
  },
}
</script>

<style lang="css">
</style>
