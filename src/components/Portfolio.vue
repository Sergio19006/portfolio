<template>
  <div>
    <div class="line"></div>
    <div class="portfolio">
      <h1>Portfolio</h1>
    </div>
    <!-- Adventure book section -->
    <div class="columns is-centered is-desktop is-vcentered">
      <div class="column title column is-7">
        <div>
          <figure class="box image is-16by9">
            <img src="../assets/AB1.png" alt="Image" />
          </figure>
        </div>

        <b-modal :active.sync="isCardModalActiveAdventure" scroll="keep">
          <div class="card">
            <div class="card-image">
              <figure class="image is-2by1">
                <img src="../assets/AB1.png" alt="Image" />
              </figure>
              <figure class="image is-2by1">
                <img src="../assets/AB2.png" alt="Image" />
              </figure>
              <figure class="image is-2by1">
                <img src="../assets/AB3.png" alt="Image" />
              </figure>
            </div>
          </div>
        </b-modal>
      </div>
      <div class="column card-content box is-5">
        <div class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="../assets/emoji.png" alt="Image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">Sergio del Pino</p>
            <p class="subtitle is-6">@Sergio19006</p>
          </div>
        </div>
        <br />
        <div class="content">
          Some pictures of a project that i made for the university. It was created in Vuejs and Node with express.
          I was one of the team, and me and one partner did all the backend and the deploy in the university services.
          In this project also i did the conextion in the frontend and backend. And i help in the design of the UI.
          <strong>
            <a href="https://github.com/Sergio19006/E10" target="_blank">Project's Repository</a>
          </strong>.
          <br />
          <small>1 Feb 2019</small>
          <div>
            <br />
            <button class="button is-medium" @click="isCardModalActiveAdventure = true">Preview</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bcloud section -->
    <div class="columns is-centered is-desktop is-vcentered">
      <div class="column title column is-7">
        <div>
          <figure class="box image is-16by9">
            <img src="../assets/BC1.png" alt="Image" />
          </figure>
        </div>

        <b-modal :active.sync="isCardModalActiveBcloud" scroll="keep">
          <div class="card">
            <div class="card-image">
              <figure class="image is-2by1">
                <img src="../assets/BC1.png" alt="Image" />
              </figure>
            </div>
          </div>
        </b-modal>
      </div>
      <div class="column card-content box is-5">
        <div class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="../assets/emoji.png" alt="Image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">Sergio del Pino</p>
            <p class="subtitle is-6">@Sergio19006</p>
          </div>
        </div>
        <br />
        <div class="content">
          Some pictures of a project that i made in a 3 month long fullstack course organizated by EOI. It was created in Vuejs and Node with express.
          I did all the backend and the deploy in the Digital Ocean services using also Cloudfare. Also in this project we create own 
          CDN of images and epubs for the 
          In this project also i did the conextion in the frontend and backend.
          <strong>
            <a href="https://github.com/fullstacktf/BcloudFrontend" target="_blank">Project's Frontend Repository</a>
            <br>
            <a href="https://github.com/fullstacktf/BcloudBackend" target="_blank">Project's Backend Repository</a>
          </strong>.
          <br />
          <small>14 Aug 2019</small>
          <div>
            <br />
            <button class="button is-medium" @click="isCardModalActiveBcloud = true">Preview</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isCardModalActiveAdventure: false,
      isCardModalActiveBcloud: false,
    };
  }
};
</script>

<style lang="scss" scoped>
.blue {
  background-color: blue;
}

.portfolio {
  display: flex;
  justify-content: center;
  align-items: center;
}

.columns {
  justify-items: center;
  align-content: center;
}

h1 {
  font-size: 40px;
}

.line {
  height: 1px;
  width: 100%;
  background-color: black;
  margin-top: -50px;
  margin-bottom: 20px;
}

.examples {
  width: 100%;
}

a {
  color: black;
}
</style>