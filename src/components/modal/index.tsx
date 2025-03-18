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
                <button className={styles.closeButton} onClick={onClose}>×</button>

                {imageDetails.imgSrc && <Image src={imageDetails.imgSrc} alt={imageDetails.meta} className={styles.image} />}
            </div>
        </div>
    );
};

export default Modal;