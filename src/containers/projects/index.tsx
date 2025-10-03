import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export function Projects() {
	return (
		<section className="section-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
			{projects.map((p) => (
				<ProjectCard key={p.title} />
			))}
		</section>
	);
}
