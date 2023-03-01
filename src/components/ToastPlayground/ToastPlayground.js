import React from "react";

import styles from "./ToastPlayground.module.css";

import ToastShelf from "../ToastShelf";
import Button from "../Button";
import { ToastContext } from "../ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
const VARIANT_DEFAULT = "notice";

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_DEFAULT);
  const { createToast } = React.useContext(ToastContext);

  function handleSubmitToast(event) {
    event.preventDefault();
    createToast(message, variant);
    setVariant(VARIANT_DEFAULT);
    setMessage("");
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />
      <div className={styles.controlsWrapper}>
        <form onSubmit={handleSubmitToast}>
          <MessageRow message={message} setMessage={setMessage} />

          <VariantRow
            variants={VARIANT_OPTIONS}
            variant={variant}
            setVariant={setVariant}
          />

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
function MessageRow({ message, setMessage }) {
  return (
    <div className={styles.row}>
      <label
        htmlFor="message"
        className={styles.label}
        style={{ alignSelf: "baseline" }}
      >
        Message
      </label>
      <div className={styles.inputWrapper}>
        <textarea
          required={true}
          id="message"
          className={styles.messageInput}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
    </div>
  );
}
function VariantRow({ variants, variant, setVariant }) {
  return (
    <div className={styles.row}>
      <div className={styles.label}>Variant</div>
      <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
        {variants.map((variantOption, idx) => {
          const variantId = `variant-${variantOption}`;
          return (
            <label htmlFor={variantId} key={idx}>
              <input
                required={true}
                id={variantId}
                type="radio"
                name="variant"
                value={variantOption}
                checked={variant === variantOption}
                onChange={(event) => {
                  setVariant(event.target.value);
                }}
              />
              {variantOption}
            </label>
          );
        })}
      </div>
    </div>
  );
}
export default ToastPlayground;
