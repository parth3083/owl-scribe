import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_NVIDIA_API_KEY,
  baseURL: "https://integrate.api.nvidia.com/v1",
});

export async function ensembleAPICall(
  geminiOutput: string,
  llamaOutput: string
): Promise<string | undefined> {
  try {
    const prompt = `You are given two responses for the same input task.

Response A:
${geminiOutput}

Response B:
${llamaOutput}

Choose the better response or generate a new and better version that combines the strengths of both A and B. The output should be accurate, concise and natural sounding. Do not mention A or B. Just return the improved response and nothing else and do give options.`;

    const completion = await openai.chat.completions.create({
      model: "meta/llama-3.1-405b-instruct",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.2,
      top_p: 0.7,
      max_tokens: 1024,
    });

    const content = completion.choices[0]?.message?.content;
    return content !== null ? content : undefined;
  } catch (error) {
    console.error("Ensemble API error:", error);
    return "Something went wrong while ensembling the response.";
  }
}
