<template>
  <div class="row center">
    <div class="col xl12">
      <div class="row type">
        <h1>{{type}}</h1>
      </div>
      <div class="row centered">
        <div class="col xl8 br">
          <div class="col xl4 stats">
            <div class="row labels">
              <span class="label">revives:</span><span class="info">{{playerData.revives}}</span>
            </div>
            <div class="row labels">
              <span class="label">suicides:</span><span class="info">{{playerData.suicides}}</span>
            </div>
            <div class="row labels">
              <span class="label">reinforcements:</span><span class="info">{{playerData.reinforcements_deployed}}</span>
            </div>
            <div class="row labels">
              <span class="label">barricades:</span><span class="info">{{playerData.barricades_built}}</span>
            </div>
          </div>
          <div class="col xl4 stats">
            <div class="row labels">
              <span class="label">steps:</span><span class="info">{{playerData.steps}}</span>
            </div>
            <div class="row labels">
              <span class="label">Bullets fired:</span><span class="info">{{playerData.bullets_fired}}</span>
            </div>
          </div>
          <div class="col xl4 stats">
            <div class="row labels">
              <span class="label">headshots:</span><span class="info">{{playerData.headshots}}</span>
            </div>
            <div class="row labels">
              <span class="label">melee kills:</span><span class="info">{{playerData.melee_kills}}</span>
            </div>
            <div class="row labels">
              <span class="label">penetration kills:</span><span class="info">{{playerData.penetration_kills}}</span>
            </div>
            <div class="row labels">
              <span class="label">assists:</span><span class="info">{{playerData.assists}}</span>
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
  name: 'overall-component',
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
  }
}
</script>

<style scoped>
.row.center {
  display: flex;
  justify-content: center;
  height: 100%;
}
.row.centered {
  display: flex;
  justify-content: center;
  /* height: 80%; */
}
.row.center .col {
  margin-left: 0!important;
}
.row.type {
  height: 15%;
}
.stats {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* height: 100%; */
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
