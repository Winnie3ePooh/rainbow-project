<template>
  <div class="row">
    <div class="col xl12">
      <div class="row">
        <form class="col xl12">
          <div class="row">
            <div class="row">
              <div class="col xl12 offset-xl3">
                <div class="input-field col xl4">
                  <input id="nickname" v-model="nickname" type="text" class="validate">
                  <label for="nickname">Nickname</label>
                </div>
                <div class="input-field col xl2">
                 <select>
                   <option disabled>Choose your platform</option>
                   <option @click="setPlatform('PC')">PC</option>
                   <option @click="setPlatform('PS4')" disabled>PS4</option>
                   <option @click="setPlatform('XBox')" disabled>XBox</option>
                 </select>
                 <label>Platform</label>
               </div>
              </div>
            </div>
            <div class="row">
              <button class="btn waves-effect waves-light" type="button" @click="getUserInfo">Submit
                <i class="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
      <transition name="fade">
        <div class="row" v-if="seen">
          <div class="col xl12 loader-div">
            <div class="loader"></div>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div class="row" v-if="playerProfile && !seen">
          <player-profile-component :playerData="playerProfile.player"></player-profile-component>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PlayerProfile from './PlayerProfile.vue'

export default {
  /* eslint-disable */
  name: 'index-component',
  components: {
    'player-profile-component': PlayerProfile,
  },
  data () {
    return {
      nickname: '',
      platform: 'uplay',
      seen: false,
      playerProfile: null
    }
  },
  methods: {
    setPlatform (platform) {
      this.platform = platform
    },
    getUserInfo () {
      this.seen = !this.seen;
      axios.post('http://localhost:3000/api/v1/userProfile', {
          nickname: this.nickname,
          platform: this.platform
        })
        .then( resp => {
          this.playerProfile = resp.data
          this.seen = !this.seen
        })
        .catch( err => {
          console.log('HZ')
        })
    },
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

html {
  font-family: 'Montserrat', sans-serif;
}

.loader-div {
  margin-top: 20px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
}
.loader {
  border: 12px solid #f3f3f3; /* Light grey */
  border-top: 12px solid rgb(11, 11, 11); /* Blue */
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
