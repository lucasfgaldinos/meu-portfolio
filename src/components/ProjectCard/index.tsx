import { HighlightButton } from "../HighlightButton";
import { SkillCard } from "../SkillCard";

export function ProjectCard() {
	return (
		<div className="max-w-md rounded-2xl flex flex-col bg-white/10 backdrop-blur-lg shadow-lg">
			<div className="h-64 w-full">
				<img
					className="w-full h-full object-cover rounded-t-2xl"
					src="https://tse2.mm.bing.net/th/id/OIP.9jaEXvLBeePFRtuw6W3wDAHaEn?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
					alt="Imagem"
				/>
			</div>
			<div className="p-2 md:p-4 flex flex-col justify-between h-full">
				<div>
					<strong className="text-base md:text-xl">Projeto Superman</strong>

					<p className="text-xs md:text-base mt-4">
						Filme de 2025 com participação especial de Lucas Galdino, estrela
						mundial da programação. Contudo, ele Lucas
					</p>

					<div className="flex flex-wrap gap-2 mt-4">
						<SkillCard name="React" />
						<SkillCard name="TailwindCSS" />
						<SkillCard name="Zod" />
						<SkillCard name="Kriptonita" />
					</div>
				</div>

				<div className="flex items-center justify-between">
					<HighlightButton>Ver código</HighlightButton>
				</div>
			</div>
		</div>
	);
}
