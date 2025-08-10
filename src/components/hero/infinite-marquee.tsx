export const InfiniteMarquee = () => {
  const images = [
    "/lovable-uploads/fa054ed1-29ae-4901-94f6-2846811c97ed.png",
    "/lovable-uploads/fddfb4e9-2cb5-4d5e-99f7-85a1c4b7f7d8.png",
    "/lovable-uploads/4a840b83-b610-41bf-a085-84831cf2c7a8.png",
    "/lovable-uploads/ed01244a-f9d0-4b45-afea-899bbf9c52c1.png",
    "/lovable-uploads/81d5c242-8d62-4618-8b10-6b370008b938.png",
  ];

  return (
    <div className="w-full flex flex-col items-center gap-4 px-4">
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee gap-3">
          {/* First set of images */}
          {images.map((src, index) => (
            <div key={`first-${index}`} className="flex-shrink-0 w-80 h-48 rounded-lg overflow-hidden">
              <img
                src={src}
                alt={`Marquee image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {images.map((src, index) => (
            <div key={`second-${index}`} className="flex-shrink-0 w-80 h-48 rounded-lg overflow-hidden">
              <img
                src={src}
                alt={`Marquee image ${index + 1} duplicate`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground text-center leading-relaxed">
        [ Perfect for SaaS platforms, AI tools, and virtual assistants ]
      </p>
    </div>
  );
};