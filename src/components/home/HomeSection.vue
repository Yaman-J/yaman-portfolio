<template>
  <section class="home" id="home" dir="rtl">
    <div>
      <h2>
        Welcome to
        <br />
        <span>Yaman Website</span>
      </h2>
      <h3>Programmer, Video Editor, Designer, Freelancer</h3>
      <a
        href="https://drive.google.com/drive/folders/147lYgZwdTm_D26ReLPeTqziyq2BRZ6oA?usp=sharing"
        class="home-btn"
        >View My Work</a
      >

      <div class="social-icons">
        <a href="https://www.youtube.com/@yaman2010"><i class="fa-brands fa-youtube"></i></a>
        <a href="https://discord.com/invite/YzVUCp6C2S"><i class="fa-brands fa-discord"></i></a>
        <a href="https://github.com/Yaman-J"><i class="fa-brands fa-github"></i></a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: url(./images/background.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.home h2 {
  color: #fff;
  font-size: 1.4em;
  font-weight: 500;
}

.home h2 span {
  display: inline-block;
  margin-top: 10px;
  color: #ff0000;
  font-size: 2em;
  font-weight: 700;
}

.home h3 {
  color: #f0f0f0;
  font-size: 1.3em;
  font-weight: 400;
  letter-spacing: 1px;
  margin-top: 10px;
  margin-bottom: 30px;
}

.home-btn {
  color: #f0f0f0;
  background-color: #ff0000;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 500;
  display: inline-block;
  padding: 0.9375em 2.1875em;
  letter-spacing: 1px;
  border-radius: 15px;
  margin-bottom: 40px;
  transition: 0.7s ease;
}

.home-btn:hover {
  background-color: #da0000;
  transform: scale(1.1);
}

.social-icons a {
  color: #fff;
  font-size: 1.7em;
  padding-right: 30px;
}
</style>
