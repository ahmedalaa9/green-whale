<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const stats = [
  { value: "about.stat1Value", label: "about.stat1Label" },
  { value: "about.stat2Value", label: "about.stat2Label" },
  { value: "about.stat3Value", label: "about.stat3Label" },
];
</script>

<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Image -->
        <div class="reveal-hidden relative order-last lg:order-first">
          <div
            class="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[560px]"
          >
            <img
              src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=900&q=80"
              alt="Industrial cooling system"
              class="w-full h-full object-cover"
            />
            <!-- Overlay gradient -->
            <div
              class="absolute inset-0"
              style="
                background: linear-gradient(
                  135deg,
                  rgba(29, 78, 216, 0.2),
                  rgba(22, 101, 52, 0.2)
                );
              "
            ></div>
          </div>

          <!-- Floating stat card -->
          <div
            class="absolute -bottom-6 -end-6 glass-nav rounded-2xl p-5 shadow-xl border border-white/50"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center"
                style="background: linear-gradient(135deg, #166534, #4ade80)"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p class="text-xl font-black text-gray-900">500+</p>
                <p class="text-xs text-gray-500">Projects Completed</p>
              </div>
            </div>
          </div>

          <!-- Decorative element -->
          <div
            class="absolute -top-4 -start-4 w-24 h-24 rounded-2xl -z-10 opacity-60"
            style="background: linear-gradient(135deg, #dbeafe, #dcfce7)"
          ></div>
        </div>

        <!-- Right: Content -->
        <div class="reveal-hidden">
          <!-- Badge -->
          <div
            class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
            style="background: linear-gradient(135deg, #eff6ff, #f0fdf4)"
          >
            <span
              class="w-1.5 h-1.5 rounded-full"
              style="background: #1d4ed8"
            ></span>
            <span
              class="text-xs font-semibold uppercase tracking-widest text-brand-deep-blue"
            >
              {{ t("about.badge") }}
            </span>
          </div>

          <h2
            class="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight"
            style="letter-spacing: -0.5px"
          >
            {{ t("about.title") }}
          </h2>

          <p class="text-gray-500 leading-relaxed mb-10 text-base">
            {{ t("about.body") }}
          </p>

          <!-- Stats row -->
          <div
            class="grid grid-cols-3 gap-6 mb-10 pb-10 border-b border-gray-100"
          >
            <div v-for="stat in stats" :key="stat.value" class="text-center">
              <p
                class="text-3xl font-black text-gradient-blue leading-none mb-1"
              >
                {{ t(stat.value) }}
              </p>
              <p class="text-xs text-gray-500 font-medium">
                {{ t(stat.label) }}
              </p>
            </div>
          </div>

          <RouterLink
            to="/about"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
            style="background: linear-gradient(135deg, #1d4ed8, #166534)"
          >
            {{ t("about.learnMore") }}
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
    </div>
  </section>
</template>
