import "../../styles.css";
import { Requirement } from "../requirement/requirement";
import { useCallback, useEffect } from "react";

export const Requirements = ({ value, requirements, onValidChange }) => {
  const validChangeCb = useCallback(onValidChange, []);

  useEffect(() => {
    validChangeCb(requirements.every((r) => r.validator(value)));
  }, [value, requirements, validChangeCb]);

  return requirements.map((r, index) => (
    <Requirement
      key={index}
      value={value}
      requirement={r}
      onValidChange={onValidChange}
    />
  ));
};
