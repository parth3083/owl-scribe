import { InferenceClient } from "@huggingface/inference";

const llama = new InferenceClient(process.env.NEXT_PUBLIC_HUGGING_FACE);

export async function llamaAPICall(
  text: string,
  modeType: string,
  mode?: string,
): Promise<string | undefined> {
  try {
    let prompt = "";

    switch ((modeType || "").toLowerCase()) {
      case "paraphraser":
        prompt = `Paraphrase the following text${mode ? ` in a ${mode} tone` : ""} without giving options or extra information and make it quick and optimized: "${text}"`;
        break;
      case "summarizer":
        prompt = `Summarize the following text${mode ? ` in a ${mode} style` : ""} without giving options or extra information and make it quick and optimized: "${text}"`;
        break;
      case "grammar-checker":
        prompt = `Correct any grammatical errors in the following text${mode ? ` and make it sound ${mode}` : ""} without giving options or extra information and make it quick and optimized: "${text}"`;
        break;
      case "tone-adjuster":
        prompt = `Rewrite the following text in a ${mode} tone without giving options or extra information and make it quick and optimized: "${text}"`;
        break;
      default:
        prompt = `${modeType} the following text${mode ? ` in ${mode} style` : ""} without giving options or extra information and make it quick and optimized: "${text}"`;
    }

    const chatCompletion  = await llama.chatCompletion({
      provider: "fireworks-ai",
      model: "meta-llama/Llama-4-Scout-17B-16E-Instruct",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 1024,
    });
   return chatCompletion.choices[0]?.message?.content
    
  } catch (error) {
    console.error("LLaMA API error:", error);
    return "Something went wrong while processing the request.";
  }
}
