<template>
  <section
    id="como-funciona"
    class="process relative py-20 md:py-24 bg-[var(--bg-secondary)]"
  >
    <div class="container">
      <div class="section-header vue-reveal" ref="headerRef">
        <div class="section-badge">Proceso</div>
        <h2 class="section-title">Cómo funciona</h2>
      </div>

      <div class="max-w-[800px] mx-auto flex flex-col gap-6">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="vue-reveal"
          :style="{ transitionDelay: `${index * 0.1}s` }"
          ref="stepRefs"
        >
          <StepCard
            :number="step.number"
            :title="step.title"
            :description="step.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import StepCard from "@/components/StepCard.vue";
import { useScrollReveal } from "@/composables/useScrollReveal";

defineProps({
  steps: {
    type: Array,
    required: true,
  },
});

const headerRef = ref(null);
const stepRefs = ref([]);

useScrollReveal(headerRef);
useScrollReveal(stepRefs);
</script>
