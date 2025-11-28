<template>
  <Dialog :open="isOpen" @update:open="handleOpenChange">
    <DialogContent class="w-full sm:max-w-5xl p-0 bg-transparent border-none shadow-none" :show-close-button="false">
      <DialogClose class="absolute -top-[50px] right-0 md:right-1/2 md:translate-x-1/2 md:-top-[60px] w-11 h-11 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-lg text-white cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-white/20 hover:border-white/60 hover:scale-110 z-50" aria-label="Cerrar">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6L18 18" stroke-linecap="round"/>
        </svg>
      </DialogClose>

      <div class="w-full aspect-video bg-black rounded-xl md:rounded-lg overflow-hidden">
        <iframe
          v-if="videoId"
          width="100%"
          height="100%"
          :src="`https://www.youtube.com/embed/${videoId}?autoplay=1`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="w-full h-full border-none"
        ></iframe>
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup>
import {
  Dialog,
  DialogContent,
  DialogClose
} from '@/components/ui/dialog';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  videoId: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['close', 'update:open']);

const handleOpenChange = (open) => {
  emit('update:open', open);
  if (!open) {
    emit('close');
  }
};
</script>
