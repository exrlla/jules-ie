<template>
  <nav class="navbar navbar-dark bg-inverse">
    <div class="container">
      <a class="navbar-brand" href="index.html">jules-ie!</a>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name : 'Home'}">Home</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">
            <i class="ion-compose"></i>&nbsp;New Post
          </a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name : 'Settings'}">Settings</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name : 'Login'}">Sign In</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name : 'Register'}">Register</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>