<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background image with overlay -->
    <div class="absolute inset-0">
      <img
        src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
        alt="Modern eco-friendly industrial facility"
        class="w-full h-full object-cover"
        loading="eager"
      />
      <!-- Multi-layer overlay for depth -->
      <div
        class="absolute inset-0"
        style="
          background: linear-gradient(
            135deg,
            rgba(13, 27, 90, 0.88) 0%,
            rgba(29, 78, 216, 0.75) 45%,
            rgba(22, 101, 52, 0.65) 100%
          );
        "
      ></div>
      <div
        class="absolute inset-0"
        style="
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.4) 0%,
            transparent 60%
          );
        "
      ></div>
    </div>

    <!-- Animated background particles -->
    <div
      class="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div
        v-for="i in 6"
        :key="i"
        class="absolute rounded-full opacity-10 animate-pulse-slow"
        :style="{
          width: `${[300, 200, 400, 150, 250, 180][i - 1]}px`,
          height: `${[300, 200, 400, 150, 250, 180][i - 1]}px`,
          top: `${[10, 60, 5, 75, 30, 80][i - 1]}%`,
          left: `${[5, 70, 45, 20, 85, 55][i - 1]}%`,
          background: `radial-gradient(circle, ${['#38BDF8', '#4ADE80', '#38BDF8', '#4ADE80', '#60A5FA', '#34D399'][i - 1]}, transparent 70%)`,
          animationDelay: `${(i - 1) * 0.5}s`,
        }"
      ></div>
    </div>

    <!-- Content -->
    <div
      class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-20"
    >
      <div class="max-w-3xl">
        <!-- Badge -->
        <div
          :class="[
            'inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 mb-8 transition-all duration-700',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          ]"
          style="
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(8px);
            transition-delay: 0ms;
          "
        >
          <span
            class="w-1.5 h-1.5 rounded-full bg-brand-fresh-green animate-pulse"
          ></span>
          <span
            class="text-white/80 text-xs font-medium uppercase tracking-widest"
            >{{ t("hero.badge") }}</span
          >
        </div>

        <!-- Headline -->
        <h1
          :class="[
            'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6 transition-all duration-700',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ]"
          style="letter-spacing: -1px; transition-delay: 120ms"
        >
          {{ t("hero.headline") }}
        </h1>

        <!-- Subheadline -->
        <p
          :class="[
            'text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-xl transition-all duration-700',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ]"
          style="transition-delay: 240ms"
        >
          {{ t("hero.subheadline") }}
        </p>

        <!-- CTAs -->
        <div
          :class="[
            'flex flex-wrap items-center gap-4 transition-all duration-700',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ]"
          style="transition-delay: 360ms"
        >
          <RouterLink
            to="/services"
            class="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            style="background: linear-gradient(135deg, #1d4ed8, #0ea5e9)"
          >
            {{ t("hero.ctaPrimary") }}
            <svg
              class="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </RouterLink>

          <RouterLink
            to="/about"
            class="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold border border-white/25 text-white hover:bg-white/10 transition-all duration-300"
          >
            {{ t("hero.ctaSecondary") }}
          </RouterLink>
        </div>
      </div>

      <!-- Scroll hint -->
      <div
        :class="[
          'absolute bottom-10 start-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700',
          loaded ? 'opacity-60' : 'opacity-0',
        ]"
        style="transition-delay: 800ms"
      >
        <span class="text-white text-xs uppercase tracking-widest">{{
          t("hero.scrollDown")
        }}</span>
        <div
          class="w-px h-12 bg-gradient-to-b from-white to-transparent animate-bounce"
        ></div>
      </div>
    </div>

    <!-- Bottom fade -->
    <div
      class="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
      style="background: linear-gradient(to bottom, transparent, #ffffff)"
    ></div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const loaded = ref(false);

onMounted(() => {
  requestAnimationFrame(() => {
    loaded.value = true;
  });
});
</script>
