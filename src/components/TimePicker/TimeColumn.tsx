import type React from "react";
import { useRef, useEffect } from "react";
import { TimeColumn as StyledTimeColumn, TimeItem } from "./styled";
import { type TimeColumnProps } from "./types";

const TimeColumn: React.FC<TimeColumnProps> = ({
  type,
  value,
  onChange,
  step = 1,
  disabled = false
}) => {
  const columnRef = useRef<HTMLDivElement>(null);
  const max = type === "hour" ? 24 : 60;
  const items = Array.from({ length: Math.floor(max / step) }, (_, i) => i * step);

  // 滚动到选中项
  useEffect(() => {
    if ((columnRef.current != null) && value !== undefined) {
      const itemHeight = 28; // 每项高度
      const scrollTop = Math.floor(value / step) * itemHeight;
      columnRef.current.scrollTop = scrollTop;
    }
  }, [value, step]);

  const handleItemClick = (newValue: number): void => {
    if (!disabled) {
      onChange(newValue);
      // 点击时滚动到正确位置
      if (columnRef.current != null) {
        const itemHeight = 28;
        const scrollTop = Math.floor(newValue / step) * itemHeight;
        columnRef.current.scrollTop = scrollTop;
      }
    }
  };

  return (
    <StyledTimeColumn ref={columnRef}>
      {items.map((item) => (
        <TimeItem
          key={item}
          selected={item === value}
          onClick={() => { handleItemClick(item); }}
          data-testid={`time-${type}-${item}`}
        >
          {String(item).padStart(2, "0")}
        </TimeItem>
      ))}
    </StyledTimeColumn>
  );
};

export default TimeColumn;
