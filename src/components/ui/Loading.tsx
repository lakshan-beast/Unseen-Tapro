// import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-2 items-center justify-center">
        {/* <div className="w-4 h-4 rounded-full bg-emerald-400 animate-bounce [animation-delay:.7s]" />
        <div className="w-4 h-4 rounded-full bg-emerald-600 animate-bounce [animation-delay:.3s]" />
        <div className="w-4 h-4 rounded-full bg-emerald-400 animate-bounce [animation-delay:.7s]" /> */}
        <div
  className="w-10 h-10 border-4 border-t-emerald-500 border-gray-800 rounded-full animate-spin"
></div>
      </div>
      Coming Soon...
    </div>
  );
};

export default Loader;
