import React from "react";
import Input from "./UI/Input/Input";
import Select from "./UI/Select/Select";
import Button from "./UI/Button/Button";
import styles from './PostFilter.module.css'

export default function PostFilter({ filter, setFilter,setModal,limit,setLimit,changePage }) {
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
			<Select value={limit}
					onChange={value=>{
						setLimit(value);
						sessionStorage.setItem('quantity',value);
						changePage(1);
					}}
					defaultValue='Quantity'
					options={[
						{value:5,name:'5'},
						{value:10,name:'10'},
						{value:25,name:'25'},
						{value:-1,name:'Show all'},
					]}
			/>
			<Button onClick={() => setModal(true)}>Add new post</Button>
		</div>
	);
}
