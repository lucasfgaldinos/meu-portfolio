import { DarkVeil } from "../../components/DarkVeil";
import { About, Final, Footer, Hero, Projects, Skills } from "../../containers";

export function Home() {
	return (
		<>
			<DarkVeil />

			<Hero />
			<About />
			<Skills />
			<Projects />
			<Final />
			<Footer />
		</>
	);
}
