<template>
  <div>
    <br />
    <br />
    <div class="line"></div>
    <div class="portfolio">
      <h1>Portfolio</h1>
    </div>
    <!-- Adventure book section -->
    <div class="columns is-centered is-desktop is-vcentered">
      <div class="column title is-7">
        <div>
          <figure class="box image is-16by9">
            <img src="../assets/AB1.png" alt="Image" />
          </figure>
        </div>

        <b-modal :active.sync="isCardModalActiveAdventure" scroll="keep">
          <div class="card">
            <div class="card-image">
              <figure class="image is-2by1">
                <a href="https://github.com/Sergio19006/E10" target="_blank">
                  <img src="../assets/AB1.png" alt="Image" />
                </a>
              </figure>
              <figure class="image is-2by1">
                <a href="https://github.com/Sergio19006/E10" target="_blank">
                  <img src="../assets/AB2.png" alt="Image" />
                </a>
              </figure>
              <figure class="image is-2by1">
                <a href="https://github.com/Sergio19006/E10" target="_blank">
                  <img src="../assets/AB3.png" alt="Image" />
                </a>
              </figure>
            </div>
          </div>
        </b-modal>
      </div>
      <div class="column card-content box is-4">
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
          These are project pictures made by my collegue and me for the University.
          It was created in Vuejs, Node with express and MongoDB.
          I was a member of a team and we programmed all ghe backend and the deploy for the university services.
          Moreover, I stablished the connection between frontend and backend.
          Finally I was one of the people helping to design de UI.
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
                <a href="https://github.com/fullstacktf/BcloudFrontend" target="_blank">
                  <img src="../assets/BC1.png" alt="Image" />
                </a>
              </figure>
              <video autoplay muted loop class="video">
                <source src="../assets/BC2.mp4" type="video/mp4" />
              </video>
              <video autoplay muted loop class="video">
                <source src="../assets/BC3.mp4" type="video/mp4" />
              </video>
              <video autoplay muted loop class="video">
                <source src="../assets/BC4.mp4" type="video/mp4" />
              </video>
              <video autoplay muted loop class="video">
                <source src="../assets/BC5.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </b-modal>
      </div>
      <div class="column card-content box is-4">
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
          Here we are the pictures of the web application which took three months in the fullstack course set up by EOI.
          It was created in Vuejs, Node with express and MongoDB.
          All backend and the deploy in Digital Ocean services is programmed by myself making use of Cloudfare.
          Also in this project we create own
          CDN of images and epubs using NGINX for the multimedia of the project.
          We implemented an algorithm which recommends books for users according to their likes.
          Connection between frontend and backend is made by myself as well.
          <strong>
            <a
              href="https://github.com/fullstacktf/BcloudFrontend"
              target="_blank"
            >Project's Frontend Repository</a>
            <br />
            <a
              href="https://github.com/fullstacktf/BcloudBackend"
              target="_blank"
            >Project's Backend Repository</a>
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
      isCardModalActiveBcloud: false
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