"use client";

import hljs from "highlight.js";
import { useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";

interface MarkdownProps {
  content: string;
}

export default function Markdown({ content }: MarkdownProps) {
  useEffect(() => {
    hljs.highlightAll();
  });
  return (
    <ReactMarkdown className="markdown-body" rehypePlugins={[rehypeRaw]}>
      {content}
    </ReactMarkdown>
  );
}
