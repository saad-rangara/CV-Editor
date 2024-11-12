// import { useEditor, EditorContent } from "@tiptap/react";
// import { Color } from "@tiptap/extension-color";
// import ListItem from "@tiptap/extension-list-item";
// import TextStyle from "@tiptap/extension-text-style";
// import { EditorProvider, useCurrentEditor } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import React from "react";
// import styles from "./RichTextEditor.module.css";

// // Import FontAwesomeIcon and the specific icons
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBold,
//   faItalic,
//   faStrikethrough,
//   faCode,
//   faParagraph,
//   faHeading,
//   faListUl,
//   faListOl,
//   faQuoteLeft,
//   faUndo,
//   faRedo,
//   faMinus,
//   faUnderline,
// } from "@fortawesome/free-solid-svg-icons";

// const MenuBar = () => {
//   const { editor } = useCurrentEditor();

//   if (!editor) {
//     return null;
//   }

//   return (
//     <div className={styles.controlGroup}>
//       <div className={styles.buttonGroup}>
//         <button
//           onClick={() => editor.chain().focus().toggleOrderedList().run()}
//           className={`p-1 rounded-md ${
//             editor.isActive("orderedList") ? "bg-blue-600" : "bg-gray-800"
//           } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         >
//           <FontAwesomeIcon icon={faBold} className="w-4 h-4 text-white" />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleOrderedList().run()}
//           className={`p-1 rounded-md ${
//             editor.isActive("orderedList") ? "bg-blue-600" : "bg-gray-800"
//           } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         >
//           <FontAwesomeIcon icon={faItalic} className="w-4 h-4 text-white" />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleOrderedList().run()}
//           className={`p-1 rounded-md ${
//             editor.isActive("orderedList") ? "bg-blue-600" : "bg-gray-800"
//           } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         >
//           <FontAwesomeIcon icon={faUnderline} className="w-4 h-4 text-white" />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleStrike().run()}
//           disabled={!editor.can().chain().focus().toggleStrike().run()}
//           className={`p-1 rounded-md ${
//             editor.isActive("strike") ? "bg-blue-600" : "bg-gray-800"
//           } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         >
//           <FontAwesomeIcon
//             icon={faStrikethrough}
//             className="w-4 h-4 text-white"
//           />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleCode().run()}
//           disabled={!editor.can().chain().focus().toggleCode().run()}
//           className={`p-1 rounded-md ${
//             editor.isActive("code") ? "bg-blue-600" : "bg-gray-800"
//           } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         >
//           <FontAwesomeIcon icon={faCode} className="w-4 h-4 text-white" />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().setParagraph().run()}
//           className={`p-1 rounded-md ${
//             editor.isActive("paragraph") ? "bg-blue-600" : "bg-gray-800"
//           } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         >
//           <FontAwesomeIcon icon={faParagraph} className="w-4 h-4 text-white" />
//         </button>
//         <button
//           onClick={() =>
//             editor.chain().focus().toggleHeading({ level: 1 }).run()
//           }
//           className={`p-1 rounded-md ${
//             editor.isActive("heading", { level: 1 })
//               ? "bg-blue-600"
//               : "bg-gray-800"
//           } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         >
//           <FontAwesomeIcon icon={faHeading} className="w-4 h-4 text-white" />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleBulletList().run()}
//           className={`p-1 rounded-md ${
//             editor.isActive("bulletList") ? "bg-blue-600" : "bg-gray-800"
//           } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         >
//           <FontAwesomeIcon icon={faListUl} className="w-4 h-4 text-white" />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleOrderedList().run()}
//           className={`p-1 rounded-md ${
//             editor.isActive("orderedList") ? "bg-blue-600" : "bg-gray-800"
//           } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         >
//           <FontAwesomeIcon icon={faListOl} className="w-4 h-4 text-white" />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleBlockquote().run()}
//           className={`p-1 rounded-md  ${
//             editor.isActive("blockquote") ? "bg-blue-600" : "bg-gray-800"
//           } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         >
//           <FontAwesomeIcon icon={faQuoteLeft} className="w-4 h-4 text-white" />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleOrderedList().run()}
//           className={`p-1 rounded-md ${
//             editor.isActive("orderedList") ? "bg-blue-600" : "bg-gray-800"
//           } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         >
//           <FontAwesomeIcon icon={faMinus} className="w-4 h-4 text-white" />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().undo().run()}
//           disabled={!editor.can().chain().focus().undo().run()}
//           className="p-1 rounded-md bg-gray-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <FontAwesomeIcon icon={faUndo} className="w-4 h-4 text-white" />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().redo().run()}
//           disabled={!editor.can().chain().focus().redo().run()}
//           className="p-1 rounded-md bg-gray-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <FontAwesomeIcon icon={faRedo} className="w-4 h-4 text-white" />
//         </button>
//       </div>
//     </div>
//   );
// };

// const extensions = [
//   Color.configure({ types: [TextStyle.name, ListItem.name] }),
//   TextStyle.configure({ types: [ListItem.name] }),
//   StarterKit.configure({
//     bulletList: {
//       keepMarks: true,
//       keepAttributes: false,
//     },
//     orderedList: {
//       keepMarks: true,
//       keepAttributes: false,
//     },
//   }),
// ];

// const content = `
// <h2>
//   Hi there,
// </h2>
// <p>
//   this is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
// </p>
// <ul>
//   <li>
//     That’s a bullet list with one …
//   </li>
//   <li>
//     … or two list items.
//   </li>
// </ul>
// <p>
//   Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
// </p>

// <p>
//   I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
// </p>
// <blockquote>
//   Wow, that’s amazing. Good work, boy! 👏
//   <br />
//   — Mom
// </blockquote>
// `;

// export default () => {
//   return (
//     <EditorProvider
//       slotBefore={<MenuBar />}
//       extensions={extensions}
//       content={content}
//       editorProps={{
//         attributes: {
//           class: "editor-wrapper", // add custom class for further styling if needed
//           style: {
//             color: "black !important", // Ensures text color is black
//             backgroundColor: "white", // Set background color
//           },
//         },
//       }}
//     ></EditorProvider>
//     // <EditorContent />
//   );
// };

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import BulletList from "@tiptap/extension-bullet-list";
// import ListItem from "@tiptap/extension-list-item";
// import OrderedList from "@tiptap/extension-ordered-list";
// import Heading from "@tiptap/extension-heading";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBold,
//   faItalic,
//   faStrikethrough,
//   faCode,
//   faParagraph,
//   faHeading,
//   faListUl,
//   faListOl,
//   faQuoteLeft,
//   faUndo,
//   faRedo,
//   faMinus,
//   faUnderline,
// } from "@fortawesome/free-solid-svg-icons";

// const RichTextEditor = ({ editorContent, onChange }) => {
//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       ListItem,
//       //   Heading.configure({
//       //     HTMLAttributes: {
//       //       class: "text-xl font-bold capitalize",
//       //       levels: [2],
//       //     },
//       //   }),
//       //   BulletList.configure({
//       //     HTMLAttributes: {
//       //       class: "list-disc ml-2",
//       //     },
//       //   }),
//       //   OrderedList.configure({
//       //     HTMLAttributes: {
//       //       class: "list-decimal ml-2",
//       //     },
//       //   }),
//     ],
//     immediatelyRender: false,
//     editorProps: {
//       attributes: {
//         class:
//           "shadow appearance-none min-h-[150px] border rounded w-full py-2 px-3 bg-white text-black text-sm mt-0 md:mt-3 leading-tight focus:outline-none focus:shadow-outline",
//       },
//     },
//     content: editorContent,
//     onUpdate: ({ editor }) => {
//       onChange(editor.getHTML());
//     },
//   });

//   if (!editor) {
//     return null;
//   }

//   return (
//     <div className="flex flex-col justify-stretch min-h-[200px] border rounded border-b-0">
//       <div className="flex items-center gap-2">
//         <button
//           onClick={() => editor.chain().focus().toggleOrderedList().run()}
//           className={`p-1 rounded-md ${
//             editor.isActive("orderedList") ? "bg-blue-600" : "bg-gray-800"
//           } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         >
//           <FontAwesomeIcon icon={faBold} className="w-4 h-4 text-white" />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleOrderedList().run()}
//           className={`p-1 rounded-md ${
//             editor.isActive("orderedList") ? "bg-blue-600" : "bg-gray-800"
//           } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         >
//           <FontAwesomeIcon icon={faItalic} className="w-4 h-4 text-white" />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleOrderedList().run()}
//           className={`p-1 rounded-md ${
//             editor.isActive("orderedList") ? "bg-blue-600" : "bg-gray-800"
//           } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         >
//           <FontAwesomeIcon icon={faUnderline} className="w-4 h-4 text-white" />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleStrike().run()}
//           disabled={!editor.can().chain().focus().toggleStrike().run()}
//           className={`p-1 rounded-md ${
//             editor.isActive("strike") ? "bg-blue-600" : "bg-gray-800"
//           } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         >
//           <FontAwesomeIcon
//             icon={faStrikethrough}
//             className="w-4 h-4 text-white"
//           />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleCode().run()}
//           disabled={!editor.can().chain().focus().toggleCode().run()}
//           className={`p-1 rounded-md ${
//             editor.isActive("code") ? "bg-blue-600" : "bg-gray-800"
//           } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         >
//           <FontAwesomeIcon icon={faCode} className="w-4 h-4 text-white" />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().setParagraph().run()}
//           className={`p-1 rounded-md ${
//             editor.isActive("paragraph") ? "bg-blue-600" : "bg-gray-800"
//           } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         >
//           <FontAwesomeIcon icon={faParagraph} className="w-4 h-4 text-white" />
//         </button>
//         <button
//           onClick={() =>
//             editor.chain().focus().toggleHeading({ level: 1 }).run()
//           }
//           className={`p-1 rounded-md ${
//             editor.isActive("heading", { level: 1 })
//               ? "bg-blue-600"
//               : "bg-gray-800"
//           } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         >
//           <FontAwesomeIcon icon={faHeading} className="w-4 h-4 text-white" />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleBulletList().run()}
//           className={`p-1 rounded-md ${
//             editor.isActive("bulletList") ? "bg-blue-600" : "bg-gray-800"
//           } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         >
//           <FontAwesomeIcon icon={faListUl} className="w-4 h-4 text-white" />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleOrderedList().run()}
//           className={`p-1 rounded-md ${
//             editor.isActive("orderedList") ? "bg-blue-600" : "bg-gray-800"
//           } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         >
//           <FontAwesomeIcon icon={faListOl} className="w-4 h-4 text-white" />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleBlockquote().run()}
//           className={`p-1 rounded-md  ${
//             editor.isActive("blockquote") ? "bg-blue-600" : "bg-gray-800"
//           } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         >
//           <FontAwesomeIcon icon={faQuoteLeft} className="w-4 h-4 text-white" />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleOrderedList().run()}
//           className={`p-1 rounded-md ${
//             editor.isActive("orderedList") ? "bg-blue-600" : "bg-gray-800"
//           } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         >
//           <FontAwesomeIcon icon={faMinus} className="w-4 h-4 text-white" />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().undo().run()}
//           disabled={!editor.can().chain().focus().undo().run()}
//           className="p-1 rounded-md bg-gray-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <FontAwesomeIcon icon={faUndo} className="w-4 h-4 text-white" />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().redo().run()}
//           disabled={!editor.can().chain().focus().redo().run()}
//           className="p-1 rounded-md bg-gray-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <FontAwesomeIcon icon={faRedo} className="w-4 h-4 text-white" />
//         </button>
//       </div>

//       {/* Editor Content */}
//       <EditorContent editor={editor} />
//     </div>
//   );
// };

// export default RichTextEditor;

//!working underlinw and most
// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import BulletList from "@tiptap/extension-bullet-list";
// import ListItem from "@tiptap/extension-list-item";
// import OrderedList from "@tiptap/extension-ordered-list";
// import Heading from "@tiptap/extension-heading";
// import TextStyle from "@tiptap/extension-text-style";
// import Underline from "@tiptap/extension-underline"; // Import Underline
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBold,
//   faItalic,
//   faStrikethrough,
//   faCode,
//   faParagraph,
//   faHeading,
//   faListUl,
//   faListOl,
//   faQuoteLeft,
//   faUndo,
//   faRedo,
//   faUnderline,
// } from "@fortawesome/free-solid-svg-icons";
// import styles from "./RichTextEditor.module.css"; // Import the CSS module

// const RichTextEditor = ({ editorContent, onChange }) => {
//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       TextStyle, // Add TextStyle for custom text formatting
//       Underline, // Add Underline extension
//       ListItem,
//       Heading.configure({ levels: [2] }),
//       BulletList,
//       OrderedList,
//     ],
//     editorProps: {
//       attributes: {
//         class: `${styles.editorWrapper} shadow appearance-none min-h-[150px] w-full py-2 px-3 bg-white text-black text-sm mt-0 md:mt-3 focus:outline-none`,
//       },
//     },
//     content: editorContent,
//     onUpdate: ({ editor }) => {
//       onChange(editor.getHTML());
//     },
//   });

//   if (!editor) {
//     return null;
//   }

//   return (
//     <div className={`${styles.editorContainer} border rounded`}>
//       <div className={`${styles.controlGroup} flex items-center gap-2`}>
//         <button
//           onClick={() => editor.chain().focus().toggleBold().run()}
//           className={`${styles.button} ${
//             editor.isActive("bold") ? styles.activeButton : ""
//           }`}
//         >
//           <FontAwesomeIcon icon={faBold} />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleItalic().run()}
//           className={`${styles.button} ${
//             editor.isActive("italic") ? styles.activeButton : ""
//           }`}
//         >
//           <FontAwesomeIcon icon={faItalic} />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleUnderline().run()} // Now supports underline
//           className={`${styles.button} ${
//             editor.isActive("underline") ? styles.activeButton : ""
//           }`}
//         >
//           <FontAwesomeIcon icon={faUnderline} />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleStrike().run()}
//           className={`${styles.button} ${
//             editor.isActive("strike") ? styles.activeButton : ""
//           }`}
//         >
//           <FontAwesomeIcon icon={faStrikethrough} />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleCode().run()}
//           className={`${styles.button} ${
//             editor.isActive("code") ? styles.activeButton : ""
//           }`}
//         >
//           <FontAwesomeIcon icon={faCode} />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().setParagraph().run()}
//           className={`${styles.button} ${
//             editor.isActive("paragraph") ? styles.activeButton : ""
//           }`}
//         >
//           <FontAwesomeIcon icon={faParagraph} />
//         </button>
//         <button
//           onClick={() =>
//             editor.chain().focus().toggleHeading({ level: 1 }).run()
//           }
//           className={`${styles.button} ${
//             editor.isActive("heading", { level: 1 }) ? styles.activeButton : ""
//           }`}
//         >
//           <FontAwesomeIcon icon={faHeading} />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleBulletList().run()}
//           className={`${styles.button} ${
//             editor.isActive("bulletList") ? styles.activeButton : ""
//           }`}
//         >
//           <FontAwesomeIcon icon={faListUl} />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleOrderedList().run()}
//           className={`${styles.button} ${
//             editor.isActive("orderedList") ? styles.activeButton : ""
//           }`}
//         >
//           <FontAwesomeIcon icon={faListOl} />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleBlockquote().run()}
//           className={`${styles.button} ${
//             editor.isActive("blockquote") ? styles.activeButton : ""
//           }`}
//         >
//           <FontAwesomeIcon icon={faQuoteLeft} />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().undo().run()}
//           disabled={!editor.can().chain().focus().undo().run()}
//           className={styles.button}
//         >
//           <FontAwesomeIcon icon={faUndo} />
//         </button>
//         <button
//           onClick={() => editor.chain().focus().redo().run()}
//           disabled={!editor.can().chain().focus().redo().run()}
//           className={styles.button}
//         >
//           <FontAwesomeIcon icon={faRedo} />
//         </button>
//       </div>

//       {/* Editor Content */}
//       <EditorContent editor={editor} />
//     </div>
//   );
// };

// export default RichTextEditor;
