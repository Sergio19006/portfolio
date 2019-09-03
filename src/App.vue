<template>
  <div id="app">
    <div class="container">
        <div class="container has-text-centered">
          <b-navbar class="is-dark">
            <template slot="brand">
              <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img class="img-header" src="./assets/WebDevelopment.png" />
              </b-navbar-item>
            </template>
            <template slot="end">
              <b-navbar-item href="#">Title</b-navbar-item>
              <b-navbar-item href="#">knowledge</b-navbar-item>
              <b-navbar-item href="#">Portfolio</b-navbar-item>
            </template>
          </b-navbar>
      </div>

      <section class="section" id="Title">
        <div class="container">
          <Title />
        </div>
      </section>

      <section class="section" id="Studies">
        <Studies />
      </section>

      <section class="section" id="Portfolio">
        <Portfolio />
      </section>
    </div>
  </div>
</template>

<script>
import Title from "./components/Title";
import Studies from "./components/Studies";
import Portfolio from "./components/Portfolio";

export default {
  name: "app",
  components: {
    Title,
    Studies,
    Portfolio
  }
};
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-header {
  width: 50px;
}

// Set your colors
$primary: #8c67ef;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $light,
    $light-invert
  ),
  "dark": (
    $dark,
    $dark-invert
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "info": (
    $info,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  ),
  "twitter": (
    $twitter,
    $twitter-invert
  )
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
