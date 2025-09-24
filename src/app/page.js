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

  const handleGenerate = () => {
    const generatedText = `Copywriting: ${script}
${scriptLink}
Link Desain:
${designLink}`;

    setOutput(generatedText);
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="min-h-screen w-screen flex pt-20 justify-center">
      <div className="max-w-2xl">
        <div className="form-section p-10">
          <div>
            <Image src={"/log.svg"} width={260} height={260} alt="logo" />
          </div>

          <p className="text-black text-2xl">paste your link below</p>

          <div className="w-96 ">
            <div className="flex flex-col gap-3 mt-6">
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
                className="w-fit mt-2 text-2xl py-1 px-5 rounded-full border border-black"
                style={{
                  background:
                    "linear-gradient(-178.743deg, #FFFFFF 0%, #B2E268 100%)",
                }}
              >
                Generate
              </button>

              {output && (
                <div className="mt-4 p-3 bg-gray-100 rounded-md text-black whitespace-pre-line">
                  {output}

                  <button
                    onClick={handleCopy}
                    className="mt-3 block px-4 py-1 rounded-full border border-black text-sm"
                    style={{
                      background:
                        "linear-gradient(-178.743deg, #FFFFFF 0%, #B2E268 100%)",
                    }}
                  >
                    {copied ? "Copied!" : "Copy to Clipboard"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
