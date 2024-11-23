<template>
  <div class="NotFoundDiv">
    <h1>Not Found 404</h1>
    <p>We couldn't find the page you are looking for</p>
    <router-link to="/"  class="NotFoundP">Return Home</router-link>
  </div>
</template>

<style scoped>
.NotFoundDiv {
  border: 2px dashed red;
  padding: 16px;
  text-align: center;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.NotFoundP {
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: #007BFF;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.NotFoundP:hover {
  background-color: #0056b3;
}
</style>
