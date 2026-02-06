"use client";

import { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * Editor provides a simple post creation UI (placeholder).
 * In a real app this would POST to NEXT_PUBLIC_BACKEND_URL.
 */
export default function Editor() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handlePublish = () => {
    // Here we would call the backend API using env vars.
    const api = process.env.NEXT_PUBLIC_BACKEND_URL || process.env.NEXT_PUBLIC_API_BASE;
    console.log("Publishing to:", api, { title, body });
    alert("Demo: Post would be published via backend API.");
  };

  return (
    <div className="card">
      <div className="card-inner space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            id="title"
            className="input"
            placeholder="An insightful blog post..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-1">
            Content
          </label>
          <textarea
            id="content"
            className="input min-h-56"
            rows={10}
            placeholder="Write your post content here..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-end gap-2">
          <button className="btn-secondary" onClick={() => { setTitle(""); setBody(""); }}>
            Save Draft
          </button>
          <button className="btn-success" onClick={handlePublish}>
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}
