<template>
  <div class="login">
    <header>
      <h2>Authorization</h2>
    </header>
    
    <div class="login_form">

      <div class="form-block">
        <label for="authEmail">Your email:</label>
        <input type="text" placeholder="Put here your email" id="authEmail"
               :value="userData.email"
               @input="SET_USER_EMAIL($event.target.value)"
        >
      </div>
      
      <div class="form-block">
        <label for="authPass">Your password:</label>
        <input type="password" placeholder="Put here your password" id="authPass"
               :value="userData.password"
               @input="SET_USER_PASSWORD($event.target.value)"
        >
      </div>

      <button class="form-btn" @click="login">Login</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
export default {
  name: 'NotAthorized',
  computed:{
    ...mapGetters('terminal', ['userData']),
  },
  methods: {
    ...mapMutations({
      SET_USER_EMAIL: "terminal/SET_USER_EMAIL",
      SET_USER_PASSWORD: "terminal/SET_USER_PASSWORD",
    }),
    login(){
      alert("Здесь будет отправка инфы на сервер");
      this.$router.push({path: "/list"});
    }
  }
}
</script>

<style scoped lang="scss">
.login{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100px;
  header{
    text-align: center;
    margin-bottom: 10px;
  }
  &_form{
    display: grid;
    grid-row-gap: 10px;
    font-weight: 600;
    button{
      margin: 0 auto;
    }
  }
}
</style>
