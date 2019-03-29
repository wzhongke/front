<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  methods: {
      increment () {
        this.$store.commit('increment', {amount: 10})
      }
  },
  computed: mapState({
    count: state => state.count
  })
}
</script>

