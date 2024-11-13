'use client';

import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from "@tiptap/starter-kit";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Heading from "@tiptap/extension-heading";
import { BiBold, BiItalic, BiStrikethrough } from 'react-icons/bi';
import { MdFormatListBulleted, MdFormatListNumbered, MdCode } from 'react-icons/md';

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

  if (!editor) {
    return null;
  }

  return (
    <div className="max-w-lg mx-auto border rounded-lg shadow-lg">
      <div className="flex items-center p-2 space-x-2 border-b bg-gray-100">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded-lg ${editor.isActive('bold') ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
        >
          <BiBold className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded-lg ${editor.isActive('italic') ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
        >
          <BiItalic className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-2 rounded-lg ${editor.isActive('strike') ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
        >
          <BiStrikethrough className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded-lg ${editor.isActive('bulletList') ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
        >
          <MdFormatListBulleted className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          
          className={`p-2 rounded-lg ${editor.isActive('orderedList') ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
        >
            <MdFormatListNumbered className="w-5 h-5" />

        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`p-2 rounded-lg ${editor.isActive('codeBlock') ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
        >
          <MdCode className="w-5 h-5" />
        </button>
      </div>
      <EditorContent editor={editor} className="p-4 min-h-[200px] focus:outline-none" />
    </div>
  );
}
