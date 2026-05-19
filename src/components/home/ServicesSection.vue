<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const services = [
  {
    key: "industrial",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>`,
    image:
      "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
    accent: "from-blue-600 to-blue-400",
    accentHex: "#1D4ED8",
  },
  {
    key: "commercial",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>`,
    image:
      "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
    accent: "from-sky-500 to-cyan-400",
    accentHex: "#0EA5E9",
  },
  {
    key: "agricultural",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>`,
    image:
      "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
    accent: "from-green-600 to-emerald-400",
    accentHex: "#166534",
  },
  {
    key: "residential",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>`,
    image:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
    accent: "from-teal-500 to-green-400",
    accentHex: "#14B8A6",
  },
];
</script>

<template>
  <section
    class="py-24 overflow-hidden"
    style="background: linear-gradient(180deg, #f8faff 0%, #f0fdf4 100%)"
  >
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
            >{{ t("services.badge") }}</span
          >
        </div>
        <h2
          class="text-3xl sm:text-4xl font-black text-gray-900 mb-4 leading-tight"
          style="letter-spacing: -0.5px"
        >
          {{ t("services.title") }}
        </h2>
        <p class="text-gray-500 text-base leading-relaxed">
          {{ t("services.subtitle") }}
        </p>
      </div>

      <!-- Cards grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <article
          v-for="(service, idx) in services"
          :key="service.key"
          class="reveal-hidden group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 card-hover flex flex-col"
          :style="{ transitionDelay: `${idx * 100}ms` }"
        >
          <!-- Image -->
          <div class="relative h-44 overflow-hidden">
            <img
              :src="service.image"
              :alt="t(`services.${service.key}.title`)"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 opacity-60 transition-opacity duration-300 group-hover:opacity-40"
              :style="`background: linear-gradient(135deg, ${service.accentHex}cc, transparent)`"
            ></div>

            <!-- Icon badge -->
            <div
              class="absolute top-4 start-4 w-10 h-10 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30"
            >
              <svg
                class="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                v-html="service.icon"
              ></svg>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6 flex flex-col flex-1">
            <h3
              class="text-base font-bold text-gray-900 mb-2 group-hover:text-brand-deep-blue transition-colors"
            >
              {{ t(`services.${service.key}.title`) }}
            </h3>
            <p class="text-sm text-gray-500 leading-relaxed flex-1">
              {{ t(`services.${service.key}.desc`) }}
            </p>

            <!-- CTA link -->
            <RouterLink
              to="/services"
              class="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold transition-all duration-200 group-hover:gap-2.5"
              :style="`color: ${service.accentHex}`"
            >
              {{ t("services.learnMore") }}
              <svg
                class="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </RouterLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
