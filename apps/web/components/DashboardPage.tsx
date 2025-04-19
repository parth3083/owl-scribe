"use client"
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { Button } from "../../../packages/ui/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Heading from "./Heading";

interface DashBoradPageProps {
  title: string;
  children?: ReactNode;
  hideBackButton?: boolean;
  cta?: ReactNode;
}

function DashboardPage({
  title,
  children,
  cta,
  hideBackButton,
}: DashBoradPageProps) {
  const router = useRouter();
  return (
    <section className="flex-1 h-full w-full  flex flex-col">
      <div className="p-6 w-full sm:p-8 flex justify-between border-b border-gray-200">
        <div className="flex w-full flex-col items-start sm:flex-row sm:items-center gap-x-5 gap-y-6">
          <div className="flex items-center gap-8">
            {hideBackButton ? null : (
              <Button
                onClick={() => router.back()}
                variant={"outline"}
                className="w-fit bg-white cursor-pointer hover:bg-[#8B4513] hover:text-white transition-colors"
              >
                <ArrowLeft className="size-4" />
              </Button>
            )}
            <Heading className="capitalize -mt-2">{title}</Heading>
          </div>
          {cta ? <div className="w-full">{cta}</div> : null}
        </div>
      </div>

      <div className="flex-1 p-6 sm:p-8 flex flex-col overflow-y-auto">
        {children}
      </div>
    </section>
  );
}

export default DashboardPage;