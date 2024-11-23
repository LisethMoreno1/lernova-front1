// GlobalStyles.js

import { GlobalStyles as MuiGlobalStyles } from "@mui/material";

const GlobalStyles = () => {
  return (
    <MuiGlobalStyles
      styles={{
        "*": {
          "&::-webkit-scrollbar": {
            width: "12px",
            height: "12px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "linear-gradient(180deg, #cccccc, #868484)",
            borderRadius: "8px",
            border: "2px solid transparent",
            backgroundClip: "padding-box",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "linear-gradient(180deg, #a8a7a7, #6b6b6b)",
            backgroundClip: "padding-box",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f0f0f0",
            borderRadius: "5px",
          },
          "&::-webkit-scrollbar-button": {
            display: "none",
          },
        },
      }}
    />
  );
};

export default GlobalStyles;
