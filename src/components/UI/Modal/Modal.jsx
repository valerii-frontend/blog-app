import React from 'react';
import styles from  './Modal.module.css'

const Modal = ({children,visible,setVisible}) => {
    const classes = visible?`${styles.modal} ${styles.active}`:styles.modal;

    return (
        <div className={classes} onClick={()=>setVisible(false)}>
            <div className={styles.content} onClick={e=>e.stopPropagation()}>{children}</div>
        </div>
    );
};

export default Modal;