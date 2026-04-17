import Image from "next/image";

type Props = {
  images: { src: string; alt: string }[];
  columns?: 2 | 3 | 4;
};

export function GalleryGrid({ images, columns = 4 }: Props) {
  const columnClass = columns === 2 ? "sm:grid-cols-2" : columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 xl:grid-cols-4";

  return (
    <div className={`grid grid-cols-1 gap-3 ${columnClass}`}>
      {images.map((image) => (
        <div key={image.src} className="surface-panel overflow-hidden rounded-lg border">
          <Image src={image.src} alt={image.alt} width={480} height={360} sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw" className="h-44 w-full object-cover md:h-44" />
        </div>
      ))}
    </div>
  );
}
