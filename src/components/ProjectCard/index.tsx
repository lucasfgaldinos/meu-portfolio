import { Lock, SquareArrowOutUpRight } from "lucide-react";
import type { Projects } from "../../types/projects";
import { SkillCard } from "../SkillCard";
import "../../css/highlightButton.css";

export function ProjectCard({
	title,
	description,
	banner,
	links,
	technologies,
}: Projects) {
	return (
		<div className="max-w-md rounded-2xl flex flex-col bg-bg-card border border-neutral">
			<div className="h-52 w-full relative overflow-hidden">
				<img
					className="w-full h-52 object-cover rounded-t-2xl brightness-75"
					src={banner}
					alt={`Banner do projeto.`}
				/>
			</div>
			<div className="p-4 flex flex-col flex-1">
				<div>
					<strong className="text-base lg:text-lg">{title}</strong>

					<hr className="mt-4 text-neutral" />

					<p className="text-xs md:text-sm mt-4">{description}</p>

					<div className="flex flex-wrap gap-2 mt-4">
						{technologies.map((t) => (
							<SkillCard key={t} name={t} />
						))}
					</div>
				</div>

				<div className="flex items-end justify-between mt-8 flex-1">
					<div>
						{links.deploy ? (
							<a
								className="highlight-button"
								href={links.deploy}
								target="_blank"
								rel="noopener noreferrer"
							>
								Site <SquareArrowOutUpRight size={16} />
							</a>
						) : undefined}
					</div>

					{links.repository ? (
						<a
							href={links.repository}
							target="_blank"
							rel="noopener noreferrer"
							className="highlight-button"
						>
							Código <SquareArrowOutUpRight size={16} />
						</a>
					) : undefined}

					{!links.deploy && !links.repository ? (
						<div className="flex items-center justify-center gap-2 text-light font-medium text-base border border-light rounded-full w-full h-14">
							Projeto privado <Lock size={16} />
						</div>
					) : undefined}
				</div>
			</div>
		</div>
	);
}
