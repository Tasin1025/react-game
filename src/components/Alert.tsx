import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}
const Alert = ({children}: Props) => {
  return (
    <h1 className="alert alert-primary">{children}</h1>
  )
}

export default Alert