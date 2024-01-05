import dotenv from "dotenv";
import {
  HeliconeOpenAIApiConfiguration,
  generateText,
  openai,
} from "modelfusion";

dotenv.config();

async function main() {
  const text = await generateText(
    openai
      .ChatTextGenerator({
        api: new HeliconeOpenAIApiConfiguration({
          customCallHeaders: ({ functionId, callId }) => ({
            "Helicone-Property-FunctionId": functionId,
            "Helicone-Property-CallId": callId,
          }),
        }),
        model: "gpt-3.5-turbo",
        temperature: 0.7,
        maxGenerationTokens: 500,
      })
      .withTextPrompt(),

    "Write a short story about a robot learning to love",

    { functionId: "example-function" }
  );

  console.log(text);
}

main().catch(console.error);
