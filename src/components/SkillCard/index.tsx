export function SkillCard({ name }: { name: string }) {
	return (
		<div className="w-fit p-4 py-2 border border-neutral rounded-full bg-bg-card">
			<p className="white-text-shadow text-light font-medium text-center text-sm">
				{name}
			</p>
		</div>
	);
}
