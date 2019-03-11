<template lang="html">
  <div id="all-friends">
    <h2>All Friends</h2>
    <div class="" v-for="(friend, index) in friends" :key="index">
      <span @click="unFriend(friend.name)"> {{ friend.name }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllFriends",
  props: ['friends'],
  data() {
    return{

    }
  },
  methods: {
    unFriend(name){
      this.$emit('delete',{name})
    },
  }
}
</script>

<style lang="css">
</style>
