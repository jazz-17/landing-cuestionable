<template>
  <div
    class="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 max-w-[1000px] mx-auto"
  >
    <div
      v-for="(mentor, index) in mentors"
      :key="index"
      class="reveal-on-scroll"
      :style="{ transitionDelay: `${index * 0.1}s` }"
    >
      <MentorCard
        :name="mentor.name"
        :topic="mentor.topic"
        :availability="mentor.availability"
        :rating="mentor.rating"
        :image="mentor.image"
        :bio="mentor.bio"
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
    :mentor-image="selectedBio.image"
    :mentor-rating="selectedBio.rating"
    @close="closeBioModal"
  />
</template>

<script setup>
import { ref } from "vue";
import MentorCard from "./MentorCard.vue";
import MentorBioModal from "./MentorBioModal.vue";

defineProps({
  mentors: {
    type: Array,
    required: true,
  },
});

const isBioModalOpen = ref(false);

const selectedBio = ref({
  name: "",
  topic: "",
  bio: "",
  image: "",
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
