<template>
  <div
    class="bg-white border border-[var(--border)] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full hover:shadow-lg hover:-translate-y-1 group"
  >
    <div
      class="relative w-full aspect-[4/3] overflow-hidden bg-[var(--bg-secondary)]"
    >
      <img
        v-if="image"
        :src="imageUrl"
        :srcset="imageSrcSet || undefined"
        :sizes="imageSrcSet ? imageSizes : undefined"
        :width="imageWidth ?? undefined"
        :height="imageHeight ?? undefined"
        :alt="`Foto de ${name}`"
        loading="lazy"
        decoding="async"
        class="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
      />
      <div
        v-else
        class="w-full h-full flex items-center justify-center text-[64px] font-extrabold text-[var(--primary)] font-[Manrope,sans-serif] opacity-50"
      >
        {{ initials }}
      </div>
      <div
        :class="[
          'absolute bottom-3 right-3 w-4 h-4 rounded-full border-[2px] border-white shadow-sm',
          availabilityClass === 'available' ? 'bg-emerald-500' : 'bg-slate-400',
        ]"
        :title="availability"
        aria-hidden="true"
      ></div>
      <span class="sr-only">{{ availability }}</span>
    </div>

    <div class="p-5 lg:p-6 flex flex-col gap-4 flex-1 justify-between">
      <div class="flex flex-col gap-2">
        <div class="flex gap-2 justify-between items-start">
          <h3
            class="text-xl font-bold text-[var(--text-primary)] m-0 tracking-tight flex-1"
          >
            {{ name }}
          </h3>
          <div
            class="flex justify-center items-center px-3 py-1 bg-brand-bg-secondary text-[var(--primary-dark)] text-sm font-semibold rounded-full text-nowrap"
          >
            {{ topic }}
          </div>
        </div>

        <div class="flex items-center justify-end gap-3">
          <div
            class="text-xs font-semibold"
            :class="
              availabilityClass === 'available'
                ? 'text-emerald-600'
                : 'text-[var(--text-tertiary)]'
            "
          >
            {{ availability }}
          </div>
        </div>

        <p
          v-if="bio"
          class="text-[14px] leading-[1.7] text-[var(--text-secondary)] m-0"
          style="
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          "
        >
          {{ bio }}
        </p>
      </div>

      <button
        type="button"
        class="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[var(--primary)] text-white rounded-xl text-sm font-semibold cursor-pointer transition-all duration-200 hover:bg-[var(--primary-dark)] hover:shadow-md active:translate-y-[1px]"
        @click="showBioModal"
      >
        <span>{{ buttonText }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  availability: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  imageSrcSet: {
    type: String,
    default: "",
  },
  imageWidth: {
    type: [Number, String],
    default: null,
  },
  imageHeight: {
    type: [Number, String],
    default: null,
  },
  bio: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  helpText: {
    type: Object,
    default: null,
  },
  reviewsImages: {
    type: Array,
    default: () => [],
  },
  reviewText: {
    type: Object,
    default: null,
  },
  buttonText: {
    type: String,
    default: "Conocer más",
  },
});

const emit = defineEmits(["showBio"]);

const showBioModal = () => {
  emit("showBio", {
    name: props.name,
    topic: props.topic,
    bio: props.bio,
    description: props.description,
    helpText: props.helpText,
    reviewsImages: props.reviewsImages,
    reviewText: props.reviewText,
    image: props.image,
    imageSrcSet: props.imageSrcSet,
    imageWidth: props.imageWidth,
    imageHeight: props.imageHeight,
  });
};

const imageUrl = computed(() => {
  if (!props.image) return "";
  if (props.image.startsWith("/") || props.image.startsWith("http")) {
    return props.image;
  }
  return `${import.meta.env.BASE_URL}${props.image}`;
});

const imageSizes = "(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw";

const initials = computed(() => {
  return props.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
});

const availabilityClass = computed(() => {
  return props.availability.toLowerCase() === "disponible"
    ? "available"
    : "unavailable";
});
</script>
