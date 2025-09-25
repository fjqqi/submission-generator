"use client";
import { TextInput } from "@/components/TextInput";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [script, setScript] = useState("");
  const [scriptLink, setScriptLink] = useState("");
  const [designLink, setDesignLink] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const DISCORD_CHANNEL_URL =
    "https://discord.com/channels/1395936375357968495/1395936839214436535";

  const handleGenerate = () => {
    const generatedText = `Copywriting: ${script}
${scriptLink}
Link Desain:
${designLink}`;

    setOutput(generatedText);
    setCopied(false);
  };

  const handleCopyAndOpen = async () => {
    const message = `Copywriting: ${script}\n${scriptLink}\nLink Desain:\n${designLink}`;
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);

      // Open Discord channel in new tab
      window.open(DISCORD_CHANNEL_URL, "_blank");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="min-h-screen w-screen flex pt-12 justify-center">
      <div className="max-w-5xl">
        <div className="form-section p-10">
          <div>
            <Image src={"/log.svg"} width={280} height={280} alt="logo" />
          </div>

          <p className="text-black text-2xl mt-1 ml-1">paste your link below</p>

          <div className="w-[800px] ">
            <div className="flex w-96 flex-col gap-3 mt-6">
              <TextInput
                id="script"
                placeholder="Script Title"
                value={script}
                onChange={(e) => setScript(e.target.value)}
              />

              <TextInput
                id="scriptLink"
                placeholder="Title Link"
                value={scriptLink}
                onChange={(e) => setScriptLink(e.target.value)}
              />

              <TextInput
                id="designLink"
                placeholder="Design Link"
                value={designLink}
                onChange={(e) => setDesignLink(e.target.value)}
              />

              <button
                onClick={handleGenerate}
                className="font-apple w-fit mt-2 text-4xl hover:-translate-y-1 cursor-pointer duration-100  px-5 rounded-full border border-black"
                style={{
                  background:
                    "linear-gradient(-178.743deg, #FFFFFF 0%, #B2E268 100%)",
                }}
              >
                Generate
              </button>
            </div>

            {output && (
              <div className="mt-4 text-sm p-3 bg-gray-100 rounded-md text-black whitespace-pre-line">
                {output}

                <button
                  onClick={handleCopyAndOpen}
                  className="mt-3 font-apple block px-4 py-1 rounded-full border border-black text-2xl"
                  style={{
                    background:
                      "linear-gradient(-178.743deg, #FFFFFF 0%, #B2E268 100%)",
                  }}
                >
                  {copied ? "Copied!" : "Copy and open discord"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
