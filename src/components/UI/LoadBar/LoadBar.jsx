import React from "react";
import styles from "./LoadBar.module.css";

export default function LoadBar() {
	return (
		<div className={styles.loadbar}>
			<div className={styles.volume}></div>
			<div className={styles.text}>Loading...</div>
		</div>
	);
}
