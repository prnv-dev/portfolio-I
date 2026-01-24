import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const run = async () => {
  const result = await model.generateContent("Just say: Gemini OK");
  console.log(result.response.text());
};

run();
