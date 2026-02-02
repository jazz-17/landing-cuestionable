<template>
  <Dialog :open="isOpen" @update:open="handleOpenChange">
    <DialogContent class="p-0 focus:outline-0 sm:max-w-3xl md:max-w-4xl gap-0 max-h-[85vh] flex flex-col">
      <!-- Header with gradient -->
      <DialogHeader
        class="relative overflow-hidden bg-gradient-to-br from-[rgba(190,123,237,0.12)] via-[rgba(190,123,237,0.08)] to-[rgba(74,144,226,0.1)] py-3 px-4 shrink-0"
      >
        <!-- Subtle decorative circle -->
        <div
          class="absolute -top-16 -right-16 w-40 h-40 bg-[var(--primary)]/10 rounded-full blur-3xl pointer-events-none"
        ></div>

        <div class="relative flex flex-row items-center gap-4">
          <div v-if="mentorImage" class="shrink-0">
            <img
              :src="mentorImageUrl"
              :srcset="mentorImageSrcSet || undefined"
              :sizes="mentorImageSrcSet ? mentorImageSizes : undefined"
              :width="mentorImageWidth ?? undefined"
              :height="mentorImageHeight ?? undefined"
              :alt="`Foto de ${mentorName}`"
              decoding="async"
              class="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover ring-2 ring-white/60 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            />
          </div>

          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1">
              <div
                class="inline-flex items-center px-2 py-0.5 bg-white/80 backdrop-blur-sm text-[var(--primary-dark)] text-[10px] font-semibold uppercase tracking-wider rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
              >
                {{ mentorTopic }}
              </div>
            </div>

            <div class="flex items-center gap-2">
              <DialogTitle
                class="text-xl md:text-2xl font-bold text-[var(--text-primary)] tracking-tight truncate"
              >
                {{ mentorName }}
              </DialogTitle>
              <a
                v-if="mentorLinkedin"
                :href="mentorLinkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="shrink-0 text-[#0A66C2] hover:text-[#004182] transition-colors duration-200"
                :aria-label="`Perfil de LinkedIn de ${mentorName}`"
              >
                <svg
                  class="w-5 h-5 md:w-6 md:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </DialogHeader>

      <div class="p-0 overflow-y-auto flex-1 min-h-0">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <!-- Left Column: Bio & Help -->
          <div
            :class="[hasReviews ? 'lg:col-span-6 ' : 'lg:col-span-12']"
            class="p-6 md:p-8 space-y-8"
          >
            <!-- Section 1: Description -->
            <div v-if="mentorDescription" class="space-y-2">
              <h4
                class="text-xs font-semibold text-[var(--primary)] uppercase tracking-wider"
              >
                Sobre mí
              </h4>
              <DialogDescription
                class="text-[var(--text-secondary)] leading-[1.7] text-[15px]"
              >
                {{ mentorDescription }}
              </DialogDescription>
            </div>
            <DialogDescription v-else class="sr-only">
              Detalles del mentor
            </DialogDescription>

            <!-- Section 2: How I can help -->
            <div v-if="mentorHelpText" class="space-y-3">
              <h4
                class="text-xs font-semibold text-[var(--primary)] uppercase tracking-wider"
              >
                ¿En qué puedo ayudarte?
              </h4>

              <div
                class="bg-[var(--bg-secondary)]/60 rounded-xl p-5 md:p-6 space-y-4"
              >
                <!-- Intro text -->
                <p
                  v-if="mentorHelpText.intro"
                  class="text-[14px] leading-[1.8] text-[var(--text-secondary)]"
                >
                  {{ mentorHelpText.intro }}
                </p>

                <!-- Simple items list -->
                <ul
                  v-if="mentorHelpText.items?.length"
                  class="space-y-2.5 list-none pl-0"
                >
                  <li
                    v-for="(item, idx) in mentorHelpText.items"
                    :key="idx"
                    class="relative pl-5 text-[14px] leading-[1.8] text-[var(--text-secondary)] before:content-[''] before:absolute before:left-0 before:top-[0.55rem] before:w-1.5 before:h-1.5 before:bg-[var(--primary)] before:rounded-full"
                  >
                    {{ item }}
                  </li>
                </ul>

                <!-- Project sections (for mentors like Nicole) -->
                <div v-if="mentorHelpText.sections?.length" class="space-y-4">
                  <div
                    v-for="(section, idx) in mentorHelpText.sections"
                    :key="idx"
                  >
                    <h5
                      class="text-[var(--text-primary)] font-semibold text-[14px] mb-2"
                    >
                      {{ section.title }}
                    </h5>
                    <ul class="space-y-2 list-none pl-0">
                      <li
                        class="relative pl-5 text-[14px] leading-[1.8] text-[var(--text-secondary)] before:content-[''] before:absolute before:left-0 before:top-[0.55rem] before:w-1.5 before:h-1.5 before:bg-[var(--primary)] before:rounded-full"
                      >
                        {{ section.description }}
                      </li>
                      <li
                        class="relative pl-5 text-[14px] leading-[1.8] text-[var(--text-secondary)] before:content-[''] before:absolute before:left-0 before:top-[0.55rem] before:w-1.5 before:h-1.5 before:bg-[var(--primary)] before:rounded-full"
                      >
                        Herramientas: {{ section.tools.join(" · ") }}
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Outro text -->
                <p
                  v-if="mentorHelpText.outro"
                  class="text-[14px] leading-[1.8] text-[var(--text-secondary)] pt-2 border-t border-[var(--border)]/50"
                >
                  {{ mentorHelpText.outro }}
                </p>
              </div>
            </div>
          </div>

          <!-- Right Column: Reviews -->
          <div
            v-if="hasReviews"
            class="lg:col-span-6 bg-[var(--bg-secondary)]/40 p-6 md:p-8"
          >
            <div class="space-y-3">
              <h4
                class="text-xs font-semibold text-[var(--primary)] uppercase tracking-wider"
              >
                Lo que dicen de mí
              </h4>

              <!-- Image reviews -->
              <div
                v-for="(review, idx) in reviewsImageUrls"
                :key="idx"
                class="bg-white rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
              >
                <img
                  :src="review.src"
                  :srcset="review.srcSet || undefined"
                  :sizes="review.srcSet ? reviewImageSizes : undefined"
                  :width="review.width ?? undefined"
                  :height="review.height ?? undefined"
                  :alt="review.alt || `Reseña de ${mentorName}`"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-auto block"
                />
              </div>

              <!-- Text review -->
              <div
                v-if="mentorReviewText"
                class="bg-white rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
              >
                <div class="flex gap-3">
                  <div class="shrink-0 text-[var(--primary)]/30">
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                      />
                    </svg>
                  </div>
                  <div class="space-y-3">
                    <p
                      class="text-[14px] leading-[1.7] text-[var(--text-secondary)] italic"
                    >
                      {{ mentorReviewText.quote }}
                    </p>
                    <div class="flex items-center gap-2">
                      <div
                        class="w-8 h-8 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center text-xs font-semibold text-[var(--primary)]"
                      >
                        {{
                          mentorReviewText.author
                            ?.split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)
                        }}
                      </div>
                      <div>
                        <p
                          class="text-sm font-semibold text-[var(--text-primary)]"
                        >
                          {{ mentorReviewText.author }}
                        </p>
                        <p class="text-xs text-[var(--text-tertiary)]">
                          {{ mentorReviewText.role }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Actions -->
      <DialogFooter class="py-3 px-4 shrink-0 border-t border-[var(--border)]/30">
        <Button
          @click="handleOpenChange(false)"
          variant="outline"
          class="border-none cursor-pointer hover:bg-transparent"
        >
          Cerrar
        </Button>
        <!-- <a 
          href="https://forms.gle/JdC6fM1Fazotx6b6A" 
          target="_blank"
          class="px-6 py-2.5 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200 text-sm flex items-center gap-2"
        >
          <span>Agendar mentoría</span>
          <ArrowRight class="w-4 h-4" />
        </a> -->
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup>
import { computed } from "vue";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { User, Sparkles, MessageSquareQuote } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

const props = defineProps({
  isOpen: Boolean,
  mentorName: String,
  mentorTopic: String,
  mentorLinkedin: {
    type: String,
    default: "",
  },
  mentorBio: String,
  mentorDescription: String,
  mentorHelpText: Object,
  mentorReviewsImages: {
    type: Array,
    default: () => [],
  },
  mentorReviewText: Object,
  mentorImage: String,
  mentorImageSrcSet: {
    type: String,
    default: "",
  },
  mentorImageWidth: {
    type: [Number, String],
    default: null,
  },
  mentorImageHeight: {
    type: [Number, String],
    default: null,
  },
});

const hasReviews = computed(
  () => props.mentorReviewsImages?.length > 0 || props.mentorReviewText,
);

const emit = defineEmits(["close", "update:open"]);

const handleOpenChange = (open) => {
  emit("update:open", open);
  if (!open) {
    emit("close");
  }
};

const reviewsImageUrls = computed(() => {
  if (!props.mentorReviewsImages?.length) return [];
  return props.mentorReviewsImages.map((img) => {
    const rawSrc = typeof img === "string" ? img : img?.src;
    const src =
      rawSrc && (rawSrc.startsWith("/") || rawSrc.startsWith("http"))
        ? rawSrc
        : `${import.meta.env.BASE_URL}${rawSrc}`;

    return {
      src,
      srcSet: typeof img === "string" ? "" : img?.srcSet || "",
      width: typeof img === "string" ? null : (img?.width ?? null),
      height: typeof img === "string" ? null : (img?.height ?? null),
      alt: typeof img === "string" ? "" : img?.alt || "",
    };
  });
});

const mentorImageUrl = computed(() => {
  if (!props.mentorImage) return "";
  if (
    props.mentorImage.startsWith("/") ||
    props.mentorImage.startsWith("http")
  ) {
    return props.mentorImage;
  }
  return `${import.meta.env.BASE_URL}${props.mentorImage}`;
});

const mentorImageSizes = "64px";
const reviewImageSizes = "(min-width: 1024px) 420px, 90vw";
</script>
