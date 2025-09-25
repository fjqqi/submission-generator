"use client";
import { TextInput } from "@/components/TextInput";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [script, setScript] = useState("");
  const [scriptLink, setScriptLink] = useState("");
  const [designLink, setDesignLink] = useState("");
  const [copied, setCopied] = useState(false);

  const DISCORD_CHANNEL_URL =
    "https://discord.com/channels/1395936375357968495/1395936839214436535";

  const message = `Copywriting: ${script}
${scriptLink}
Link Desain:
${designLink}`;

  const handleCopyAndOpen = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      window.open(DISCORD_CHANNEL_URL, "_blank");

      // reset copied after 2s
      setTimeout(() => setCopied(false), 2000);
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
            </div>

            {script || scriptLink || designLink ? (
              <div className="mt-4 text-sm py-3 w-fit  whitespace-pre-line">
                <div className="border-b-white border-b-2  text-gray-700 pt-2 backdrop-blur-2xl  bg-white/20 px-2 pb-2">
                  {message}
                </div>

                <button
                  onClick={handleCopyAndOpen}
                  className="mt-3 font-apple block px-4 py-1 rounded-full border border-black text-2xl"
                  style={{
                    background:
                      "linear-gradient(-178.743deg, #FFFFFF 0%, #B2E268 100%)",
                  }}
                >
                  {copied ? "Copied!" : "Copy and open Discord"}
                </button>
              </div>
            ) : (
              <p className="mt-4 text-gray-500">Text will appear here…</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
