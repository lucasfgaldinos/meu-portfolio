import { Rocket, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "react-scroll";
import { HighlightButton } from "../../components/HighlightButton";

export function Hero() {
	return (
		<section>
			<div className="section-container flex flex-col items-center justify-center h-screen">
				<h1
					className={
						"white-text-shadow text-5xl md:text-8xl font-light text-light text-center"
					}
				>
					Lucas Galdino
				</h1>
				<h2
					className={
						"white-text-shadow text-xl md:text-4xl font-light text-light text-center mt-6 md:mt-9"
					}
				>
					Desenvolvedor Web Full Stack
				</h2>

				<div className="flex flex-col md:flex-row items-center gap-9 mt-16">
					<Button to="projects" smooth={true} duration={500}>
						<HighlightButton>
							Projetos de destaque <Rocket size={16} />
						</HighlightButton>
					</Button>
					<a
						href="/DesenvolvedorFullStack-LucasGaldino.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						<HighlightButton>
							Ver CV <SquareArrowOutUpRight size={16} />
						</HighlightButton>
					</a>
				</div>
			</div>

			<div className="absolute left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-8">
				<a
					href="https://github.com/lucasfgaldinos"
					target="_blank"
					rel="noopener noreferrer"
					className="text-light/70 hover:text-light text-xs md:text-base font-medium flex items-center gap-2"
				>
					GitHub <SquareArrowOutUpRight size={16} />
				</a>
				<a
					href="https://www.linkedin.com/in/lucas-fernando-galdino-da-silva/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-light/70 hover:text-light text-xs md:text-base font-medium flex items-center gap-2"
				>
					LinkedIn <SquareArrowOutUpRight size={16} />
				</a>
			</div>
		</section>
	);
}
