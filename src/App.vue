<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterView } from "vue-router";
import AppNavbar from "./components/layout/AppNavbar.vue";
import AppFooter from "./components/layout/AppFooter.vue";

const splashVisible = ref(true);
const splashLeaving = ref(false);

onMounted(() => {
  setTimeout(() => {
    splashLeaving.value = true;
    setTimeout(() => {
      splashVisible.value = false;
    }, 600);
  }, 2500);
});
</script>

<template>
  <!-- Splash Screen -->
  <div
    v-if="splashVisible"
    :class="[
      'fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden',
      splashLeaving ? 'animate-slide-up-out' : '',
    ]"
    style="
      background: linear-gradient(
        135deg,
        #0c1e5e 0%,
        #1d4ed8 50%,
        #14532d 100%
      );
    "
  >
    <!-- Decorative background orbs -->
    <div
      class="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div
        class="absolute -top-40 -start-40 w-[500px] h-[500px] rounded-full opacity-20"
        style="background: radial-gradient(circle, #38bdf8, transparent 70%)"
      ></div>
      <div
        class="absolute -bottom-40 -end-40 w-[600px] h-[600px] rounded-full opacity-15"
        style="background: radial-gradient(circle, #4ade80, transparent 70%)"
      ></div>
      <div
        class="absolute top-1/3 end-1/4 w-72 h-72 rounded-full opacity-10"
        style="background: radial-gradient(circle, #60a5fa, transparent 70%)"
      ></div>
    </div>

    <!-- Logo content -->
    <div
      class="relative z-10 flex flex-col items-center gap-6 text-center px-8"
    >
      <!-- Logo image -->
      <div class="animate-pulse-slow">
        <img
          src="/logo-green-whale.png"
          alt="Green Whale"
          class="h-28 w-auto drop-shadow-2xl"
        />
      </div>

      <!-- Tagline -->
      <div>
        <div
          class="mt-2 h-px w-full rounded-full"
          style="
            background: linear-gradient(
              90deg,
              transparent,
              #38bdf8,
              #4ade80,
              transparent
            );
          "
        ></div>
        <p
          class="mt-3 text-white/60 uppercase tracking-[0.3em] text-xs font-medium"
        >
          {{ $t("splash.tagline") }}
        </p>
      </div>

      <!-- Loading indicator -->
      <div class="flex items-center gap-1.5 mt-2">
        <span
          class="w-2 h-2 rounded-full bg-brand-sky-blue/70 animate-bounce"
          style="animation-delay: 0ms"
        ></span>
        <span
          class="w-2 h-2 rounded-full bg-white/50 animate-bounce"
          style="animation-delay: 180ms"
        ></span>
        <span
          class="w-2 h-2 rounded-full bg-brand-fresh-green/70 animate-bounce"
          style="animation-delay: 360ms"
        ></span>
      </div>
    </div>
  </div>

  <!-- Main App (shown once splash is done) -->
  <div v-show="!splashVisible" class="min-h-screen flex flex-col">
    <AppNavbar />
    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <AppFooter />
  </div>
</template>

<style>
@keyframes slideUpOut {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
}
.animate-slide-up-out {
  animation: slideUpOut 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
