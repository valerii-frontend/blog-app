import React from "react";
import styles from "./LoadBar.module.css";

export default function LoadBar() {
	return (
		<div className={styles.loadbar}>
			<div className={styles.volume}></div>
			{/*<div className={styles.text}>Loading...</div>*/}
			<div className={styles.text}>
				<span>L</span>
				<span>o</span>
				<span>a</span>
				<span>d</span>
				<span>i</span>
				<span>n</span>
				<span>g</span>
				<span>.</span>
				<span>.</span>
				<span>.</span>
			</div>
		</div>
	);
}
