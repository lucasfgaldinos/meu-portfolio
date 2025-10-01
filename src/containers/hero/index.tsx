import { DarkVeil } from "../../components/DarkVeil";

import style from "./style.module.css";

export function Hero() {
	return (
		<main className="w-full h-screen">
			<DarkVeil speed={1} warpAmount={2.5} />

			<div className="absolute inset-0 flex flex-col items-center justify-center">
				<h1
					className={`${style["text-shadow"]} text-8xl font-light text-light text-center`}
				>
					Lucas Galdino
				</h1>
				<h2
					className={`${style["text-shadow"]} text-5xl font-light text-light text-center mt-10`}
				>
					Desenvolvedor Web Full Stack
				</h2>
			</div>
		</main>
	);
}
