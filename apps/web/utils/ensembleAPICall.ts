import { ai } from "../config/gemini";

export async function ensembleAPICall(
  geminiOutput: string,
  llamaOutput: string
): Promise<string> {
  try {
    const prompt = `You are given two responses for the same input task.

Response A:
${geminiOutput}

Response B:
${llamaOutput}

Choose the better response or generate a new and better version that combines the strengths of both A and B. The output should be accurate, concise and natural sounding. Do not mention A or B. Just return the improved response and nothing else and do give options.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-04-17",
      contents: prompt,
      config: {
        thinkingConfig: {
          thinkingBudget: 1024,
        },
      },
    });

    if (response && response.text) {
      return response.text.trim();
    } else {
      return "No response text received from Gemini API.";
    }
  } catch (error) {
    console.error("Ensemble API error:", error);
    return "Something went wrong while ensembling the response.";
  }
}
