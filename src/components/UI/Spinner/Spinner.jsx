import React from "react";
import styles from "./Spinner.module.css";

export default function Spinner() {
	return (
		<div className={styles.wrap}>
			<div className={styles.spinner}>
				<span>Loading</span>
			</div>
		</div>
	);
}
