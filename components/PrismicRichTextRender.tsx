"use client";

import { PrismicRichText, JSXMapSerializer } from "@prismicio/react";
import React from "react";

interface RichTextProps {
  field: any;
}

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className="text-4xl font-bold mb-4">{children}</h1>
  ),
  heading2: ({ children }) => (
    <h2 className="text-3xl font-semibold mb-4">{children}</h2>
  ),
  heading3: ({ children }) => (
    <h3 className="text-2xl font-semibold mb-3">{children}</h3>
  ),
  paragraph: ({ children }) => (
    <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
  ),
  listItem: ({ children }) => (
    <li className="ml-5 list-disc mb-2">{children}</li>
  ),
  oListItem: ({ children }) => (
    <li className="ml-5 list-decimal mb-2">{children}</li>
  ),
  hyperlink: ({ node, children }) => (
    <a
      href={node.data.url}
      className="text-green-600 underline hover:text-green-800"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
};

export default function RichText({ field }: RichTextProps) {
  if (!field) return null;

  return <PrismicRichText field={field} components={components} />;
}
