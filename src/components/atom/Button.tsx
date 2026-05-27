import React from "react";

const CustomButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  console.log("CustomButton rendered");
  return (
    <button
      onClick={onClick}
      style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
    >
      {label}
    </button>
  );
};

export default React.memo(CustomButton);
