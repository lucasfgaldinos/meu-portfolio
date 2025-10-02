import type { Technologies } from "../../types/data";

export function SkillCard({ name, icon }: Technologies) {
	return (
		<div className="flex gap-2 items-center h-10 w-fit px-4 border border-neutral rounded-full bg-neutral-800">
			{icon && <img className="h-6 w-6" src={icon} alt={`Ícone ${name}.`} />}

			<p className="text-light font-medium text-center text-xs">{name}</p>
		</div>
	);
}
