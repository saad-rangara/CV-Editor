"use client";

import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Heading from "@tiptap/extension-heading";
import Blockquote from "@tiptap/extension-blockquote";
import Underline from "@tiptap/extension-underline";
import { BiBold, BiItalic, BiStrikethrough, BiUnderline } from "react-icons/bi";
import {
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdCode,
  MdUndo,
  MdRedo,
  MdFormatQuote,
  MdTextFields,
} from "react-icons/md";
import TextStyle from "@tiptap/extension-text-style";

export default function TipTap({ content, onContentChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      ListItem,
      Heading.configure({
        HTMLAttributes: {
          class: "text-xl font-bold capitalize",
          levels: [2],
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc ml-2",
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal ml-2",
        },
      }),
      Blockquote.configure({
        HTMLAttributes: {
          class: "border-l-4 border-gray-300 pl-4 italic text-gray-700",
        },
      }),
      TextStyle,
      Underline,
    ],
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "shadow appearance-none min-h-[150px] border rounded w-full py-2 px-3 bg-white text-black text-sm mt-0 md:mt-3 leading-tight focus:outline-none focus:shadow-outline",
      },
    },
    content: content,
    onUpdate: ({ editor }) => {
      onContentChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && editor.getHTML() !== content) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  const insertQuote = () => {
    const currentSelection = editor.state.selection;
    const quoteText = `"${editor.state.doc.textBetween(
      currentSelection.from,
      currentSelection.to
    )}"`;
    editor.commands.insertContent(quoteText);
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="max-w-lg mx-auto border rounded-lg shadow-lg">
      <div className="flex flex-wrap items-center p-2 space-x-2 border-b bg-gray-100">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-1 rounded-lg ${
            editor.isActive("bold")
              ? "bg-blue-500 text-white"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          <BiBold className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-1 rounded-lg ${
            editor.isActive("italic")
              ? "bg-blue-500 text-white"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          <BiItalic className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-1 rounded-md ${
            editor.isActive("underline")
              ? "bg-blue-600 text-white"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          <BiUnderline className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-1 rounded-lg ${
            editor.isActive("strike")
              ? "bg-blue-500 text-white"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          <BiStrikethrough className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-1 rounded-lg ${
            editor.isActive("bulletList")
              ? "bg-blue-500 text-white"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          <MdFormatListBulleted className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-1 rounded-lg ${
            editor.isActive("orderedList")
              ? "bg-blue-500 text-white"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          <MdFormatListNumbered className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`p-1 rounded-lg ${
            editor.isActive("codeBlock")
              ? "bg-blue-500 text-white"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          <MdCode className="w-5 h-5" />
        </button>

        <button
          onClick={insertQuote}
          className={`p-2 rounded-lg max-w-full ${
            editor.isActive("blockquote")
              ? "bg-blue-500 text-white"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          <MdFormatQuote className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`p-1 rounded-lg ${
            editor.isActive("paragraph")
              ? "bg-blue-500 text-white"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          <MdTextFields className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className={`p-1 rounded-lg ${
            editor.can().undo()
              ? "text-gray-600 hover:bg-gray-200"
              : "text-gray-300 cursor-not-allowed"
          }`}
        >
          <MdUndo className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className={`p-1 rounded-lg ${
            editor.can().redo()
              ? "text-gray-600 hover:bg-gray-200"
              : "text-gray-300 cursor-not-allowed"
          }`}
        >
          <MdRedo className="w-5 h-5" />
        </button>
      </div>
      <EditorContent
        editor={editor}
        className="p-4 min-h-[200px] focus:outline-none"
      />
    </div>
  );
}
