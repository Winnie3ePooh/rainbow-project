<template>
  <div class="col xl12">
    <div class="row">
      {{playerData.username}}
    </div>
    <div class="row">
      <swiper :options="swiperOption">
        <swiper-slide><games-info-component :playerData="playerData.stats.ranked" :type="'ranked'"></games-info-component></swiper-slide>
        <swiper-slide><games-info-component :playerData="playerData.stats.casual" :type="'casual'"></games-info-component></swiper-slide>
        <swiper-slide><overall-component :playerData="playerData.stats.overall" :type="'overall'"></overall-component></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import GamesInfo from './GamesInfo.vue'
import OverAll from './OverAll.vue'

export default {
  /* eslint-disable */
  name: 'player-profile-component',
  components: {
    'games-info-component': GamesInfo,
    'overall-component': OverAll
  },
  props: ['playerData'],
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
.swiper-container {
  max-height: 400px;
}
.swiper-slide {
  height: 400px;
}
</style>
