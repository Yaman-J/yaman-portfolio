<template>
  <footer class="footer">
    <p class="footer-title">Copyrights @ <span>Yaman</span></p>

    <div class="social-icons">
      <a href="https://www.youtube.com/@yaman2010"><i class="fa-brands fa-youtube"></i></a>
      <a href="https://discord.com/invite/YzVUCp6C2S"><i class="fa-brands fa-discord"></i></a>
      <a href="https://github.com/Yaman-J"><i class="fa-brands fa-github"></i></a>
    </div>
  </footer>
</template>

<style scoped>
.footer{
  background-color: #000;
  color: #fff;
  padding: 1em;
  display: flex;
  justify-content: space-between;
}

.footer-title{
  font-size: 1.3em;
  font-weight: 600;
}

.footer-title span{
  color: #ff0000;
}

.social-icons a{
  color: #fff;
  font-size: 1.7em;
  padding-right: 30px;
}
</style>