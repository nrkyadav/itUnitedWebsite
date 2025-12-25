"use client";
import React from "react";
import { Modal } from "antd";
import styles from "./CommonModal.module.css";
import { X } from "lucide-react";

const CommonModal = ({
  isOpen,
  onClose,
  children,
  width = 800,
  title = "",
  description = "",
}) => {
  const hasCustomHeader = Boolean(title || description);

  return (
    <Modal
      open={isOpen}
      footer={null}
      closable={!hasCustomHeader}  
      maskClosable={false}
      onCancel={onClose}
      width={width}
      centered
      className={hasCustomHeader ? styles.customModal : ""} 
    >
      {hasCustomHeader ? (
        <>
          <div className={styles.headerBox}>
            <div>
              <h2 className={styles.headerTitle}>{title}</h2>
              {description && (
                <p className={styles.headerSubtitle}>{description}</p>
              )}
            </div>

            <button className={styles.closeBtn} onClick={onClose}>
              <X size={22} />
            </button>
          </div>

          <div className={styles.modalBody}>{children}</div>
        </>
      ) : (
        <>{children}</>
      )}
    </Modal>
  );
};

export default CommonModal;
