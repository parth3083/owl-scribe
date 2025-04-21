import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_NVIDIA_API_KEY,
  baseURL: 'https://integrate.api.nvidia.com/v1',
});

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
    console.error("LLaMA API error:", error);
    return "Something went wrong while processing the request.";
  }
}