import { useState } from "react";

export default function ReadMore({ text, maxChars = 100 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => setIsExpanded(prev => !prev);

  if (text.length <= maxChars) return <p>{text}</p>;

  return (
    <p className="text-white">
      {isExpanded ? text : text.slice(0, maxChars) + "... "}
      <button onClick={toggleText} className="text-blue-300 underline ml-2">
        {isExpanded ? "Read less" : "Read more"}
      </button>
    </p>
  );
}