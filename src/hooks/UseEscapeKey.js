import React from "react";

function useEscapeKey(actionOnEscape) {
  // Code to dismiss all toasts

  React.useEffect(() => {
    function executeAction(event) {
      if (event.key === "Escape") {
        actionOnEscape();
      }
    }
    window.addEventListener("keydown", executeAction);
    return () => window.removeEventListener("keypress", executeAction);
  }, [actionOnEscape]);
}

export default useEscapeKey;
