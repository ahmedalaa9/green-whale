<script setup lang="ts">
import HeroSection from "../components/home/HeroSection.vue";
import PartnersMarquee from "../components/home/PartnersMarquee.vue";
import AboutSection from "../components/home/AboutSection.vue";
import ServicesSection from "../components/home/ServicesSection.vue";
import SustainabilitySection from "../components/home/SustainabilitySection.vue";
import { useScrollReveal } from "../composables/useScrollReveal";

useScrollReveal();
</script>

<template>
  <div>
    <HeroSection />
    <PartnersMarquee />
    <AboutSection />
    <ServicesSection />
    <SustainabilitySection />
  </div>
</template>
