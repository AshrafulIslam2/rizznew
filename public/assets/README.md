# Assets Folder

This folder contains all static media files (images and videos) for the Rizz Leather website.

## Structure

```
public/assets/
├── images/     # All image files (.jpg, .png, .webp, .svg, etc.)
└── videos/     # All video files (.mp4, .webm, .mov, etc.)
```

## Usage

### In React/Next.js Components

#### Images
```tsx
import Image from 'next/image';

<Image 
  src="/assets/images/your-image.jpg" 
  alt="Description"
  width={800}
  height={600}
/>
```

#### Background Images (CSS)
```tsx
<div style={{ backgroundImage: `url('/assets/images/hero.jpg')` }} />
```

#### Videos
```tsx
<video controls width="100%">
  <source src="/assets/videos/product-demo.mp4" type="video/mp4" />
  Your browser doesn't support HTML5 video.
</video>
```

## Adding Files

1. Drop image files into `public/assets/images/`
2. Drop video files into `public/assets/videos/`
3. Reference them using the `/assets/...` path in your components

## File Size Tips

- **Images**: Optimize before uploading (use tools like TinyPNG, ImageOptim)
- **Videos**: Use MP4 format for best browser support
- **Responsive**: Consider multiple sizes (mobile, tablet, desktop)

## Examples

- Hero background: `/assets/images/hero-bg.jpg`
- Product photo: `/assets/images/products/loafer-01.jpg`
- Product video: `/assets/videos/product-demo.mp4`
