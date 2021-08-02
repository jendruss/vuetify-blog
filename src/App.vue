<template>
  <v-app>
    <v-container bg fill-height grid-list-md text-xs-center v-if="loading">
      <v-layout row wrap align-center>
        <v-flex>
          <v-progress-circular
            :size="70"
            color="red"
            indeterminate
          ></v-progress-circular>
          </v-flex>
      </v-layout>
    </v-container>
      <Layout v-if="!loading"/>
  </v-app>
</template>

<script>
import Layout from './components/layout/Layout.vue';
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Layout,
  },
  metaInfo: {
    title: 'App',
    titleTemplate: '%s | '+process.env.VUE_APP_TITLE,
    meta: [
      // OpenGraph data (Most widely used)
      { property: 'og:title', content: process.env.VUE_APP_META_TITLE },
      { property: 'og:site_name', content: process.env.VUE_APP_TITLE },
      // The list of types is available here: http://ogp.me/#types
      { property: 'og:type', content: 'website' },
      // Should the the same as your canonical link, see below.
      { property: 'og:url', content: 'https://www.'+process.env.VUE_APP_DOMAIN },
      { property: 'og:image', content: 'https://www.'+process.env.VUE_APP_META_LOGO },
      // Often the same as your meta description, but not always.
      { property: 'og:description', content: process.env.VUE_APP_META_DESC },
      // Twitter card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: 'https://www.'+process.env.VUE_APP_DOMAIN },
      { name: 'twitter:title', content: process.env.VUE_APP_META_TITLE },
      { name: 'twitter:description', content: process.env.VUE_APP_META_DESC },
      // Your twitter handle, if you have one.
      { name: 'twitter:creator', content: '@aaron_vail' },
      { name: 'twitter:image:src', content: 'https://www.'+process.env.VUE_APP_META_LOGO },
      // Google / Schema.org markup:
      { itemprop: 'name', content: process.env.VUE_APP_META_TITLE },
      { name: 'description', itemprop: 'description', content: process.env.VUE_APP_META_DESC },
      { itemprop: 'image', content: 'https://www.'+process.env.VUE_APP_META_LOGO }
    ]
  },
  data () {
    return {
      //
    }
  },
  created () {
    this.$store.dispatch('initCosmic')
  },
  computed: {
    ...mapGetters([
      'loading'
    ])
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
transition-property: opacity;
transition-duration: .25s;
}
.fade-enter-active {
transition-delay: .25s;
}
.fade-enter, .fade-leave-active {
opacity: 0;
}
</style>
