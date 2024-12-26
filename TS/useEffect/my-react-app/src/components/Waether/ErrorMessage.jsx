import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <p style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>{error}</p>
  );
};

export default ErrorMessage;
