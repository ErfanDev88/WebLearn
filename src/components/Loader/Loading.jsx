import React from "react";

function PageNotFound() {
  return (
    <>
      <div className="flex min-h-screen place-content-center">
        <div className="flex items-center gap-x-3 text-gray-300 text-2xl">
          درحال بارگذاری
          <span className="h-10 w-10 block rounded-full border-4 border-t-blue-400 animate-spin"></span>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
