<template></template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const quickLinks = [
  { label: "nav.home", to: "/" },
  { label: "nav.about", to: "/about" },
  { label: "nav.services", to: "/services" },
  { label: "nav.gallery", to: "/gallery" },
  { label: "nav.certificates", to: "/certificates" },
  { label: "nav.contact", to: "/contact" },
];

// const socials = [
//   {
//     name: "LinkedIn",
//     href: "#",
//     icon: '<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>',
//   },
//   {
//     name: "Facebook",
//     href: "#",
//     icon: '<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>',
//   },
//   {
//     name: "Instagram",
//     href: "#",
//     icon: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
//   },
//   {
//     name: "WhatsApp",
//     href: "#",
//     icon: '<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>',
//   },
// ];
</script>
