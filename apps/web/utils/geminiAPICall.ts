import { ai } from "../config/gemini";

export async function geminiAPICall(
  text: string,
  mode: string,
  modeType?: string
): Promise<string | undefined> {
  try {
    let prompt = "";

    switch (mode.toLowerCase()) {
      case "paraphraser":
        prompt = `Paraphrase the following text${mode ? ` in a ${mode} tone` : ""} without giving options or extra information and make it quick and optimized: "${text}"`;
        break;
      case "summarizer":
        prompt = `Summarize the following text${mode ? ` in a ${mode} style` : ""} without giving options or extra information and make it quick and optimized: "${text}"`;
        break;
      case "grammar checker":
        prompt = `Correct any grammatical errors in the following text${mode ? ` and make it sound ${mode}` : ""} without giving options or extra information and make it quick and optimized: "${text}"`;
        break;
      case "tone adjuster":
        prompt = `Rewrite the following text in a ${mode} tone without giving options or extra information and make it quick and optimized: "${text}"`;
        break;
      default:
        prompt = `${modeType} the following text${mode ? ` in ${mode} style` : ""} without giving options or extra information and make it quick and optimized: "${text}"`;
    }

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
    console.error("Gemini API error:", error);
    return "Something went wrong while processing the request.";
  }
}
