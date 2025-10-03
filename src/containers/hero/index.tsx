import { Button } from "react-scroll";
import { HighlightButton } from "../../components/HighlightButton";

export function Hero() {
	return (
		<section>
			<div className="section-container flex flex-col items-center justify-center h-screen">
				<h1
					className={
						"white-text-shadow text-8xl font-light text-light text-center"
					}
				>
					Lucas Galdino
				</h1>
				<h2
					className={
						"white-text-shadow text-5xl font-light text-light text-center mt-10"
					}
				>
					Desenvolvedor Web Full Stack
				</h2>

				<div className="flex items-center gap-7 mt-14">
					<Button to="projects" smooth={true} duration={500}>
						<HighlightButton>Ver projetos</HighlightButton>
					</Button>
					<a
						href="/DesenvolvedorFullStack-LucasGaldino.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						<HighlightButton>Ver CV </HighlightButton>
					</a>
				</div>
			</div>
		</section>
	);
}
