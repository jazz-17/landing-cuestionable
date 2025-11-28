<template>
  <Dialog :open="isOpen" @update:open="handleOpenChange">
    <DialogContent
      class="w-full h-full sm:h-auto sm:max-w-[700px] sm:max-h-[90vh] md:max-w-[60%] p-0 gap-0 overflow-hidden bg-white border-none shadow-2xl flex flex-col"
    >
      <!-- Header Redesign -->
      <div class="relative overflow-hidden bg-gradient-hero p-8 md:p-10">
        <!-- Decorative background elements -->
        <div
          class="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"
        ></div>
        <div
          class="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
        ></div>

        <div
          class="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          <div v-if="mentorImage" class="shrink-0">
            <img
              :src="mentorImageUrl"
              :alt="mentorName"
              class="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white/50 shadow-lg"
            />
          </div>

          <div class="space-y-2 flex-1">
            <div class="flex items-center gap-3 mb-1">
              <div
                class="inline-flex items-center px-3 py-1 bg-white/60 backdrop-blur-sm text-primary-dark text-xs font-bold uppercase tracking-wider rounded-full border border-white/50 shadow-sm"
              >
                {{ mentorTopic }}
              </div>
              <div
                class="flex items-center gap-1 bg-white/60 backdrop-blur-sm px-2 py-1 rounded-full border border-white/50 shadow-sm"
              >
                <Star class="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span class="text-xs font-bold text-slate-700"
                  >{{ mentorRating }}.0</span
                >
              </div>
            </div>

            <DialogTitle
              class="text-3xl md:text-4xl font-extrabold text-slate-900 font-manrope tracking-tight"
            >
              {{ mentorName }}
            </DialogTitle>
          </div>
        </div>
      </div>

      <div class="p-0 overflow-y-auto flex-1 sm:max-h-[70vh]">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <!-- Left Column: Bio & Help -->
          <div
            :class="[mentorReviewsImage ? 'lg:col-span-6 ' : 'lg:col-span-12']"
            class="p-6 md:p-8 space-y-8 border-b lg:border-b-0 lg:border-r border-slate-100"
          >
            <!-- Section 1: Description -->
            <div v-if="mentorDescription" class="space-y-3">
              <div class="flex items-center gap-2 text-primary">
                <User class="w-5 h-5" />
                <h4 class="text-lg font-bold text-slate-900">Sobre mí</h4>
              </div>
              <DialogDescription
                class="text-slate-600 leading-relaxed text-[15px]"
              >
                {{ mentorDescription }}
              </DialogDescription>
            </div>
            <DialogDescription v-else class="sr-only">
              Detalles del mentor
            </DialogDescription>

            <!-- Section 2: How I can help -->
            <div v-if="mentorHelpText" class="space-y-4">
              <div class="flex items-center gap-2 text-primary">
                <Sparkles class="w-5 h-5" />
                <h4 class="text-lg font-bold text-slate-900">
                  ¿En qué puedo ayudarte?
                </h4>
              </div>

              <div class="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <div
                  class="prose prose-sm prose-slate max-w-none [&_ul]:space-y-2 [&_ul]:list-none [&_ul]:pl-0 [&_li]:relative [&_li]:pl-6 [&_li]:text-slate-600 [&_li:before]:content-[''] [&_li:before]:absolute [&_li:before]:left-0 [&_li:before]:top-2 [&_li:before]:w-1.5 [&_li:before]:h-1.5 [&_li:before]:bg-primary [&_li:before]:rounded-full [&_strong]:text-slate-800 [&_strong]:font-bold"
                  v-html="mentorHelpText"
                ></div>
              </div>
            </div>
          </div>

          <!-- Right Column: Reviews -->
          <div
            v-if="mentorReviewsImage"
            class="lg:col-span-6 bg-slate-50/50 p-6 md:p-8 border-t lg:border-t-0 lg:border-l border-slate-100"
          >
            <div class="space-y-4">
              <div class="flex items-center gap-2 text-primary mb-1">
                <MessageSquareQuote class="w-5 h-5" />
                <h4 class="text-lg font-bold text-slate-900">
                  Lo que dicen de mí
                </h4>
              </div>

              <div class="relative group">
                <div
                  class="relative bg-white rounded-xl overflow-hidden border shadow-sm"
                >
                  <img
                    :src="reviewsImageUrl"
                    alt="Reseñas de LinkedIn"
                    loading="lazy"
                    class="w-full h-auto block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Actions -->
      <div
        class="p-4 md:p-6 border-t border-slate-100 bg-white flex justify-end gap-3"
      >
        <button
          @click="handleOpenChange(false)"
          class="px-5 py-2.5 rounded-xl text-slate-600 font-semibold hover:bg-slate-100 transition-colors text-sm cursor-pointer"
        >
          Cerrar
        </button>
        <!-- <a 
          href="https://forms.gle/JdC6fM1Fazotx6b6A" 
          target="_blank"
          class="px-6 py-2.5 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200 text-sm flex items-center gap-2"
        >
          <span>Agendar mentoría</span>
          <ArrowRight class="w-4 h-4" />
        </a> -->
      </div>
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
} from "@/components/ui/dialog";
import {
  User,
  Sparkles,
  MessageSquareQuote,
  Star,
  ArrowRight,
} from "lucide-vue-next";

const props = defineProps({
  isOpen: Boolean,
  mentorName: String,
  mentorTopic: String,
  mentorBio: String,
  mentorDescription: String,
  mentorHelpText: String,
  mentorReviewsImage: String,
  mentorImage: String,
  mentorRating: Number,
});

const emit = defineEmits(["close", "update:open"]);

const handleOpenChange = (open) => {
  emit("update:open", open);
  if (!open) {
    emit("close");
  }
};

const reviewsImageUrl = computed(() => {
  if (!props.mentorReviewsImage) return "";
  if (
    props.mentorReviewsImage.startsWith("/") ||
    props.mentorReviewsImage.startsWith("http")
  ) {
    return props.mentorReviewsImage;
  }
  return `${import.meta.env.BASE_URL}${props.mentorReviewsImage}`;
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
</script>
