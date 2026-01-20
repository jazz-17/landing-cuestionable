<template>
  <section class="relative py-12 md:py-18">
    <div class="container relative">
      <div class="max-w-[800px] mx-auto text-center">


        <h1
          class="text-5xl md:text-[44px] font-bold text-[var(--text-primary)] mb-4 leading-[1.1] tracking-tight animate-fade-in"
          style="animation-delay: 0.1s"
        >
          Cuando no sabes por dónde empezar, <br />
          <span class="text-[var(--primary)]"
            >pregúntale a alguien que ya lo hizo.</span
          >
        </h1>

        <p
          class="text-lg md:text-xl leading-relaxed text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto animate-fade-in"
          style="animation-delay: 0.2s"
        >
          Conecta con mentores reales y resuelve tus dudas con acompañamiento
          personalizado.
        </p>

        <div
          class="flex justify-center gap-4 flex-col sm:flex-row animate-fade-in"
          style="animation-delay: 0.3s"
        >
          <a
            :href="formUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--primary)] text-white no-underline rounded-full font-semibold text-base md:text-lg transition-all duration-500 hover:bg-[var(--primary-dark)] hover:shadow-lg hover:-translate-y-1"
          >
            <span>Solicitar mentoría</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <a
            href="#como-funciona"
            class="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[var(--text-primary)] no-underline rounded-full font-semibold text-base md:text-lg border border-[var(--border)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            Cómo funciona
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  formUrl: {
    type: String,
    required: true,
  },
});
</script>
