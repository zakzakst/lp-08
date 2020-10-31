<template lang="pug">
v-app
  global-header
  v-main.pt-12
    nuxt
  global-footer
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader'
import GlobalFooter from '@/components/GlobalFooter'

export default {
  data () {
    return {}
  },
  components: {
    GlobalHeader,
    GlobalFooter,
  },
}
</script>
