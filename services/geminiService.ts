
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI(import.meta.env.VITE_GEMINI_API_KEY || '');

export const getCounselingResponse = async (userQuery: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: `You are the "Vedic Expert Academic Counselor". Your goal is to help parents and students understand the importance of JEE/NEET foundational courses in 8th, 9th, and 10th grades. 
        Promote Vedic Expert's unique approach: combining modern science/math with time-tested Vedic speed-solving techniques.
        Be encouraging, professional, and knowledgeable about the Indian competitive landscape (JEE, NEET, NTSE, KVPY, Olympiads).
        Keep responses concise and informative.`,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Please try calling our helpdesk.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our counselor is currently busy helping other students. Please reach out via the contact form below.";
  }
};
