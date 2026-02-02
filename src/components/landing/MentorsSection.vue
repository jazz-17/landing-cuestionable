<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto px-4"
  >
    <div
      v-for="(mentor, index) in mentors"
      :key="index"
      class="vue-reveal"
      :style="{ transitionDelay: `${index * 0.1}s` }"
      ref="mentorItems"
    >
      <MentorCard
        :name="mentor.name"
        :topic="mentor.topic"
        :availability="mentor.availability"
        :linkedin="mentor.linkedin"
        :image="mentor.image"
        :image-src-set="mentor.imageSrcSet"
        :image-width="mentor.imageWidth"
        :image-height="mentor.imageHeight"
        :bio="mentor.bio"
        :description="mentor.description"
        :help-text="mentor.helpText"
        :reviews-images="mentor.reviewsImages"
        :review-text="mentor.reviewText"
        button-text="Conocer más"
        @show-bio="openBioModal"
      />
    </div>
  </div>

  <MentorBioModal
    :is-open="isBioModalOpen"
    :mentor-name="selectedBio.name"
    :mentor-topic="selectedBio.topic"
    :mentor-linkedin="selectedBio.linkedin"
    :mentor-bio="selectedBio.bio"
    :mentor-description="selectedBio.description"
    :mentor-help-text="selectedBio.helpText"
    :mentor-reviews-images="selectedBio.reviewsImages"
    :mentor-review-text="selectedBio.reviewText"
    :mentor-image="selectedBio.image"
    :mentor-image-src-set="selectedBio.imageSrcSet"
    :mentor-image-width="selectedBio.imageWidth"
    :mentor-image-height="selectedBio.imageHeight"
    @close="closeBioModal"
  />
</template>

<script setup>
import { ref } from "vue";
import MentorCard from "./MentorCard.vue";
import MentorBioModal from "./MentorBioModal.vue";
import { useScrollReveal } from "@/composables/useScrollReveal";

defineProps({
  mentors: {
    type: Array,
    required: true,
  },
});

const mentorItems = ref([]);

useScrollReveal(mentorItems);

const isBioModalOpen = ref(false);

const selectedBio = ref({
  name: "",
  topic: "",
  linkedin: "",
  bio: "",
  description: "",
  helpText: null,
  reviewsImages: [],
  reviewText: null,
  image: "",
  imageSrcSet: "",
  imageWidth: null,
  imageHeight: null,
});

const openBioModal = (bioData) => {
  selectedBio.value = bioData;
  isBioModalOpen.value = true;
};

const closeBioModal = () => {
  isBioModalOpen.value = false;
};
</script>
