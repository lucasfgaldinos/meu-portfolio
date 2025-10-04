import { Element } from "react-scroll";
import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export function Projects() {
	return (
		<Element name="projects">
			<section className="section-container flex flex-col items-center lg:items-stretch lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
				{projects.map((p) => (
					<ProjectCard
						title={p.title}
						description={p.description}
						banner={p.banner}
						links={{ ...p.links }}
						technologies={p.technologies}
						key={p.title}
					/>
				))}
			</section>
		</Element>
	);
}
