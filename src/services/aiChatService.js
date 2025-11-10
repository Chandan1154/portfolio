import knowledge from "../data/chandan-ai-knowledge.json";

export async function askChandanAI(question) {
  const res = await fetch("https://server-alpha-olive.vercel.app/ask-ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question, knowledge }) 
  });
   console.log("Response received from AI service");
  const answer = await res.json();
  return answer;
}
