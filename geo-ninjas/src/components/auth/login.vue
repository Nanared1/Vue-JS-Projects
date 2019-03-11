<template lang="html">
  <div class="login container" @submit.prevent="login">
    <form class="card-panel">
      <h2 class="center deep-purple-text">Login</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email">
      </div>
      <div class="field">
        <label for="password">Password</label>
        <input type="password" name="password" v-model="password">
      </div>
      <p class="red-text center" v-if="feedback">{{feedback}}</p>
      <div class="field ">
        <button class="btn deep-purple">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'Login',
  data(){
    return {
      email: null,
      password: null,
      feedback: null,
    }
  },
  methods: {
    login(){
      if(this.email && this.password){
        this.feedback = null;
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(cred => {
          this.$router.push({name: 'GMap'});
          console.log(cred.user);
        })
        .catch(err => {
          this.feedback = err.message;
        })
      }else{
        this.feedback = "Please enter an email and password";
      }
    }
  }
}
</script>

<style lang="css" >
.login{
  max-width: 400px;
  margin-top: 60px;
}
.login h2{
  font-size: 2.4em;
}
.login .field{
  margin-bottom: 16px;
}
</style>
