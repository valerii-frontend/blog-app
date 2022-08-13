import React from "react";
import Input from "./UI/Input/Input";
import Select from "./UI/Select/Select";
import Button from "./UI/Button/Button";
import styles from './PostFilter.module.css'

export default function PostFilter({ filter, setFilter,setModal }) {
	return (
		<div className={styles.filter}>
			<Input
				placeholder='Search...'
				value={filter.query}
				onChange={(e) => setFilter({ ...filter, query: e.target.value })}
			/>
			<Select
				defaultValue='Sort by'
				value={filter.sort}
				onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
				options={[
					{ value: "title", name: "By name" },
					{ value: "body", name: "By description" },
				]}
			/>
			<Button onClick={() => setModal(true)}>Add new post</Button>
		</div>
	);
}
