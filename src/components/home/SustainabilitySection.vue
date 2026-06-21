<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const features = [
  {
    titleKey: "sustainability.feature1Title",
    descKey: "sustainability.feature1Desc",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>`,
    color: "#38BDF8",
    bg: "rgba(56,189,248,0.15)",
  },
  {
    titleKey: "sustainability.feature2Title",
    descKey: "sustainability.feature2Desc",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>`,
    color: "#4ADE80",
    bg: "rgba(74,222,128,0.15)",
  },
  {
    titleKey: "sustainability.feature3Title",
    descKey: "sustainability.feature3Desc",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>`,
    color: "#34D399",
    bg: "rgba(52,211,153,0.15)",
  },
  {
    titleKey: "sustainability.feature4Title",
    descKey: "sustainability.feature4Desc",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>`,
    color: "#60A5FA",
    bg: "rgba(96,165,250,0.15)",
  },
];
</script>

<template>
  <section class="py-32 relative overflow-hidden">
    <!-- Warm-to-cool gradient background -->
    <div
      class="absolute inset-0"
      style="
        background: linear-gradient(
          160deg,
          #1e1b4b 0%,
          #1d4ed8 25%,
          #0c4a6e 50%,
          #14532d 75%,
          #052e16 100%
        );
      "
    ></div>

    <!-- Warm ambient light from top -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div
        class="absolute top-0 start-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full opacity-20"
        style="
          background: radial-gradient(
            ellipse,
            rgba(251, 191, 36, 0.3),
            transparent 70%
          );
        "
      ></div>
      <div
        class="absolute bottom-[20%] end-[10%] w-[400px] h-[400px] rounded-full animate-pulse-soft"
        style="
          background: radial-gradient(
            circle,
            rgba(56, 189, 248, 0.1),
            transparent 70%
          );
          animation-delay: 1s;
        "
      ></div>
      <div
        class="absolute top-[40%] start-[5%] w-[350px] h-[350px] rounded-full animate-pulse-soft"
        style="
          background: radial-gradient(
            circle,
            rgba(74, 222, 128, 0.08),
            transparent 70%
          );
          animation-delay: 2s;
        "
      ></div>

      <!-- Subtle grid -->
      <div
        class="absolute inset-0 opacity-[0.03]"
        style="
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 80px 80px;
        "
      ></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-20 reveal-hidden">
        <div
          class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-6 border border-white/10"
          style="background: rgba(255, 255, 255, 0.06)"
        >
          <span class="w-2 h-2 rounded-full" style="background: #4ade80"></span>
          <span
            class="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60"
            >{{ t("sustainability.badge") }}</span
          >
        </div>
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight whitespace-pre-line"
          style="letter-spacing: -0.5px"
        >
          {{ t("sustainability.title") }}
        </h2>
        <p
          class="text-white/50 text-base lg:text-lg leading-relaxed"
          style="line-height: 1.85"
        >
          {{ t("sustainability.subtitle") }}
        </p>
      </div>

      <!-- Feature cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <div
          v-for="(feature, idx) in features"
          :key="feature.titleKey"
          class="reveal-hidden rounded-3xl p-8 border border-white/8 hover:border-white/15 transition-all duration-500 hover:-translate-y-2 group"
          :style="{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(16px)',
            transitionDelay: `${idx * 120}ms`,
          }"
        >
          <!-- Icon -->
          <div
            class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
            :style="{ background: feature.bg }"
          >
            <svg
              class="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              :style="{ color: feature.color }"
              v-html="feature.icon"
            ></svg>
          </div>

          <h3 class="text-base font-bold text-white mb-3">
            {{ t(feature.titleKey) }}
          </h3>
          <p
            class="text-sm text-white/45 leading-relaxed"
            style="line-height: 1.75"
          >
            {{ t(feature.descKey) }}
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center reveal-hidden">
        <RouterLink
          to="/about"
          class="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-semibold text-white border border-white/15 hover:bg-white/8 hover:border-white/25 transition-all duration-500 group"
        >
          {{ t("sustainability.cta") }}
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
      </div>
    </div>
  </section>
</template>
