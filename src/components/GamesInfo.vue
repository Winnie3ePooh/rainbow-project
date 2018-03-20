<template>
  <div class="row center">
    <div class="col xl10">
      <div class="row type">
        <h1 class="center-align">{{type}}</h1>
      </div>
      <div class="row centered">
        <div class="col xl8 br">
          <div class="col xl3 stats top-to-bottom">
            <div class="row labels">
              <span class="label">wins:</span><span class="info">{{playerData.wins}}</span>
            </div>
            <div class="row labels">
              <span class="label">losses:</span><span class="info">{{playerData.losses}}</span>
            </div>
          </div>
          <div class="col xl6 stats top-to-bottom">
            <div class="row">
              <h5>K/D: {{playerData.kd}}</h5>
              <div class="progress">
                <div class="determinate" v-bind:style="{ width: kdRatio+'%'}"></div>{{kdRatio}}
              </div>
            </div>
            <div class="row">
              <h5>W/L: {{playerData.wlr}}</h5>
              <div class="progress">
                <div class="determinate" v-bind:style="{ width: wlRatio+'%'}"></div>
              </div>
            </div>
          </div>
          <div class="col xl3 stats">
            <div class="row labels">
              <span class="label">kills:</span><span class="info">{{playerData.kills}}</span>
            </div>
            <div class="row labels">
              <span class="label">deaths:</span><span class="info">{{playerData.deaths}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: 'games-info-component',
  props: ['playerData', 'type'],
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  methods: {
  },
  computed: {
    kdRatio () {
      return 100*this.playerData.kills/(this.playerData.kills + this.playerData.deaths)
    },
    wlRatio () {
      return 100*this.playerData.wins/(this.playerData.wins + this.playerData.losses)
    }
  }
}
</script>

<style scoped>
/* .col.xl10 {
  margin-left: 45px!important;
} */
.row {
  margin-bottom: 0;
}

.row.center {
  display: flex;
  justify-content: center;
  height: 100%;
}
.row.centered {
  display: flex;
  justify-content: center;
  height: 300px;
}
.row.center .col {
  margin-left: 0!important;
}
.row.type {
  height: 100px;
}

.type h1 {
  margin: 0;
}
.stats {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 300px;
}
.stats .row {
  height: 33%;
}

.labels{
  display: flex;
  justify-content: center;
  align-items: center;
}
.label {
  text-transform: uppercase;
  color: rgb(43, 125, 161);
  margin-right: 20px;
}
.info {
  font-size: 30px;
  font-style: italic;
}
</style>
