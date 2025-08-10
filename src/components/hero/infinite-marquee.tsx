export const InfiniteMarquee = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4 px-4">
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee gap-3">
          {/* First set of placeholder boxes */}
          <div className="flex-shrink-0 w-80 h-48 bg-foreground rounded-lg"></div>
          <div className="flex-shrink-0 w-80 h-48 bg-foreground rounded-lg"></div>
          <div className="flex-shrink-0 w-80 h-48 bg-foreground rounded-lg"></div>
          <div className="flex-shrink-0 w-80 h-48 bg-foreground rounded-lg"></div>
          <div className="flex-shrink-0 w-80 h-48 bg-foreground rounded-lg"></div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex-shrink-0 w-80 h-48 bg-foreground rounded-lg"></div>
          <div className="flex-shrink-0 w-80 h-48 bg-foreground rounded-lg"></div>
          <div className="flex-shrink-0 w-80 h-48 bg-foreground rounded-lg"></div>
          <div className="flex-shrink-0 w-80 h-48 bg-foreground rounded-lg"></div>
          <div className="flex-shrink-0 w-80 h-48 bg-foreground rounded-lg"></div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground text-center leading-relaxed">
        [ Perfect for SaaS platforms, AI tools, and virtual assistants ]
      </p>
    </div>
  );
};