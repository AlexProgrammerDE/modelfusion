import dotenv from "dotenv";
import { generateImage, stability } from "modelfusion";
import fs from "node:fs";

dotenv.config();

async function main() {
  const { image, imageBase64, images, imagesBase64, metadata, rawResponse } =
    await generateImage({
      model: stability.ImageGenerator({
        model: "stable-diffusion-v1-6",
        cfgScale: 7,
        clipGuidancePreset: "FAST_BLUE",
        height: 512,
        width: 512,
        steps: 30,
      }),

      prompt: [
        { text: "the wicked witch of the west" },
        { text: "style of early 19th century painting", weight: 0.5 },
      ],

      fullResponse: true,
    });

  const path = `./stability-image-example.png`;
  fs.writeFileSync(path, image);
  console.log(`Image saved to ${path}`);
}

main().catch(console.error);
