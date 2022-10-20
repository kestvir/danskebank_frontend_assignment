import { ReactNode } from "react";

export type SpinnerProps = {
  isAppCentered?: boolean;
  children?: ReactNode;
};

// Could also let it accept various classNames as a prop
export const Spinner = ({ isAppCentered = false, children }: SpinnerProps) => {
  const className = isAppCentered
    ? "spinner spinner--position-app-centered"
    : "spinner";

  return (
    <span className={className} role="status">
      {children}
    </span>
  );
};
