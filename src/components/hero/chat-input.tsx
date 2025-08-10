import { Plus, Edit3, Send } from "lucide-react";
import { useState } from "react";

export const ChatInput = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto p-3 bg-black/6 rounded-3xl backdrop-blur-[50px] flex flex-col gap-3">
      {/* Input field */}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask Anything Maestro"
        className="bg-transparent text-white placeholder-muted-foreground text-sm font-normal outline-none border-none w-full"
      />
      
      {/* Bottom row with buttons */}
      <div className="flex justify-between items-center">
        {/* Left side buttons */}
        <div className="flex gap-2">
          <button type="button" className="p-2.5 bg-white rounded-full hover:bg-white/90 transition-colors">
            <Plus size={16} className="text-black" />
          </button>
          <button type="button" className="p-2.5 bg-white rounded-full hover:bg-white/90 transition-colors">
            <Edit3 size={16} className="text-black" />
          </button>
        </div>
        
        {/* Send button */}
        <button type="submit" className="p-2.5 bg-white rounded-full hover:bg-white/90 transition-colors">
          <Send size={16} className="text-black" />
        </button>
      </div>
    </form>
  );
};