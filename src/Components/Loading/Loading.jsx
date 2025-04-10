import React from "react";
import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <FadeLoader color="#27d7bf" />
    </div>
  );
};

export default Loading;
