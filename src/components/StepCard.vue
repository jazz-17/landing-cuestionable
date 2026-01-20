<template>
  <div
    class="flex flex-row gap-4 md:gap-5 p-4 md:p-5 bg-white rounded-xl transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
  >
    <div
      class="shrink-0 w-10 md:w-11 h-10 md:h-11 flex items-center justify-center rounded-lg bg-[var(--bg-secondary)] text-[var(--primary)] text-lg md:text-xl font-semibold"
    >
      {{ number }}
    </div>
    <div class="flex-1 pt-0.5">
      <h3
        class="text-base md:text-lg font-semibold text-[var(--text-primary)] mb-1 tracking-[-0.01em]"
      >
        {{ title }}
      </h3>
      <p
        class="text-[14px] md:text-[15px] leading-relaxed text-[var(--text-secondary)] m-0"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  number: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
