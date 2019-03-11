new Vue({
  el: '#app',
  data: {
    title: 'Becoming a vue ninja',
    name: 'Nana',
    url: 'http://www.youtube.com',
    classes: ['one', 'two'],
    wage:10,
    showName:true,
    showAge: true,
    coords: {
      x:0,
      y:0
    },
    items:['Mushrooms', 'Green Shells', 'Red Shells', 'Banana', 'Star'],
    ninjas:[
      {name: 'Sam', age: 25, belt:'Black'},
      {name: 'Henry', age: 35, belt:'Blue'},
      {name: 'Sally', age: 30, belt:'Orange'}
    ]
  },
  methods:{
    greet(time){
      return `Hello and good ${time}, ${this.name}`
    },
    changeWage(amount){
      this.wage += amount
    },
    logEvent(e){
      console.log(e)
    },
    logCoords(e){
      this.coords.x = e.offsetX
      this.coords.y = e.offsetY
    },
    updateName(e){
      this.name = e.target.value
    },
    logMessage(){
      console.log('Hello World')
    },
    toggleName(){
      this.showName = !this.showName
    },
    toggleAge(){
      this.showAge = !this.showAge
    }
  }
})
