<template>
  <div class="index">
    -
    <div id="mainPage">
      <div class="ui container">
        <div class="ui grid" v-for="i in 10":key='i'>
          <div class="ten wide column">
            <div class="ui header">
              {{list[0].header}}
              <div class="ui sub header">{{list[0].time}}</div>
              <div class="ui sub header">{{list[0].place}}</div>
            </div>
          </div>
          <div class="one wide column"><i class="window minimize outline icon remove-icon"></i></div>
        </div>
      </div>
    </div>

    <div data-type="countdown" data-id="928419" class="tickcounter" style="width: 100%; position: relative; padding-bottom: 25%;">
      <a href="//www.tickcounter.com/countdown/928419/my-countdown" title="My countdown">My countdown</a>
      <a href="//www.tickcounter.com/" title="Countdown">Countdown</a>
    </div>
  </div>
</template>

<script>
(function(d, s, id) { var js, pjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "//www.tickcounter.com/static/js/loader.js";
  pjs.parentNode.insertBefore(js, pjs);
}(document, "script", "tickcounter-sdk"));

export default {
  name: 'Index',
  data () {
    return {
      list : [{
        header: "Head to school",
        time: '9:00am',
        place: 'Memorial University'
      },]
    }
  }
}
</script>

<style scoped>
.index{
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
}
#mainPage{
  margin-top: 40px;
}
.remove-icon{
  position: absolute;
}
</style>
