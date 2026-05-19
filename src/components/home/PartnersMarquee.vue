<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const partners = [
  { name: "Alindair", tagline: "Turkish Excellence" },
  { name: "Kabel Air", tagline: "Premium Airflow" },
  { name: "GreenPad", tagline: "Eco Innovation" },
  { name: "Alindair", tagline: "Turkish Excellence" },
  { name: "Kabel Air", tagline: "Premium Airflow" },
  { name: "GreenPad", tagline: "Eco Innovation" },
];
</script>

<template>
  <section class="py-14 bg-white border-y border-gray-100 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
      <p
        class="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400"
      >
        {{ t("partners.title") }}
      </p>
    </div>

    <!-- Marquee track -->
    <div class="relative overflow-hidden">
      <!-- Fade edges -->
      <div
        class="absolute start-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style="background: linear-gradient(to right, white, transparent)"
      ></div>
      <div
        class="absolute end-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style="background: linear-gradient(to left, white, transparent)"
      ></div>

      <!-- Scrolling content — doubled for seamless loop -->
      <div
        class="flex items-center gap-0 animate-marquee whitespace-nowrap"
        style="width: max-content"
      >
        <template v-for="n in 2" :key="n">
          <div
            v-for="(partner, idx) in partners"
            :key="`${n}-${idx}`"
            class="inline-flex items-center gap-4 mx-10"
          >
            <!-- Brand card -->
            <div
              class="flex items-center gap-3 px-6 py-3 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-blue-50 hover:border-blue-100 transition-colors duration-300 group cursor-default select-none"
            >
              <!-- Icon circle -->
              <div
                class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style="background: linear-gradient(135deg, #1565B8, #3BA640)"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p
                  class="text-sm font-bold text-gray-800 group-hover:text-brand-deep-blue transition-colors"
                >
                  {{ partner.name }}
                </p>
                <p class="text-xs text-gray-400">{{ partner.tagline }}</p>
              </div>
            </div>

            <!-- Separator dot -->
            <div
              class="w-1.5 h-1.5 rounded-full bg-gray-200 mx-2 flex-shrink-0"
            ></div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
