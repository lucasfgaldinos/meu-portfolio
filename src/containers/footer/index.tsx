export function Footer() {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();

	return (
		<footer className="flex items-center justify-center h-20 w-full border-t border-neutral">
			<p className="text-light text-sm text-center font-medium">
				© {currentYear} - Lucas Galdino
			</p>
		</footer>
	);
}
