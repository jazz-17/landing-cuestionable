<template>
  <Dialog :open="isOpen" @update:open="handleOpenChange">
    <DialogContent class="sm:max-w-[500px] p-0 gap-0 overflow-hidden">
      <DialogHeader class="p-6 md:p-8 pb-5 md:pb-6 text-center border-b">
        <div v-if="mentorImage" class="w-[100px] h-[100px] rounded-full mx-auto mb-5 overflow-hidden border-4 border-primary/10">
          <img :src="imageUrl" :alt="mentorName" class="w-full h-full object-cover" />
        </div>
        <div v-else class="w-[100px] h-[100px] rounded-full mx-auto mb-5 bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-4xl font-extrabold text-primary-foreground font-manrope border-4 border-primary/10">
          {{ initials }}
        </div>

        <div class="space-y-3">
          <DialogTitle class="text-2xl md:text-[28px] font-bold text-foreground font-manrope tracking-tight text-center">
            {{ mentorName }}
          </DialogTitle>
          
          <div class="flex justify-center">
            <div class="inline-flex items-center px-4 py-1.5 bg-primary/5 text-primary text-sm font-semibold rounded-lg border border-primary/10">
              {{ mentorTopic }}
            </div>
          </div>

          <div class="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <span class="text-amber-400 text-base tracking-[2px]">{{ starsDisplay }}</span>
            <span>{{ mentorRating }}.0</span>
          </div>
        </div>
      </DialogHeader>

      <div class="p-6 md:p-8">
        <DialogDescription class="text-base leading-relaxed text-muted-foreground">
          {{ mentorBio }}
        </DialogDescription>
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup>
import { computed } from 'vue';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const props = defineProps({
  isOpen: Boolean,
  mentorName: String,
  mentorTopic: String,
  mentorBio: String,
  mentorImage: String,
  mentorRating: Number
});

const emit = defineEmits(['close', 'update:open']);

const handleOpenChange = (open) => {
  emit('update:open', open);
  if (!open) {
    emit('close');
  }
};

const imageUrl = computed(() => {
  if (!props.mentorImage) return '';
  if (props.mentorImage.startsWith('http://') || props.mentorImage.startsWith('https://')) {
    return props.mentorImage;
  }
  return `${import.meta.env.BASE_URL}${props.mentorImage}`;
});

const initials = computed(() => {
  if (!props.mentorName) return '';
  return props.mentorName
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
});

const starsDisplay = computed(() => {
  return '★'.repeat(props.mentorRating || 0) + '☆'.repeat(5 - (props.mentorRating || 0));
});
</script>
