import React from "react";
import "../styles/ErrorPage.css";

export const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-message">
        <p>Page Not Found for this Route !!!</p>
      </div>
    </div>
  );
};

export default ErrorPage;
