import { Rocket, SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-scroll";
import "../../css/highlightButton.css";

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
					<Link to="projects" smooth={true} duration={500}>
						<button className="highlight-button" type="button">
							Projetos de destaque <Rocket size={16} />
						</button>
					</Link>
					<a
						className="highlight-button"
						href="/DesenvolvedorFullStack-LucasGaldino.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						Ver CV <SquareArrowOutUpRight size={16} />
					</a>
				</div>
			</div>

			<div className="absolute left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-8">
				<a
					href="https://github.com/lucasfgaldinos"
					target="_blank"
					rel="noopener noreferrer"
					className="text-light/70 hover:text-light text-xs md:text-base font-medium flex items-center gap-2 transition-colors"
				>
					GitHub <SquareArrowOutUpRight size={16} />
				</a>
				<a
					href="https://www.linkedin.com/in/lucas-fernando-galdino-da-silva/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-light/70 hover:text-light text-xs md:text-base font-medium flex items-center gap-2 transition-colors"
				>
					LinkedIn <SquareArrowOutUpRight size={16} />
				</a>
			</div>
		</section>
	);
}
