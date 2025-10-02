import { SkillCard } from "../../components/SkillCard";
import { technologies } from "../../data/technologies";

export function Skills() {
	return (
		<div>
			<section className="section-container flex flex-wrap gap-6 justify-center items-center">
				{technologies.map((skill) => (
					<SkillCard key={skill} name={skill} />
				))}
			</section>
		</div>
	);
}
