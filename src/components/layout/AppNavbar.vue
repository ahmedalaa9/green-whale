<template>
  <header
    :class="[
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      scrolled ? 'glass-nav shadow-sm py-3' : 'bg-transparent py-5',
    ]"
  >
    <nav
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4"
    >
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center flex-shrink-0 group">
        <img
          src="/logo-green-whale.png"
          alt="Green Whale"
          :class="[
            'w-auto transition-transform duration-300 group-hover:scale-105',
            scrolled ? ' h-14' : 'h-16',
          ]"
        />
      </RouterLink>

      <!-- Desktop nav links -->
      <ul class="hidden lg:flex items-center gap-1">
        <li v-for="link in navLinks" :key="link.to">
          <RouterLink
            :to="link.to"
            :class="[
              'relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200',
              scrolled
                ? 'text-gray-700 hover:text-brand-deep-blue hover:bg-blue-50'
                : 'text-white/85 hover:text-white hover:bg-white/10',
              route.path === link.to
                ? scrolled
                  ? 'text-brand-deep-blue bg-blue-50'
                  : 'text-white bg-white/15'
                : '',
            ]"
          >
            {{ t(link.name) }}
          </RouterLink>
        </li>
      </ul>

      <!-- Right actions -->
      <div class="hidden lg:flex items-center gap-3">
        <!-- Language toggle -->
        <button
          @click="toggleLocale"
          :class="[
            'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold border transition-all duration-200',
            scrolled
              ? 'border-gray-200 text-gray-600 hover:border-brand-deep-blue hover:text-brand-deep-blue hover:bg-blue-50'
              : 'border-white/30 text-white/80 hover:bg-white/10 hover:text-white',
          ]"
          :aria-label="`Switch to ${locale === 'en' ? 'Arabic' : 'English'}`"
        >
          <svg
            class="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
            />
          </svg>
          {{ locale === "en" ? "عربي" : "EN" }}
        </button>

        <!-- CTA button -->
        <RouterLink
          to="/contact"
          class="px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:scale-105"
          style="background: linear-gradient(135deg, #1565B8, #3BA640)"
        >
          {{ t("nav.contactCta") }}
        </RouterLink>
      </div>

      <!-- Mobile hamburger -->
      <button
        @click="mobileOpen = !mobileOpen"
        :class="[
          'lg:hidden p-2 rounded-lg transition-colors',
          scrolled
            ? 'text-gray-700 hover:bg-gray-100'
            : 'text-white hover:bg-white/10',
        ]"
        aria-label="Toggle menu"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            v-if="!mobileOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div
        v-if="mobileOpen"
        class="lg:hidden glass-nav border-t border-white/10 px-4 py-4"
      >
        <ul class="flex flex-col gap-1 mb-4">
          <li v-for="link in navLinks" :key="link.to">
            <RouterLink
              :to="link.to"
              @click="mobileOpen = false"
              class="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-brand-deep-blue transition-colors"
              :class="
                route.path === link.to ? 'bg-blue-50 text-brand-deep-blue' : ''
              "
            >
              {{ t(link.name) }}
            </RouterLink>
          </li>
        </ul>
        <div class="flex items-center gap-3 pt-3 border-t border-gray-100">
          <button
            @click="toggleLocale"
            class="flex-1 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:border-brand-deep-blue hover:text-brand-deep-blue transition-colors"
          >
            {{ locale === "en" ? "عربي" : "English" }}
          </button>
          <RouterLink
            to="/contact"
            @click="mobileOpen = false"
            class="flex-1 py-2 text-center rounded-xl text-sm font-semibold text-white"
            style="background: linear-gradient(135deg, #1565B8, #3BA640)"
          >
            {{ t("nav.contactCta") }}
          </RouterLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useLocale } from "../../composables/useLocale";

const { t } = useI18n();
const { locale, toggleLocale } = useLocale();
const route = useRoute();

const scrolled = ref(false);
const mobileOpen = ref(false);

function onScroll() {
  scrolled.value = window.scrollY > 40;
}

onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", onScroll));

const navLinks = [
  { name: "nav.home", to: "/" },
  { name: "nav.about", to: "/about" },
  { name: "nav.services", to: "/services" },
  { name: "nav.gallery", to: "/gallery" },
  { name: "nav.certificates", to: "/certificates" },
];
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
