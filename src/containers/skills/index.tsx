import { SkillCard } from "../../components/SkillCard";
import { technologies } from "../../data/technologies";

export function Skills() {
	return (
		<div>
			<section className="section-container">
				<div className="bg-white/5 backdrop-blur-lg p-6 md:p-10 rounded-xl shadow-lg flex flex-wrap gap-4 justify-center items-center">
					{technologies.map((skill) => (
						<SkillCard key={skill} name={skill} />
					))}
				</div>
			</section>
		</div>
	);
}
