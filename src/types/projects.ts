export interface Projects {
	title: string;
	description: string;
	banner: string;
	technologies: string[];
	links: {
		repository?: string;
		deploy?: string;
	};
}
