import { InferenceClient } from "@huggingface/inference";

const llama = new InferenceClient(process.env.NEXT_PUBLIC_HUGGING_FACE);

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

    const chatCompletion = await llama.chatCompletion({
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
    return (
      chatCompletion.choices[0]?.message?.content ??
      "No valid response generated."
    );
  } catch (error) {
    console.error("Ensemble API error:", error);
    return "Something went wrong while ensembling the response.";
  }
}
