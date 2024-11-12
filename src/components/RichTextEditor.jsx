//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Heading from "@tiptap/extension-heading";
import Blockquote from "@tiptap/extension-blockquote";
import { TextStyle } from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faStrikethrough,
  faCode,
  faParagraph,
  faHeading,
  faListUl,
  faListOl,
  faQuoteLeft,
  faUndo,
  faRedo,
  faMinus,
  faUnderline,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./RichTextEditor.module.css";
import ListItem from "@tiptap/extension-list-item";

const RichTextEditor = ({ editorContent, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      BulletList,
      OrderedList,
      TextStyle,
      Underline,
      ListItem,
      Heading.configure({ levels: [2] }), // Adding heading levels
      Blockquote,
    ],
    content: editorContent,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "shadow appearance-none min-h-[150px] border rounded w-full py-2 px-3 bg-white text-black text-sm mt-0 md:mt-3 leading-tight focus:outline-none focus:shadow-outline",
      },
    },
  });

  if (!editor) return null;

  return (
    // <div className="flex flex-col justify-stretch min-h-[200px] border rounded border-b-0">
    // <div className="flex items-center bg-slate-500 gap-2">
    <div className={styles.controlGroup}>
      <div className={styles.buttonGroup}>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-1 rounded-md ${
            editor.isActive("orderedList") ? "bg-blue-600" : "bg-gray-800"
          } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          <FontAwesomeIcon icon={faBold} className="w-4 h-4 text-white" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-1 rounded-md ${
            editor.isActive("orderedList") ? "bg-blue-600" : "bg-gray-800"
          } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          <FontAwesomeIcon icon={faItalic} className="w-4 h-4 text-white" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-1 rounded-md ${
            editor.isActive("orderedList") ? "bg-blue-600" : "bg-gray-800"
          } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          <FontAwesomeIcon icon={faUnderline} className="w-4 h-4 text-white" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={`p-1 rounded-md ${
            editor.isActive("strike") ? "bg-blue-600" : "bg-gray-800"
          } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          <FontAwesomeIcon
            icon={faStrikethrough}
            className="w-4 h-4 text-white"
          />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={`p-1 rounded-md ${
            editor.isActive("code") ? "bg-blue-600" : "bg-gray-800"
          } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          <FontAwesomeIcon icon={faCode} className="w-4 h-4 text-white" />
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`p-1 rounded-md ${
            editor.isActive("paragraph") ? "bg-blue-600" : "bg-gray-800"
          } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          <FontAwesomeIcon icon={faParagraph} className="w-4 h-4 text-white" />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`p-1 rounded-md ${
            editor.isActive("heading", { level: 1 })
              ? "bg-blue-600"
              : "bg-gray-800"
          } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          <FontAwesomeIcon icon={faHeading} className="w-4 h-4 text-white" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-1 rounded-md ${
            editor.isActive("bulletList") ? "bg-blue-600" : "bg-gray-800"
          } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          <FontAwesomeIcon icon={faListUl} className="w-4 h-4 text-white" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-1 rounded-md ${
            editor.isActive("orderedList") ? "bg-blue-600" : "bg-gray-800"
          } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          <FontAwesomeIcon icon={faListOl} className="w-4 h-4 text-white" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-1 rounded-md  ${
            editor.isActive("blockquote") ? "bg-blue-600" : "bg-gray-800"
          } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          <FontAwesomeIcon icon={faQuoteLeft} className="w-4 h-4 text-white" />
        </button>
        {/* <button
          onClick={() => editor.chain().focus().toggleMinus().run()}
          className={`p-1 rounded-md ${
            editor.isActive("orderedList") ? "bg-blue-600" : "bg-gray-800"
          } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          <FontAwesomeIcon icon={faMinus} className="w-4 h-4 text-white" />
        </button> */}

        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className="p-1 rounded-md bg-gray-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <FontAwesomeIcon icon={faUndo} />
        </button>
        <button
          onClick={() => {
            console.log("Redo clicked");
            editor.chain().focus().redo().run();
          }}
          disabled={!editor.can().chain().focus().redo().run()}
          className="p-1 rounded-md bg-gray-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <FontAwesomeIcon icon={faRedo} className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Editor Content */}
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;

//         {Paragraph Button}
//         <button
//           onClick={() => {
//             console.log("Paragraph clicked");
//             editor.chain().focus().setParagraph().run();
//           }}
//           className={`${styles.button} ${
//             editor.isActive("paragraph") ? styles.activeButton : ""
//           }`}
//         >
//           <FontAwesomeIcon icon={faParagraph} className="w-4 h-4 text-white" />
//         </button>

//         Heading Button
//         <button
//           onClick={() => {
//             console.log("Heading clicked");
//             editor.chain().focus().toggleHeading({ level: 1 }).run();
//           }}
//           className={`${styles.button} ${
//             editor.isActive("heading", { level: 1 }) ? styles.activeButton : ""
//           }`}
//         >
//           <FontAwesomeIcon icon={faHeading} className="w-4 h-4 text-white" />
//         </button>

//         Bullet List Button
//         <button
//           onClick={() => {
//             console.log("Bullet List clicked");
//             editor.chain().focus().toggleBulletList().run();
//           }}
//           className={`${styles.button} ${
//             editor.isActive("bulletList") ? styles.activeButton : ""
//           }`}
//         >
//           <FontAwesomeIcon icon={faListUl} className="w-4 h-4 text-white" />
//         </button>

//         Ordered List Button
//         <button
//           onClick={() => {
//             console.log("Ordered List clicked");
//             editor.chain().focus().toggleOrderedList().run();
//           }}
//           className={`${styles.button} ${
//             editor.isActive("orderedList") ? styles.activeButton : ""
//           }`}
//         >
//           <FontAwesomeIcon icon={faListOl} className="w-4 h-4 text-white" />
//         </button>

//         Blockquote Button
//         <button
//           onClick={() => {
//             console.log("Blockquote clicked");
//             editor.chain().focus().toggleBlockquote().run();
//           }}
//           className={`${styles.button} ${
//             editor.isActive("blockquote") ? styles.activeButton : ""
//           }`}
//         >
//           <FontAwesomeIcon icon={faQuoteLeft} className="w-4 h-4 text-white" />
//         </button>

//         Undo Button
//         <button
//           onClick={() => {
//             console.log("Undo clicked");
//             editor.chain().focus().undo().run();
//           }}
//           disabled={!editor.can().chain().focus().undo().run()}
//           className="p-1 rounded-md bg-gray-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <FontAwesomeIcon icon={faUndo} className="w-4 h-4 text-white" />
//         </button>
