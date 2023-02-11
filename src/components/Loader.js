import React from "react";

function Loader() {
  return (
    <div className="flex justify-center items-center p-3">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400" />
    </div>
  );
}
export default Loader;
