<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
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
        :rating="mentor.rating"
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
    :mentor-bio="selectedBio.bio"
    :mentor-description="selectedBio.description"
    :mentor-help-text="selectedBio.helpText"
    :mentor-reviews-images="selectedBio.reviewsImages"
    :mentor-review-text="selectedBio.reviewText"
    :mentor-image="selectedBio.image"
    :mentor-image-src-set="selectedBio.imageSrcSet"
    :mentor-image-width="selectedBio.imageWidth"
    :mentor-image-height="selectedBio.imageHeight"
    :mentor-rating="selectedBio.rating"
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
  bio: "",
  description: "",
  helpText: null,
  reviewsImages: [],
  reviewText: null,
  image: "",
  imageSrcSet: "",
  imageWidth: null,
  imageHeight: null,
  rating: 0,
});

const openBioModal = (bioData) => {
  selectedBio.value = bioData;
  isBioModalOpen.value = true;
};

const closeBioModal = () => {
  isBioModalOpen.value = false;
};
</script>
