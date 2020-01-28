<template>
  <div class="main">
    <NotAuthorized/>
  </div>
</template>

<script>
// @ is an alias to /src
import NotAuthorized from '@/components/NotAuthorized/NotAuthorized.vue'

export default {
  name: 'home',
  components: {
    NotAuthorized
  }
}
</script>

<style scoped lang="scss">
</style>