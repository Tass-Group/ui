import type React from "react";
import { useState, useCallback } from "react";
import { SwitchWrapper, Handle, Children } from "./styled";
import type { SwitchProps } from "./types";

const Switch: React.FC<SwitchProps> = ({
  checked: checkedProp,
  defaultChecked = false,
  disabled = false,
  size = "default",
  onChange,
  checkedChildren,
  unCheckedChildren,
  className,
  style,
  loading = false
}) => {
  const [checkedState, setCheckedState] = useState(defaultChecked);
  const checked = checkedProp ?? checkedState;

  const handleClick = useCallback(() => {
    if (disabled || loading) return;

    const newChecked = !checked;
    if (checkedProp === undefined) {
      setCheckedState(newChecked);
    }
    onChange?.(newChecked);
  }, [checked, checkedProp, disabled, loading, onChange]);

  return (
    <SwitchWrapper
      role="switch"
      aria-checked={checked}
      type="button"
      $checked={checked}
      $disabled={disabled || loading}
      $size={size}
      onClick={handleClick}
      className={className}
      style={style}
    >
      {(checkedChildren !== undefined || unCheckedChildren !== undefined) && (
        <Children $checked={checked} $size={size}>
          {checked ? checkedChildren : unCheckedChildren}
        </Children>
      )}
      <Handle
        data-testid="switch-handle"
        $checked={checked}
        $size={size}
        $loading={loading}
      />
    </SwitchWrapper>
  );
};

export default Switch;
