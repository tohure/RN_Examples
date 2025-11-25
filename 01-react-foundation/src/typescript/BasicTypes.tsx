export const BasicTypes = () => {
	const name: string = "Tohure";
	const age: number = 37;
	const isActive: boolean = true;

	const powers: string[] = ["Android", "Kotlin", "Gradle", "React Native"];

	return (
		<>
			<h3>Tipos Básicos</h3>
			{name} {age} {isActive ? "true" : "false"}
			<br />
			{powers.join(", ")}
		</>
	);
};
