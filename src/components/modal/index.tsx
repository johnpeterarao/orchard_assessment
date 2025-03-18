import React from "react";
import styles from "./modal.module.css"; 
import { imageDTO } from "@/types/types";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageDetails: imageDTO;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageDetails}) => {
   
    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className={styles.overlay} onClick={handleBackdropClick}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>×</button>

                {imageDetails.imgSrc && <Image width={700} height={300} src={imageDetails.imgSrc} alt={imageDetails.alt} className={styles.modal__img} />}
            </div>
        </div>
    );
};

export default Modal;