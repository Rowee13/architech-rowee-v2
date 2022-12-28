import { useState, useRef } from "react";
import TooltipContent from "./TooltipContent";

const Tooltip = ({ children: tooltipTarget, tooltipContent }) => {
  const targetRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipProperties, setTooltipProperties] = useState({
    tooltipBottom: 0,
    tooltipLeft: 0,
  });

  const handleShowTooltop = () => {
    const tooltipHalfWidth =
      targetRef.current.getBoundingClientRect().width / 2;
    const tooltipHieght = targetRef.current.getBoundingClientRect().height;

    setTooltipProperties({
      tooltipBottom: tooltipHieght,
      tooltipLeft: tooltipHalfWidth,
    });

    setShowTooltip(true);
  };

  return (
    <div
      ref={targetRef}
      onMouseEnter={handleShowTooltop}
      onMouseLeave={() => setShowTooltip(false)}
      className="inline relative"
    >
      <TooltipContent
        show={showTooltip}
        bottom={tooltipProperties.tooltipBottom}
        left={tooltipProperties.tooltipLeft}
      >
        {tooltipContent}
      </TooltipContent>
      <div className="cursor-pointer">{tooltipTarget}</div>
    </div>
  );
};

export default Tooltip;
