import type { Projects } from "../../types/projects";
import { HighlightButton } from "../HighlightButton";
import { SkillCard } from "../SkillCard";

export function ProjectCard({
	title,
	description,
	banner,
	links,
	technologies,
}: Projects) {
	return (
		<div className="max-w-md rounded-2xl flex flex-col bg-bg-card shadow-lg">
			<div className="w-full relative overflow-hidden">
				<img
					className="w-full h-64 object-cover rounded-t-2xl brightness-75"
					src={banner}
					alt={`Banner do projeto.`}
				/>
			</div>
			<div className="p-2 md:p-4 flex flex-col justify-between">
				<div>
					<strong className="text-base md:text-xl">{title}</strong>

					<hr className="mt-4 text-neutral" />

					<p className="text-xs md:text-base mt-4">{description}</p>

					<div className="flex flex-wrap gap-2 mt-4">
						{technologies.map((t) => (
							<SkillCard key={t} name={t} />
						))}
					</div>
				</div>

				<div className="flex items-center justify-between">
					{links.deploy && links.repository ? (
						<HighlightButton>Acessar</HighlightButton>
					) : undefined}
				</div>
			</div>
		</div>
	);
}
