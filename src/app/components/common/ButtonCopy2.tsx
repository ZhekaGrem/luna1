import { useState, useEffect } from 'react';
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

type CopyButtonProps = {
  text: string;
};

const ButtonCopy2: React.FC<CopyButtonProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center rounded-md border border-gray-300 px-2 py-1 text-sm font-medium text-black shadow-sm transition-all duration-200 ease-in-out hover:outline-none hover:ring-2 hover:ring-green-500 hover:ring-offset-2">
      {copied ? (
        <>
          <ClipboardDocumentCheckIcon className="h-4 w-4 text-green-500 sm:h-12 sm:w-14" />
          <span className="text-base text-green-500 md:text-xl lg:text-3xl">Copied!</span>
        </>
      ) : (
        <>
          <span className="text-xs md:text-xl xl:text-3xl">CA: {text}</span>
        </>
      )}
    </button>
  );
};

export default ButtonCopy2;
