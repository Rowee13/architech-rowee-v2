const TooltipContent = ({ children, show, bottom, left }) => {
  return (
    <div
      className={`${
        show ? "block" : "hidden"
      } absolute transition-transform -translate-x-1/2 z-10 p-4 mb-3 rounded-lg border border-riptide-accent bg-bunker-gray-800 bg-opacity-80 shadow-card-shadow text-whisper-white w-max`}
      style={{
        bottom: bottom,
        left: left,
      }}
    >
      {children}
    </div>
  );
};

export default TooltipContent;
