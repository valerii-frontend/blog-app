import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
	return <input {...props} className={styles.input} ref={ref} />;
});
export default Input;
