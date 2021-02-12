import React from "react";
import ReactModal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#262626",
    border: "none",
    width: "100%",
    maxWidth: 500,
  },
};

export const Modal: React.FC<ReactModal["props"]> = ({
  children,
  ...props
}) => {
  return (
    <ReactModal style={customStyles} {...props}>
      {children}
    </ReactModal>
  );
};