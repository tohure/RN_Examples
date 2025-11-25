import { useState } from "react";

interface Options {
    initialValue: number;
}

export const useCounter = ({initialValue = 10}: Options) => {
	const [count, setCount] = useState(initialValue);

	const increaseBy = (value: number) => {
		setCount(count + value);
	};

	return {
		//Properties
		count,

		//Methods
		increaseBy,
	};
};
