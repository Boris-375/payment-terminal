<template>
  <div id="app">
    <!--router-link потом снести-->
    <router-link to="/">Login</router-link>
    <router-link to="/list">main</router-link>
    <router-link to="/list/refill">refill</router-link>
    <router-view/>
  </div>
</template>

<style lang="scss">

//Для избавления от стандартных браузерных отступов
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow:hidden;
  font-family: $primaryFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:$primaryColor;
  background-color: darken($alterColor, 5%);
  .main{
    position: relative;
    margin:auto;
    padding: 10px;
    display: block;
    height: auto;
    min-width: 500px;
    max-width: 900px;
    border-radius: 30px;
    background-color: $alterColor;
    border: 3px solid $primaryColor;
    @media ($phone){
      min-width: 90vw;
    }
  }
}

//Логотип + имя оператора
.operator-block{
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 100%;
  &_logo{
    position: relative;
    width: 100%;
    img{
      display: block;
      max-width: 100%;
    }
  }
  p{
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
  }
}

//Общее оформление инпутов
.form-block{
  display: grid;
  grid-template-columns: 1.5fr 3fr;
  font-weight: 600;
  label{
      margin: auto 0;
    }
  input{
    margin: auto 0;
    height: 30px;
    padding: 0 10px;
    font-family: $primaryFont;
    font-weight: 600;
    border-radius: 5px;
    background-color: darken($alterColor, 5%);
    border: 2px solid fade-out($primaryColor, 0.3);
    transition-duration: 0.2s;
    &:hover{
      background-color: $alterColor;
      border: 2px solid $primaryColor;
    }
    &:focus{
      border: 2px solid $secondaryColor;
      color: $secondaryColor;
    }
  }
  @media ($phone){
    grid-template-columns: 1fr;
    grid-row-gap: 5px;
  }
}

//Общее оформление главной кнопки
.form-btn{
  display: block;
  width: 150px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  color: $alterColor;
  border: none;
  border-radius: 5px;
  background-color: $secondaryColor;
  transition-duration: 0.3s;
  &:hover{
    cursor:pointer;
    background-color: lighten($secondaryColor, 10%);
  }
  &:active{
    background-color: darken($secondaryColor, 10%);
  }
}

//Общее оформление кнопки "назад""
.back-btn{
  display: flex;
  width: 80px;
  height: 30px;
  color: $alterColor;
  font-weight: 600;
  text-decoration: none;
  border-radius: 5px;
  background-color: $secondaryColor;
  p{
    margin: auto;
  }
}

</style>
