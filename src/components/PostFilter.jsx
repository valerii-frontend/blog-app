import React from "react";
import Input from "./UI/Input/Input";
import Select from "./UI/Select/Select";

export default function PostFilter({filter,setFilter}) {
	return <>
		<Input placeholder='Search...' value={filter.query} onChange={e => setFilter({...filter,query:e.target.value})} />
		<Select
			defaultValue='Sort by'
			value={filter.sort}
			onChange={selectedSort => setFilter({...filter,sort:selectedSort})}
			options={[
				{ value: "title", name: "By name" },
				{ value: "description", name: "By description" },
			]}
		/>
	</>;
}
