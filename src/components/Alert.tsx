import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <h1 className="alert alert-primary alert-dismissible fade show">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={onClose}
      ></button>
    </h1>
  );
};

export default Alert;
