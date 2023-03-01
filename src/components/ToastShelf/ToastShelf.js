import React from "react";
import { ToastContext } from "../ToastProvider";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { handleDismissToastFromList, toastList } =
    React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toastList.map((toast) => {
        return (
          <li className={styles.toastWrapper} key={toast.id}>
            <Toast
              variant={toast.variant}
              message={toast.message}
              handleDismiss={() => handleDismissToastFromList(toast.id)}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
