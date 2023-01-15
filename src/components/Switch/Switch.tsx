import { useState } from "react";
import { StyleSwitch } from "./styles";

interface ISwitchProps {
  darkTheme: boolean
  toggle: () => void
}

const Switch = ({
  darkTheme,
  toggle
}: ISwitchProps) => {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    toggle();
    setIsToggled(!isToggled);
  };

  return (
    <StyleSwitch>
      <input type="checkbox" checked={darkTheme} onChange={onToggle} />
      <span className="switch" />
    </StyleSwitch>
  );
}
export default Switch;