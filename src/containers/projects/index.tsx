import { ProjectCard } from "../../components/ProjectCard";

export function Projects() {
	return (
		<section className="section-container grid grid-cols-1 md:grid-cols-3 gap-8">
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
		</section>
	);
}
