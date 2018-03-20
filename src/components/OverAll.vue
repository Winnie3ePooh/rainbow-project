<template>
  <div class="row center">
    <div class="col xl10">
      <div class="row type">
        <h1 class="center-align">{{type}}</h1>
      </div>
      <div class="row centered">
        <div class="col xl8">
          <div class="col xl4 top-to-bottom">
            <ul class="stats">
              <li class="center-align">
                <span class="label">revives:</span><span class="info">{{playerData.revives}}</span>
              </li>
              <li>
                <span class="label">suicides:</span><span class="info">{{playerData.suicides}}</span>
              </li>
              <li>
                <span class="label">reinforcements:</span><span class="info">{{playerData.reinforcements_deployed}}</span>
              </li>
              <li>
                <span class="label">barricades:</span><span class="info">{{playerData.barricades_built}}</span>
              </li>
            </ul>
          </div>
          <div class="col xl4 top-to-bottom">
            <ul class="stats">
              <li>
                <span class="label">steps:</span><span class="info">{{playerData.steps}}</span>
              </li>
              <li>
                <span class="label">Bullets fired:</span><span class="info">{{playerData.bullets_fired}}</span>
              </li>
            </ul>
          </div>
          <div class="col xl4">
            <ul class="stats">
              <li>
                <span class="label">headshots:</span><span class="info">{{playerData.headshots}}</span>
              </li>
              <li>
                <span class="label">melee kills:</span><span class="info">{{playerData.melee_kills}}</span>
              </li>
              <li>
                <span class="label">penetration kills:</span><span class="info">{{playerData.penetration_kills}}</span>
              </li>
              <li>
                <span class="label">assists:</span><span class="info">{{playerData.assists}}</span>
              </li>
            </ul>
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
.row {
  margin-bottom: 0;
}
.row.center {
  display: flex;
  justify-content: center;
  height: 100%;
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

.centered {
  display: flex;
  justify-content: center;
}
.stats {
  max-width: 100%;
  height: 300px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.stats li {
  margin: 15px 0;
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
