<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const currentImageIndex = ref(0);
const loaded = ref(false);

const heroImages = [
  "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80",
  "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80",
  "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80",
];

let carouselInterval: number | undefined;

onMounted(() => {
  requestAnimationFrame(() => {
    setTimeout(() => {
      loaded.value = true;
    }, 100);
  });

  carouselInterval = window.setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % heroImages.length;
  }, 5000);
});

onUnmounted(() => {
  if (carouselInterval) clearInterval(carouselInterval);
});
</script>

<template>
  <section
    class="relative min-h-screen flex items-center overflow-hidden pt-20"
  >
    <!-- Carousel Background -->
    <div class="absolute inset-0">
      <!-- Images with crossfade -->
      <div
        v-for="(image, idx) in heroImages"
        :key="idx"
        class="absolute inset-0 transition-opacity duration-1000 ease-out"
        :style="{ opacity: idx === currentImageIndex ? 1 : 0 }"
      >
        <img
          :src="image"
          :alt="`Hero background ${idx + 1}`"
          class="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      <!-- Gradient overlays with brand colors - Deep Blue to Fresh Green -->
      <div
        class="absolute inset-0"
        style="
          background: linear-gradient(
            135deg,
            rgba(0, 102, 204, 0.35) 0%,
            rgba(0, 170, 85, 0.25) 100%
          );
        "
      ></div>
      <div
        class="absolute inset-0"
        style="
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.15) 50%,
            rgba(0, 170, 85, 0.2) 100%
          );
        "
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="max-w-3xl">
        <!-- Badge -->
        <div
          :class="[
            'inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 transition-all duration-1000',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
          ]"
          style="
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.3);
          "
        >
          <span
            class="w-2 h-2 rounded-full"
            style="
              background: #00aa55;
              animation: pulse 2s ease-in-out infinite;
            "
          ></span>
          <span
            class="text-white/90 text-xs font-medium uppercase tracking-widest"
            >{{ t("hero.badge") }}</span
          >
        </div>

        <!-- Headline -->
        <h1
          :class="[
            'text-5xl sm:text-6xl lg:text-7xl font-black mb-6 transition-all duration-1000 leading-tight',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
          ]"
          style="
            letter-spacing: -1px;
            background: linear-gradient(
              135deg,
              #ffffff 0%,
              rgba(255, 255, 255, 0.95) 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            transition-delay: 200ms;
          "
        >
          {{ t("hero.headline") }}
        </h1>

        <!-- Subheadline -->
        <p
          :class="[
            'text-lg sm:text-xl text-white/85 leading-relaxed mb-12 max-w-2xl transition-all duration-1000',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
          ]"
          style="transition-delay: 400ms"
        >
          {{ t("hero.subheadline") }}
        </p>

        <!-- CTAs -->
        <div
          :class="[
            'flex flex-wrap items-center gap-4 transition-all duration-1000',
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
          ]"
          style="transition-delay: 600ms"
        >
          <RouterLink
            to="/services"
            class="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500"
            style="background: linear-gradient(135deg, #0066cc, #0080ff)"
          >
            {{ t("hero.ctaPrimary") }}
            <svg
              class="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
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
            class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-500"
          >
            {{ t("hero.ctaSecondary") }}
          </RouterLink>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        :class="[
          'absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000',
          loaded ? 'opacity-60' : 'opacity-0',
        ]"
        style="transition-delay: 800ms"
      >
        <span
          class="text-white/50 text-xs uppercase tracking-widest font-medium"
          >{{ t("hero.scrollDown") }}</span
        >
        <svg
          class="w-5 h-8 text-white/50 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      <!-- Carousel indicators -->
      <div class="absolute bottom-10 right-10 flex items-center gap-2">
        <button
          v-for="(_, idx) in heroImages"
          :key="idx"
          @click="currentImageIndex = idx"
          :class="[
            'w-2.5 h-2.5 rounded-full transition-all duration-500',
            idx === currentImageIndex
              ? 'bg-white w-8'
              : 'bg-white/40 hover:bg-white/60',
          ]"
          :aria-label="`Go to slide ${idx + 1}`"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}
</style>
