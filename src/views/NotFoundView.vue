<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.not-found {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.not-found h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.not-found p {
  font-size: 1.5rem;
}

@media (min-width: 1024px) {
  .not-found {
    min-height: 100vh;
  }

  .not-found h1 {
    font-size: 4rem;
  }

  .not-found p {
    font-size: 2rem;
  }
}
</style>
