"use client";
import React, { useEffect, useRef } from "react";
import { Textarea } from "../../../packages/ui/components/ui/textarea";
import { Button } from "../../../packages/ui/components/ui/button";
import { usePathname } from "next/navigation";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "../../../packages/ui/components/ui/tabs";
import { Copy } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

const schema = z.object({
  mode: z.string(),
  text: z.string().max(150 * 5, "Text exceeds maximum word count"), // Rough character limit
  modeType: z.string().optional(),
});

type SchemaType = z.infer<typeof schema>;

function DashboardPageContent() {
  const pathname = usePathname();

  const outputRef = useRef<HTMLDivElement>(null); // Ref for the text content

  const handleCopy = () => {
    if (outputRef.current) {
      const text = outputRef.current.innerText;
      navigator.clipboard
        .writeText(text)
        .then(() => {
          toast.success("Text copied to clipboard.");
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  };

  // Determine mode type from pathname
  const getMode = () => {
    if (pathname === "/dashboard") return "summarize";
    else if (pathname === "/dashboard/paraphrase") return "paraphrase";
    else if (pathname === "/dashboard/grammar-checker") return "Grammar Checker";
    else if (pathname === "/dashboard/tone-adjuster") return "Tone Adjuster";
    else return "default";
  };

  // Get mode options based on path
  const getModeOptions = () => {
    if (pathname === "/dashboard/paraphrase") {
      return [
        "standard",
        "fluency",
        "humanized",
        "formal",
        "academic",
        "simple",
        "creative",
        "expand",
        "shorten",
        "custom",
      ];
    } else if (pathname === "/dashboard/tone-adjuster") {
      return [
        "professional",
        "casual",
        
        "formal",
        "persuasive",
        "informative",
        "enthusiastic",
        "authoritative",
        "empathetic",
        "technical",
      ];
    }
    return [];
  };

  const placeholderText =
    pathname === "/dashboard"
      ? "To rewrite text, enter or paste it here and press 'Summarize'"
      : pathname === "/dashboard/paraphrase"
        ? "To paraphrase text, enter or paste it here and press 'Paraphrase'"
        : pathname === "/dashboard/grammar-checker" 
          ? "Start by writing or pasting the text and press 'Grammar checker'"
          : pathname === "/dashboard/tone-adjuster"
            ? "Paste the text and select the tone and press 'Tone adjuster'"
            : "Enter your text here...";

  // Initialize the form with React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      mode: "",
      text: "",
      modeType: getMode(),
    },
  });

  useEffect(() => {
    setValue("modeType", getMode());
    setValue("mode", ""); // Reset mode when path changes
  }, [pathname, setValue]);

  const text = watch("text");
  const mode = watch("mode");
  const words = text
    ? text
        .trim()
        .split(/\s+/)
        .filter((w) => w.length > 0)
    : [];
  const wordCount = words.length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    const newWords = newText
      .trim()
      .split(/\s+/)
      .filter((w) => w.length > 0);

    if (newWords.length <= 150) {
      setValue("text", newText);
    }
  };

  const handleModeSelect = (mode: string) => {
    setValue("mode", mode);
  };

  const onSubmit = (data: SchemaType) => {
    alert(JSON.stringify(data, null, 2));
  };

  // Only show mode options for paraphrase and tone adjuster
  const shouldShowModes = pathname === "/dashboard/paraphrase" || pathname === "/dashboard/tone-adjuster";
  const modeOptions = getModeOptions();

  return (
    <div className="w-full min-h-[68vh] flex flex-col rounded-xl border-gray-300 border relative shadow-2xl overflow-hidden">
      {/* Mode selection section - conditionally rendered */}
      {shouldShowModes && (
        <div className="upper-part w-full min-h-12 relative border-b-[2px] border-gray-300 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5 p-3 md:px-5">
          <h3 className="text-black font-medium whitespace-nowrap">
            {pathname === "/dashboard/tone-adjuster" ? "Tones : " : "Modes : "}
          </h3>
          <div className="w-full md:h-full flex-1 flex items-center overflow-x-auto pb-2 md:pb-0">
            <Tabs defaultValue="account" className="w-full md:w-fit px-2 md:px-5">
              <TabsList className="flex items-center gap-2 md:gap-3 flex-nowrap">
                {modeOptions.map((item, index) => (
                  <TabsTrigger
                    key={index}
                    className={`bg-white capitalize text-sm px-2 py-0.5 rounded-full shadow-md cursor-pointer transition-colors 
                      ${
                        mode === item
                          ? "bg-[#8b4513] text-white"
                          : "hover:bg-[#8b4513] hover:text-white"
                      }`}
                    value="account"
                    onClick={() => handleModeSelect(item)}
                  >
                    {item}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      )}
      <div className="lower flex-1 w-full relative flex flex-col lg:flex-row items-stretch">
        {/* Input text section */}
        <form
          className="w-full lg:w-1/2 flex flex-col gap-2 p-3 relative border-b-[2px] lg:border-b-0 lg:border-r-[2px] border-gray-300"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Textarea
            className="h-64 lg:h-[90%] border-none text-md text-black outline-none"
            placeholder={placeholderText}
            {...register("text")}
            onChange={handleChange}
          />
          <div className="w-full h-10 flex items-center justify-between px-2 md:px-5">
            <h4
              className={`text-xs md:text-sm ${wordCount > 150 ? "text-red-500" : "text-black/60"}`}
            >
              {wordCount} {wordCount === 1 ? "word" : "words"} / 150 max
            </h4>
            <Button
              type="submit"
              className="px-3 md:px-4 py-1 border border-[#8B4513] text-white bg-[#8B4513] rounded-full cursor-pointer text-sm md:text-md"
            >
              {pathname === "/dashboard" 
                ? "Summarize" 
                : pathname === "/dashboard/paraphrase"
                  ? "Paraphrase"
                  : pathname === "/dashboard/grammar-checker"
                    ? "Grammar Check"
                    : "Adjust Tone"}
            </Button>
          </div>
          {errors.text && (
            <p className="text-red-500 text-xs">{errors.text.message}</p>
          )}
        </form>
        {/* Output section */}
        <div className="w-full lg:w-1/2 p-3 flex flex-col gap-2 relative">
          <div
            ref={outputRef}
            className="h-64 lg:h-[95%] capitalize text-black p-1 overflow-y-auto"
          >
            dnkjo nkj jwenc jsdncjkwdnc kowdn iowenc iweoncisdnciosdnc iooi
            nionckodsnciosd cksdnckdsnciowdhc oioncidsciohfionvklds
            pcl;kdmfclksdjikdjfiod inkdlsnfkldsn pdfkdsnfklsdnfkd
            nklsdnfkdfhnioen fonfkodsnfikodnf iinf kodnfinefnfdi sifdkfnihf
            ionickdnf idof iohnf ioiodfnidonsf iewhnf idnfpdsfnpodj
            pwemmf&apos;df awjf eioniosdnf fiodfnk ajfiokmnfiojfnikadnfkgnir
          </div>
          <div className="w-full h-8 flex items-center justify-end">
            <Copy
              onClick={handleCopy}
              className="size-4 md:size-5 text-black cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPageContent;