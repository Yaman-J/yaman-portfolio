<template>
  <header>
    <a href="#" class="logo">Yaman</a>
    <nav class="navigation">
      <a href="#home">Home</a>
      <a href="#about">About Me</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact Me</a>
			<a href="" class="language-switch">AR</a>
    </nav>
  </header>
</template>

<style scoped>
header{
  background-color: #fbfaf5;
  width: 100%;
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
}

.logo{
  text-decoration: none;
  color: #ff0000;
  text-transform: uppercase;
  font-weight: 1000;
  font-size: 1.8em;
}

.navigation a{
  color: #ff0000;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 500;
  padding-left: 30px;
}

.navigation a:hover{
  color: #da0000;
}

.navigation .language-switch{
  color: #000;
  font-size: 0.8em;
  font-weight: 600;
  text-decoration: underline;
}

.navigation .language-switch:hover {
  color: #000;
}
</style>