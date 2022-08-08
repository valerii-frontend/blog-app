import React, { useState } from "react";

export default function Counter() {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<div>{counter}</div>
			<button onClick={() => setCounter((p) => p + 1)}>Increase</button>
			<button onClick={() => setCounter((p) => p - 1)}>Decrease</button>
		</div>
	);
}
