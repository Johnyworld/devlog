import { ReactNode } from "react";
import "./Center.css";

interface Props {
  children: ReactNode;
}

const Center = ({ children }: Props) => {
  return <div className="center">{children}</div>;
};

export default Center;
