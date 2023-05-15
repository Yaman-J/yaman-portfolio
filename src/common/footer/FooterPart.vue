<template>
  <footer class="footer">
    <p class="footer-title">{{$t('Footer.CR')}}<span>{{$t('Footer.Name')}}</span></p>

    <div class="social-icons">
      <a href="https://www.youtube.com/@yaman2010"><i class="fa-brands fa-youtube"></i></a>
      <a href="https://discord.com/invite/xMbSAtsYxJ"><i class="fa-brands fa-discord"></i></a>
      <a href="https://github.com/Yaman-J"><i class="fa-brands fa-github"></i></a>
			<a href="https://www.instagram.com/yamancpu/"><i class="fa-brands fa-instagram"></i></a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #000;
  color: #fff;
  padding: 1em;
  display: flex;
  justify-content: space-between;
}

.footer-title {
  font-size: 1.2em;
  font-weight: 600;
}

.footer-title span {
  color: #ff0000;
}

.social-icons a {
  color: #fff;
  font-size: 1.3em;
  padding-right: 30px;
}
</style>
