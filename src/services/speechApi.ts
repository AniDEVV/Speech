export async function recognizeSpeech(): Promise<string> {

  const response = await fetch("http://localhost:5183/api/speech/recognize");

  if (!response.ok) {
    throw new Error("Speech API failed");
  }

  const text = await response.text();

  return text;
}
