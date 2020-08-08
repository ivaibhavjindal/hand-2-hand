import { useState } from "react";

export const useToggle = (initial = false) => {
  const [val, toggleVal] = useState(initial);

  const toggle = () => toggleVal(!val);
  return [val, toggle];
};
