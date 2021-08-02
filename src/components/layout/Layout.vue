<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list dense nav>
        <v-list-item to="/">
          <v-list-item-content>
            <v-list-item-title> Psycholog sportu </v-list-item-title>
            <v-list-item-subtitle> Kacper Urbańczak </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          to="/"
          v-scroll-to="'#about-me'"
        >
          <v-list-item-icon>
            <v-icon>mdi-account-tie</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>O mnie</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          to="/"
          v-scroll-to="'#cooperation'"
        >
          <v-list-item-icon>
            <v-icon>mdi-menu</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Współpraca</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          to="/"
          v-scroll-to="'#contact'"
        >
          <v-list-item-icon>
            <v-icon>mdi-phone</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Kontakt</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          @click="$router.push('/blog')"
        >
          <v-list-item-icon>
            <v-icon>mdi-newspaper</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Blog</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="white" height="100">
      <v-app-bar-nav-icon
        v-if="isMobile"
        @click.stop="onDrawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-spacer v-if="isMobile"></v-spacer>

      <!-- <v-toolbar-title @click="$router.push('/')">
        Psycholog sportu - Kacper Urbańczak
      </v-toolbar-title> -->
      
      <router-link to="/" exact class="black--text">
        <img v-if="getSettings.metadata.app_logo.imgix_url" :src="getSettings.metadata.app_logo.imgix_url" style="max-height:38px;" />
        <v-app-bar-title v-else class="headline text-uppercase">
          {{ toolbarTitle }}
        </v-app-bar-title>
      </router-link>

      <v-spacer v-if="!isMobile"></v-spacer>
      <v-btn
        v-if="!isMobile"
        class="mr-5 white--text"
        rounded
        x-large
        :color="leadingColor"
        elevation="5"
        to="/"
        v-scroll-to="'#about-me'"
      >
        <v-icon class="mr-2">mdi-account-tie</v-icon>
        O mnie
      </v-btn>
      <v-btn
        v-if="!isMobile"
        class="mr-5 white--text"
        rounded
        x-large
        :color="leadingColor"
        elevation="5"
        to="/"
        v-scroll-to="'#cooperation'"
      >
        <v-icon class="mr-2">mdi-menu</v-icon>
        Współpraca
      </v-btn>
      <v-btn
        v-if="!isMobile"
        class="mr-5 white--text"
        rounded
        x-large
        :color="leadingColor"
        elevation="5"
        to="/"
        v-scroll-to="'#contact'"
      >
        <v-icon class="mr-2">mdi-phone</v-icon>
        Kontakt
      </v-btn>
      <v-btn
        v-if="!isMobile"
        class="mr-5 white--text"
        rounded
        x-large
        :color="leadingColor"
        elevation="5"
        @click="$router.push('/blog')"
      >
        <v-icon class="mr-2">mdi-newspaper</v-icon>
        Blog
      </v-btn>
    </v-app-bar>

    <v-main>
      <transition appear name="fade">
        <router-view></router-view>
      </transition>
    </v-main>

    <v-footer
      height="auto"
      color="primary darken-1">
      <v-layout row wrap>
        <v-flex v-if="footerCopyright"
        class="attribution"
        text-xs-center
        text-sm-right
        white--text
        xs12
        sm6
        pr-3
        >
        {{ footerCopyright }} {{ getCurrentYear }}
      </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Layout",
  data() {
    return {
      isMobile: false,
    };
  },
  computed: {
    ...mapGetters([
      'getSettings',
      'getSocialSettings'
    ]),
    toolbarTitle () {
      return this.getSettings.metadata.logo_text
    },
    leadingColor() {
        return this.$store.state.leadingColor
    },
    drawer() {
        return this.$store.state.drawer
    },
    footerCopyright () {
      return this.getSettings.metadata.footer_copyright
    },
    enableSocialIcons () {
      return this.getSocialSettings.metadata.enable_social_profile_section
    },
    socialIcons () {
      return this.getSocialSettings.metadata.social_profiles
    },
    getCurrentYear () {
      return (new Date()).getFullYear()
    }
  },
  beforeDestroy() {
    if (typeof window === "undefined") return;
    window.removeEventListener("resize", this.onResize, { passive: true });
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 960;
    },
  },
};
</script>

<style scoped>
</style>