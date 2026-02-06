"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Editor from "@/components/Editor";

/**
 * PUBLIC_INTERFACE
 * Editor route showing a simple writing interface.
 */
export default function EditorPage() {
  const [sidebarOpen] = useState(false);

  return (
    <div className="content-grid">
      <Sidebar open={sidebarOpen} />
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Create a new post</h2>
        </div>
        <Editor />
      </div>
    </div>
  );
}
