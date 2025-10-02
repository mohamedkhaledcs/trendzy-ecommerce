import React, { useEffect } from "react";
import styles from "../styles/components.module.css";

function Toast({ message, type = "info", duration = 3000, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`${styles.toast} ${styles[`toast-${type}`]}`}>{message}</div>
  );
}

export default Toast;
