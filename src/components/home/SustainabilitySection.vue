<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const features = [
  {
    key: 1,
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>`,
    accentHex: "#1565B8",
    bgGradient: "from-blue-50 to-sky-50",
  },
  {
    key: 2,
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>`,
    accentHex: "#0EA5E9",
    bgGradient: "from-sky-50 to-cyan-50",
  },
  {
    key: 3,
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>`,
    accentHex: "#166534",
    bgGradient: "from-green-50 to-emerald-50",
  },
  {
    key: 4,
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>`,
    accentHex: "#14B8A6",
    bgGradient: "from-teal-50 to-green-50",
  },
];
</script>

<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-16 reveal-hidden">
        <div
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
          style="background: linear-gradient(135deg, #eff6ff, #f0fdf4)"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-brand-deep-blue"></span>
          <span
            class="text-xs font-semibold uppercase tracking-widest text-brand-deep-blue"
          >
            {{ t("sustainability.badge") }}
          </span>
        </div>
        <h2
          class="text-3xl sm:text-4xl font-black mb-4 leading-tight whitespace-pre-line text-gradient-brand"
          style="letter-spacing: -0.5px"
        >
          {{ t("sustainability.title") }}
        </h2>
        <p class="text-gray-500 text-base leading-relaxed">
          {{ t("sustainability.subtitle") }}
        </p>
      </div>

      <!-- Features grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div
          v-for="(feature, idx) in features"
          :key="feature.key"
          class="reveal-hidden group rounded-3xl p-6 border border-gray-100 bg-white shadow-sm card-hover transition-all duration-300"
          :style="{ transitionDelay: `${idx * 100}ms` }"
        >
          <!-- Icon -->
          <div
            class="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
            :style="`background: linear-gradient(135deg, ${feature.accentHex}18, ${feature.accentHex}08)`"
          >
            <svg
              class="w-6 h-6"
              :style="`color: ${feature.accentHex}`"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              v-html="feature.icon"
            ></svg>
          </div>

          <h3
            class="text-base font-bold text-gray-900 mb-2 group-hover:text-brand-deep-blue transition-colors"
          >
            {{ t(`sustainability.feature${feature.key}Title`) }}
          </h3>
          <p class="text-sm text-gray-500 leading-relaxed">
            {{ t(`sustainability.feature${feature.key}Desc`) }}
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center reveal-hidden">
        <RouterLink
          to="/about"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
          style="background: linear-gradient(135deg, #1565B8, #3BA640)"
        >
          {{ t("sustainability.cta") }}
          <svg
            class="w-4 h-4"
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
      </div>
    </div>
  </section>
</template>
