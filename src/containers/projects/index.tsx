import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export function Projects() {
	const [_emblaRef] = useEmblaCarousel({ align: "end", dragFree: false }, [
		Autoplay({
			delay: 2000,
			playOnInit: true,
			stopOnMouseEnter: true,
		}),
	]);

	return (
		<section className="section-container grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{projects.map((p) => (
				<ProjectCard key={p.title} />
			))}
		</section>
	);
}
