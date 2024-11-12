import React from "react";
import {
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon,
  DocumentIcon,
  AcademicCapIcon,
} from "@heroicons/react/outline";

const TestIcons = () => {
  return (
    <div className="space-x-4">
      <BoldIcon className="w-6 h-6 text-blue-500" />
      <ItalicIcon className="w-6 h-6 text-blue-500" />
      <StrikethroughIcon className="w-6 h-6 text-blue-500" />
      <DocumentIcon className="w-6 h-6 text-blue-500" />
      <AcademicCapIcon className="w-6 h-6 text-blue-500" />
    </div>
  );
};

export default TestIcons;
