<template>
  <div id="app">
    <button type="button" class="btn btn-primary btn-lg" @click="getQ()">
      <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
      {{title}}
    </button>

    <div class="container">
      <div class="jumbotron">
        <h1>{{q}}</h1>
        <span>{{questions.length}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Click Me',
      questions: [
        'What is the first thing you think off when you wake up in the morning?',
        'If you chose your age forever, what age would you choose and why?',
        'If you had to do this week all over again, what would you do differently',
        'What book, movie or video have you seen/read recently you would recommend? Why?',
        'If you had a time machine that would work only once, what point in the future or in history would you visit? Why?',
        'Of all the places you have lived/visited, what was the one you like the best? Why?',
        'Who was your favorite grade school/high teacher?',
        'If you knew you were going to die in 24 hours, what three things would you do in the time you had left?',
        'If you were mayor for the day, what three things would you change about your city?',
        'If I gave you $10,000, what would you spend it on?',
        'If they made a movie of your life, what would it be about, and which actor would you want to play you?',
        'If you could max out your credit card at any store, what store would you choose?',
        'If you were a city, which city would you choose and why?',
        'If you were to write a book about yourself, what would you name it?',
        'What historical figure interests you the most?',
        'What is one funny trait you have, that you would like others to know about?',
        'Who is the famous person or character you would have loved to be born as?',
        'Who is the most influential person in the world today?',
        'What is the hardest thing you have ever done?',
        'What do you do first thing in the morning?',
        'What do you think is the greatest invention in your lifetime and why?',
        'What is your most favorite purchase?',
        'What was the most terrifying situation you have ever been in?',
        'If your house was burning down, what three objects would you try and save?',
        'What is your motto in life?',
        'Describe a real-life situation where you stood up for someone/something.',
        'Describe one experience you have had where you took a huge leap of faith.',
        'Describe one past action (big or small) you took to improve the quality of your life.',
        'What is the one thing for which you would most like to be remembered after your death?',
        'If someone made a movie of your life would it be a drama, a comedy, a romantic-comedy, action film, or fiction?',
        'If you were a city, which city would you choose and why?',
        'What do you think is the perfect age? Why?',
        'What is a typical day like for you?'
      ],
      q: null,
    }
  },
  methods : {
    getQ(){
      if(this.questions.length){
        this.q = this.questions[Math.floor(Math.random() * this.questions.length)];
        this.questions = this.questions.filter(qs => {
          return qs !== this.q
        });
      }else{
        this.q = 'Questions Done!!!!!'
      }
    }
  }
}

</script>
<style>
button{
  margin: 20px 0px 0px 10%;
}
.jumbotron{
  margin-top: 20px;
}
</style>
