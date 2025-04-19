"use client";
import { buttonVariants } from "../../../../../packages/ui/components/ui/button";
import { Modal } from "../../../components/modal";
import { cn } from "../../../lib/utils";

import { CircleCheck, LucideIcon, Menu, Pencil, Smile, X, Zap } from "lucide-react";
import Link from "next/link";
import React, { ReactNode, useState } from "react";

interface SidebarItem {
  href: string;
  icon: LucideIcon;
  text: string;
}

interface SidebarCategory {
  category: string;
  items: SidebarItem[];
}
const SIDEBAR_ITEMS: SidebarCategory[] = [
  {
    category: "Overview",
    items: [
      {
        href: "/dashboard",
        icon: Zap,
        text: "Summarizer",
      },
      {
        href: "/dashboard/paraphrase",
        icon: Pencil,
        text: "Paraphraser",
      },
      {
        href: "/dashboard/grammar-checker",
        icon: CircleCheck,
        text: "Grammar Checker",
      },
      {
        href: "/dashboard/tone-adjuster",
        icon: Smile,
        text: "Tone Adjuster",
      },
    ],
  },
];

const Sidebar = ({ onClose }: { onClose?: () => void }) => {
  return (
    <div className="space-y-4 md:space-y-6 relative z-20 flex flex-col h-full">
      {/* logo  */}
      <p className="hidden sm:block text-lg/7 font-semibold text-black">
        Owl <span className="text-[#8B4513]">Scibe</span>
      </p>

      {/* Navigation Items  */}
      <div className="flex-grow">
        <ul>
          {SIDEBAR_ITEMS.map(({ category, items }) => (
            <li key={category} className="mb-4 md:mb-8">
              <p className="text-xs font-medium leading-6 text-zinc-500">
                {category}
              </p>
              <div className="-mx-2 flex flex-1 flex-col gap-2">
                {items.map((item, i) => (
                  <Link
                    href={item.href}
                    key={i}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "w-full justify-start group flex items-center gap-x-2.5 rounded-md px-2 py-1.5 text-sm font-medium leading-6 text-zinc-700 hover:bg-gray-50 hover:text-[#8B4513] transition-colors"
                    )}
                    onClick={onClose}
                  >
                    <item.icon className="size-4 text-zinc-500 group-hover:text-[#8B4513]" />
                    {item.text}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function Layout({ children }: { children: ReactNode }) {
  const [isDrawerOpen, setIsDrawerOPen] = useState(false);

  return (
    <div className="relative h-screen flex flex-col md:flex-row bg-white overflow-hidden">
      {/* side for desktop  */}
      <div className="hidden md:block w-64 lg:w-80 border-r border-gray-100 p-6 h-full text-[#8B4513] relative z-10">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* mobile header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-200">
          <p className="text-lg/7 font-semibold text-black ">
            Owl<span className="text-[#8B4513]">Scribe</span>
          </p>
          <button
            onClick={() => setIsDrawerOPen(true)}
            className="text-gray-500 hover:text-gray-600"
          >
            <Menu className="size-6" />
          </button>
        </div>

        {/* main content area */}
        <div className="flex-1 overflow-y-auto bg-gray-50 shadow-md p-4 md:p-6 relative z-10">
          <div className="relative min-h-full flex flex-col">
            <div className="h-full flex flex-col flex-1 space-y-4">
              {children}
            </div>
          </div>
        </div>

        <Modal
          className="p-4"
          showModal={isDrawerOpen}
          setShowModal={setIsDrawerOPen}
        >
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg/7 font-semibold text-black">
              Owl<span className="text-[#8B4513]">Scribe</span>
            </p>
            <button
              aria-label="Close modal"
              onClick={() => setIsDrawerOPen(false)}
            >
              <X className="size-6" />
            </button>
          </div>

          <Sidebar />
        </Modal>
      </div>
    </div>
  );
}

export default Layout;
