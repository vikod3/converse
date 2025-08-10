import { Plus, Edit3, Send } from "lucide-react";

export const ChatInput = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-3 bg-black/6 rounded-3xl border border-white/6 backdrop-blur-[50px] flex flex-col gap-3">
      {/* Placeholder text */}
      <div className="text-muted-foreground text-sm font-normal">
        Ask Anything Maestro
      </div>
      
      {/* Bottom row with buttons */}
      <div className="flex justify-between items-center">
        {/* Left side buttons */}
        <div className="flex gap-2">
          <button className="p-2.5 bg-white/3 rounded-full border border-white/3 hover:bg-white/6 transition-colors">
            <Plus size={16} className="text-white/70" />
          </button>
          <button className="p-2.5 bg-white/3 rounded-full border border-white/3 hover:bg-white/6 transition-colors">
            <Edit3 size={16} className="text-white/70" />
          </button>
        </div>
        
        {/* Send button */}
        <button className="p-2.5 bg-white rounded-full border border-white/3 hover:bg-white/90 transition-colors">
          <Send size={16} className="text-black" />
        </button>
      </div>
    </div>
  );
};