import React from "react";
import { createPortal } from "react-dom";

const LoadingOverlay = () => {
  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-white"></div>
    </div>,
    document.body
  );
};

export default LoadingOverlay;
