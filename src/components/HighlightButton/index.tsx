import type { ButtonHTMLAttributes, ReactNode } from "react";
import style from "./style.module.css";

interface HighlighButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export function HighlightButton({
	children,
	type = "button",
	...props
}: HighlighButtonProps) {
	return (
		<button {...props} type={type} className={style["highlight-button"]}>
			<span>{children}</span>
		</button>
	);
}
