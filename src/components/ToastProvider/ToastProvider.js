import React from "react";
import useEscapeKey from "../../hooks/UseEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);
  function createToast(message, variant) {
    const newToast = {
      message: message,
      variant: variant,
      id: Math.random(),
    };
    const newToastList = [...toastList, newToast];
    setToastList(newToastList);
  }

  function handleDismissToastFromList(toastId) {
    const newToastList = toastList.filter((toast) => toast.id !== toastId);
    setToastList(newToastList);
  }

  const dismissAllToasts = React.useCallback(() => {
    setToastList([]);
  }, []);

  useEscapeKey(dismissAllToasts);

  const value = {
    toastList,
    createToast,
    handleDismissToastFromList,
    dismissAllToasts,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
