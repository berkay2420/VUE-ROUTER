<template>
  <TheNavigation/>

  <div class="container">
    <router-view v-slot="{ Component }">
      <transition name="modern-slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue';

export default {
  components: { TheNavigation }
};
</script>

<style lang="css">
/* Modern transition with smooth scaling, fading, and sliding */
.modern-slide-enter-active,
.modern-slide-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.modern-slide-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.modern-slide-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.modern-slide-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.modern-slide-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.95);
}
</style>