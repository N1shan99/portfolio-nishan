import fs from "fs";
import path from "path";

export const runtime = "nodejs";

function simpleSearch(query, docs) {
  const q = query.toLowerCase();
  return docs
    .map((d) => ({
      text: d,
      score: d.toLowerCase().includes(q) ? 1 : 0,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((d) => d.text)
    .join("\n");
}

export async function POST(req) {
  try {
    const userQuery = await req.text();

    console.log("🟡 User query:", userQuery);

        const filePath = path.join(process.cwd(), "data", "resume.txt");
        const text = fs.readFileSync(filePath, "utf-8");

        const chunks = text.split("\n\n");
        const context = simpleSearch(userQuery, chunks);

    const SYSTEM_PROMPT = `
    You are Nishan's AI assistant.

    STRICT RULES:
    - Answer ONLY using the provided context.
    - Do NOT add outside knowledge.
    - Do NOT explain general concepts.
    - Do NOT give coding tutorials.
    - Keep answers concise and factual.

    You can ONLY answer about:
    - Nishan's skills
    - Nishan's experience
    - Nishan's projects
    - Nishan's work and achievements

    If the question is unrelated, reply:
    "I can only answer questions about Nishan's profile."

    RESPONSE STYLE:
    - Use short sentences
    - Use bullet points when listing
    - Avoid long paragraphs
    - Be direct and professional

    Context:
    ${context}
    `;

    //const response = await fetch("https://api.openai.com/v1/chat/completions", {
     const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //model: "gpt-4o-mini",
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userQuery },
        ],
      }),
    });

    const data = await response.json();

    console.log("🟢 OpenAI raw:", data);

    const reply =
      data?.choices?.[0]?.message?.content || "No response from AI";

    console.log("🟢 Final reply:", reply);

    return new Response(reply);
  } catch (err) {
    console.error("🔴 API ERROR:", err);
    return new Response("Server error");
  }
}