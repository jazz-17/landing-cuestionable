# Mentor Photos

Place mentor photos in this folder.

## Naming Convention

- Use lowercase filenames
- Use hyphens for spaces: `adrian-zamudio.jpg`
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

## Recommended Specs

- **Aspect Ratio:** 1:1 (square)
- **Minimum Size:** 400x400px
- **Recommended Size:** 800x800px
- **File Size:** Keep under 500KB for best performance

## Usage

Reference these images in `src/pages/index.astro`:

```javascript
import adrianImg from "@/assets/mentors/adrian-zamudio.jpg";

const mentors = [
  {
    name: "Adrian Zamudio",
    topic: "Marketing",
    availability: "Disponible",
    rating: 5,
    image: adrianImg.src, // ← Use imported image src
  },
];
```
