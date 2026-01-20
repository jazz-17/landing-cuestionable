<template>
  <div class="max-w-[700px] mx-auto mb-8 flex flex-col gap-2">
    <Accordion type="single" collapsible class="w-full flex flex-col gap-2">
      <AccordionItem
        v-for="(faq, index) in faqs"
        :key="index"
        :value="`item-${index}`"
        class="bg-white rounded-xl overflow-hidden transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] data-[state=open]:shadow-[0_4px_16px_rgba(0,0,0,0.08)] vue-reveal"
        :style="{ transitionDelay: `${index * 0.1}s` }"
        ref="accordionItems"
      >
        <AccordionTrigger
          class="px-5 md:px-6 py-4 md:py-5 hover:no-underline group"
        >
          <span
            class="text-base md:text-[17px] font-medium text-[var(--text-primary)] text-left leading-relaxed tracking-[-0.01em] group-hover:text-[var(--primary-dark)] transition-colors duration-200"
            >{{ faq.question }}</span
          >
        </AccordionTrigger>
        <AccordionContent
          class="px-5 md:px-6 pb-5 md:pb-6 text-[15px] md:text-base leading-[1.7] text-[var(--text-secondary)]"
        >
          {{ faq.answer }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/composables/useScrollReveal";

defineProps({
  faqs: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const accordionItems = ref([]);

useScrollReveal(accordionItems);
</script>
