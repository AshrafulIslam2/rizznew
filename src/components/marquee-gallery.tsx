export function MarqueeGallery({ images }: { images: string[] }) {
  if (images.length === 0) return null;

  // Duplicate the strip so the loop is seamless — translateX(-50%) lands exactly
  // back on the first copy with no visible seam.
  const track = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <div className="marquee-track flex w-max gap-3">
        {track.map((url, i) => (
          <div
            key={i}
            className="h-64 w-96 shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${url}')` }}
          />
        ))}
      </div>
    </div>
  );
}
