import { BigButton } from "./BigButton";
import React from "react";
import { Image, Button } from "antd";

export function ConfirmOrCancel({
  onCancel,
  onConfirm,
  confirmTitle = "Confirm",
  leftBlock,
  hideCancel,
  disabled,
}) {
  const styles = {
    actions: {
      display: "flex",
      justifyContent: "space-between",
    },
    cancel: {
      marginRight: 8,
    },
  };

  return (
    <div style={styles.actions}>
      <div>{leftBlock}</div>
      <div style={{ gap: 18, display: "flex" }}>
        {!hideCancel ? (
          <Button
            style={{
              border: "1px solid #F44336",
              color: " #F44336",
            }}
            size="large"
            onClick={onCancel}
          >
            Cancel
          </Button>
        ) : null}

        <Button
          type="primary"
          style={{ background: "#F44336", color: "white" }}
          size="large"
          onClick={onConfirm}
        >
          {confirmTitle}
        </Button>
      </div>
    </div>
  );
}
