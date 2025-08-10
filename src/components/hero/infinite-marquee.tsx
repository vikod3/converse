export const InfiniteMarquee = () => {
  const images = [
    "/lovable-uploads/ae554229-e9a5-4765-8e15-5a087a04c963.png",
    "/lovable-uploads/fddfb4e9-2cb5-4d5e-99f7-85a1c4b7f7d8.png",
    "/lovable-uploads/4a840b83-b610-41bf-a085-84831cf2c7a8.png",
    "/lovable-uploads/ed01244a-f9d0-4b45-afea-899bbf9c52c1.png",
    "/lovable-uploads/29161186-c99a-43e9-8b66-aca73a0b7efc.png",
  ];

  return (
    <div className="w-full flex flex-col items-center gap-4 px-4">
      <div className="relative w-full max-w-7xl overflow-hidden">
        {/* Top gradient fade */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none"></div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex animate-marquee gap-3">
          {/* First set of images */}
          {images.map((src, index) => (
            <div key={`first-${index}`} className="flex-shrink-0 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[367px] xl:h-[383px] rounded-lg overflow-hidden">
              <img
                src={src}
                alt={`Marquee image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {images.map((src, index) => (
            <div key={`second-${index}`} className="flex-shrink-0 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[367px] xl:h-[383px] rounded-lg overflow-hidden">
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