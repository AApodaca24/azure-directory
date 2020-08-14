<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/new">New</router-link></li>
      </ul>
    </div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#nav {
  max-height: 20vh;
  min-width: 100vw;
  background-color: #f4f4f4;
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
}

#nav ul {
  display: flex;
}

#nav li {
  min-height: 24px;
}
</style>
