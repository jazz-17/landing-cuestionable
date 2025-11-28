import { onMounted, onUnmounted } from 'vue';

export function useScrollReveal(elementsRef, options = {}) {
    const defaultOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
        ...options
    };

    let observer = null;

    onMounted(() => {
        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, defaultOptions);

        if (elementsRef.value) {
            if (Array.isArray(elementsRef.value)) {
                elementsRef.value.forEach((item) => {
                    const el = item?.$el || item;
                    if (el instanceof Element) {
                        observer.observe(el);
                    }
                });
            } else {
                const el = elementsRef.value?.$el || elementsRef.value;
                if (el instanceof Element) {
                    observer.observe(el);
                }
            }
        }
    });

    onUnmounted(() => {
        if (observer) {
            observer.disconnect();
        }
    });
}
