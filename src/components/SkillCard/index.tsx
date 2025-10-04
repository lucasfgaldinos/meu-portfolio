export function SkillCard({ name }: { name: string }) {
	return (
		<div className="w-fit px-3 py-1 border border-neutral rounded-full bg-bg-card">
			<p className="text-light font-medium text-center text-xs">{name}</p>
		</div>
	);
}
