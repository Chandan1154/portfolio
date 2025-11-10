import { useState } from "react";
import { askChandanAI } from "../services/aiChatService";
import { X } from "react-feather";

export default function AIChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");

    const reply = await askChandanAI(input);
    const botMsg = { sender: "bot", text: reply };
    setMessages((m) => [...m, botMsg]);
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center text-lg"
        >
         FLEXI
        </button>
      )}

      {open && (
        <div className="fixed bottom-5 right-5 w-80 h-96 bg-white border rounded-lg shadow-lg flex flex-col">
          <div className="flex justify-between items-center p-2 bg-blue-600 text-white rounded-t-lg">
            <span>AI Assistant</span>
            <button onClick={() => setOpen(false)}>
              <X size={16} />
            </button>
          </div>
          <div className="flex-1 p-2 overflow-y-auto">
            {messages.map((m, i) => (
              <p
                key={i}
                className={m.sender === "user" ? "text-right" : "text-left"}
              >
                <span className="inline-block px-3 py-2 rounded-lg bg-gray-100 my-1">
                  {m.text}
                </span>
              </p>
            ))}
          </div>
          <div className="flex gap-2 p-2 border-t">
            <input
              className="flex-1 border rounded-lg px-2 py-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
            />
            <button
              onClick={sendMessage}
              className="px-3 py-1 bg-blue-600 text-white rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
