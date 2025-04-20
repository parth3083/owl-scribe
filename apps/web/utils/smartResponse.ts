import { ensembleAPICall } from "./ensembleAPICall";
import { geminiAPICall } from "./geminiAPICall";
import { llamaAPICall } from "./llamaAPICall";


// Util to wrap a promise with timeout
const withTimeout = <T>(promise: Promise<T>, timeoutMs: number): Promise<T | "timeout"> => {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve("timeout"), timeoutMs);
    promise.then((result) => {
      clearTimeout(timer);
      resolve(result);
    });
  });
};

export async function smartResponse(
  text: string,
  mode: string,
  modeType?: string
): Promise<string> {
  try {
    const timeoutMs = 5000; // 5 seconds max

    const geminiPromise = geminiAPICall(text, mode, modeType);
    const llamaPromise = llamaAPICall(text, mode, modeType);

    const [geminiResult, llamaResult] = await Promise.allSettled([
      withTimeout(geminiPromise, timeoutMs),
      withTimeout(llamaPromise, timeoutMs),
    ]);

    const geminiOutput = geminiResult.status === "fulfilled" && geminiResult.value !== "timeout"
      ? geminiResult.value
      : null;

    const llamaOutput = llamaResult.status === "fulfilled" && llamaResult.value !== "timeout"
      ? llamaResult.value
      : null;

    // If both finished, ensemble
    if (geminiOutput && llamaOutput) {
      return await ensembleAPICall(geminiOutput, llamaOutput);
    }

    // If only one finished, return that
    if (geminiOutput) return geminiOutput;
    if (llamaOutput) return llamaOutput;

    // If neither finished in time
    return "⚠️ Both AI models took too long to respond.";
  } catch (err) {
    console.error("Smart response error:", err);
    return "⚠️ Error while generating AI response.";
  }
}
