<template>
  <div id="app">
    <div class="container">
      <div class="container has-text-centered">
        <b-navbar fixed-top=true transparent=true class="is-dark is-transparent">
          <template slot="end">
            <b-navbar-item class="center">
              <img class="img-header" src="./assets/WebDevelopment.png" />
            </b-navbar-item>
          </template>

          <template slot="end">
            <b-navbar-item class="is-white">
              <a href="#Title" v-smooth-scroll>Title</a>
            </b-navbar-item>
            <b-navbar-item>
              <a href="#Studies" v-smooth-scroll>
                Studies and
                knowledge
              </a>
            </b-navbar-item>
            <b-navbar-item>
              <a href="#Portfolio" v-smooth-scroll>Portfolio</a>
            </b-navbar-item>
            <b-navbar-item>
              <a class="margin"></a>
            </b-navbar-item>
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

.container {
  max-width: 90%;
}

.center{
  margin-right: 800px;
}

.img-header {
  width: 50px;
}
.margin {
  margin-right: 200px;
  visibility: hidden;
}

b-navbar-item:hover{
  color: $primary;
}

a:hover {
  color: green;
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
$link: $light;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
