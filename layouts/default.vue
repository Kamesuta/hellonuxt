<template>
  <div>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          v-on:click="expanded = !expanded"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': expanded }">
        <div class="navbar-start">
          <div class="media" v-if="isLogin">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="user.photoURL">
              </figure>
            </div>
            <div class="media-content">
              <p class="is-6">{{user.displayName}}</p>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary" v-if="!isLogin" v-on:click="googleLogin()">
                <strong>Log in</strong>
              </a>
              <a class="button is-light" v-else v-on:click="logOut()">Log out</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div>
      <nuxt />
    </div>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  name: 'default_layout',
  data() {
    return {
      expanded: false,
      isWaiting: true,
      isLogin: false,
      user: null
    }
  },
  head() {
    // since nuxt.js uses vue-meta to update the document head and meta attributes
    // you can also use it for your own good which means adding meta tags or editing
    // the attributes of a body tag! you can learn more here
    // https://nuxtjs.org/guide/views/#html-head
    // or here
    // https://github.com/declandewet/vue-meta#recognized-metainfo-properties
    return {
      bodyAttrs: {
        class: 'has-navbar-fixed-top'
      }
    }
  },
  mounted: function() {
    firebase.auth().onAuthStateChanged((user) => {
      this.isWaiting = false
      if (user) {
        this.isLogin = true
        this.user = user
      } else {
        this.isLogin = false
        this.user = null
      }
    })
  },
  methods: {
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    },
    logOut() {
      firebase.auth().signOut()
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
