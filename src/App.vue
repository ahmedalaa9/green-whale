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
        #1565b8 50%,
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

    <footer style="background: #0a1628" class="text-white">
      <!-- Top section -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <!-- Brand column -->
          <div class="lg:col-span-2">
            <div class="mb-5">
              <img
                src="/logo-green-whale.png"
                alt="Green Whale"
                class="h-14 w-auto"
              />
            </div>
            <p class="text-gray-400 text-sm leading-relaxed max-w-sm">
              {{ t("footer.tagline") }}
            </p>

            <!-- Partner brands badges -->
            <div class="flex flex-wrap gap-2 mt-5">
              <span
                v-for="brand in ['Alindair', 'Kabel Air', 'GreenPad']"
                :key="brand"
                class="px-3 py-1 rounded-full text-xs font-semibold border border-white/10 text-gray-300"
                style="background: rgba(255, 255, 255, 0.05)"
              >
                {{ brand }}
              </span>
            </div>
          </div>

          <!-- Quick links -->
          <div>
            <h3
              class="text-sm font-semibold text-white/90 uppercase tracking-widest mb-5"
            >
              {{ t("footer.quickLinks") }}
            </h3>
            <ul class="space-y-2.5">
              <li v-for="link in quickLinks" :key="link.to">
                <RouterLink
                  :to="link.to"
                  class="text-gray-400 text-sm hover:text-brand-fresh-green transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span
                    class="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-brand-fresh-green transition-colors"
                  ></span>
                  {{ t(link.label) }}
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- Contact info -->
          <div>
            <h3
              class="text-sm font-semibold text-white/90 uppercase tracking-widest mb-5"
            >
              {{ t("footer.contactInfo") }}
            </h3>
            <ul class="space-y-3.5">
              <li class="flex items-start gap-3">
                <svg
                  class="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-sky-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span class="text-gray-400 text-sm">{{
                  t("footer.address")
                }}</span>
              </li>
              <li class="flex items-center gap-3">
                <svg
                  class="w-4 h-4 flex-shrink-0 text-brand-sky-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  :href="`tel:${t('footer.phone')}`"
                  class="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {{ t("footer.phone") }}
                </a>
              </li>
              <li class="flex items-center gap-3">
                <svg
                  class="w-4 h-4 flex-shrink-0 text-brand-sky-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  :href="`mailto:${t('footer.email')}`"
                  class="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {{ t("footer.email") }}
                </a>
              </li>
            </ul>

            <!-- Social links -->
            <!-- <div class="mt-6">
            <p
              class="text-xs font-semibold text-white/50 uppercase tracking-widest mb-3"
            >
              {{ t("footer.followUs") }}
            </p>
            <div class="flex items-center gap-2">
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.href"
                :aria-label="social.name"
                class="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  v-html="social.icon"
                ></svg>
              </a>
            </div>
          </div> -->
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-white/8">
        <div
          class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2"
        >
          <p class="text-gray-500 text-xs">{{ t("footer.copyright") }}</p>
          <p class="text-gray-600 text-xs">{{ t("footer.madeWith") }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterView } from "vue-router";
import AppNavbar from "./components/layout/AppNavbar.vue";
import AppFooter from "./components/layout/AppFooter.vue";
import { useI18n } from "vue-i18n";

const splashVisible = ref(true);
const splashLeaving = ref(false);
const { t } = useI18n();

const quickLinks = [
  { label: "nav.home", to: "/" },
  { label: "nav.about", to: "/about" },
  { label: "nav.services", to: "/services" },
  { label: "nav.gallery", to: "/gallery" },
  { label: "nav.certificates", to: "/certificates" },
  { label: "nav.contact", to: "/contact" },
];

onMounted(() => {
  setTimeout(() => {
    splashLeaving.value = true;
    setTimeout(() => {
      splashVisible.value = false;
    }, 600);
  }, 2500);
});
</script>

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
