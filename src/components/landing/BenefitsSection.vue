<template>
  <section class="benefits relative py-20 md:py-24 bg-white overflow-hidden">
    <div class="container">
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1000px] mx-auto"
      >
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          class="text-center px-6 py-8 relative z-[1] reveal-on-scroll"
          :style="{ transitionDelay: `${(index + 1) * 0.1}s` }"
        >
          <div
            class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[rgba(158,191,166,0.1)] flex items-center justify-center text-[var(--primary)]"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              v-html="benefit.icon"
            ></svg>
          </div>
          <h3 class="text-xl font-bold text-[var(--text-primary)] mb-3">
            {{ benefit.title }}
          </h3>
          <p class="text-[var(--text-secondary)] leading-relaxed">
            {{ benefit.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const benefits = [
  {
    title: "Sesiones personalizadas",
    description:
      "60 minutos completamente enfocados en tus objetivos y necesidades específicas.",
    icon: '<path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />',
  },
  {
    title: "Horarios flexibles",
    description:
      "Agenda tu sesión en el momento que mejor te convenga, sin complicaciones.",
    icon: '<circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />',
  },
  {
    title: "Resultados medibles",
    description:
      "Seguimiento claro de tu progreso y herramientas prácticas para tu crecimiento.",
    icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />',
  },
];
</script>
