import { ReactNode } from "react";
import "./PageContent.css";

interface Props {
  children: ReactNode;
}

const PageContent = ({ children }: Props) => {
  return <section className="page-content">{children}</section>;
};

export default PageContent;
