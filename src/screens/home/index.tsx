import { DarkVeil } from "../../components/DarkVeil";
import { About, Footer, Hero, Skills } from "../../containers";

export function Home() {
	return (
		<>
			<DarkVeil speed={1} warpAmount={2.5} />
			<Hero />
			<About />
			<Skills />
			<Footer />
		</>
	);
}
