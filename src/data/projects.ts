import atlasburgerImg from "../assets/atlasburger.png";
import easybillsImg from "../assets/easybills.png";
import freelaGbuddyImg from "../assets/freela-gbuddy.jpg";
import habitusImg from "../assets/habitus.png";
import type { Projects } from "../types/projects";

export const projects: Projects[] = [
	{
		title: "Freelance - Workana",
		description:
			"Desenvolvimento de componentes e modais para um WebApp de Academia, utilizando HTML, CSS e JavaScript. Projeto entregue dentro do prazo, com código organizado e cliente satisfeito com o resultado.",
		technologies: ["HTML", "CSS", "JavaScript"],
		banner: freelaGbuddyImg,
		links: {},
	},
	{
		title: "EasyBills – Dashboard Financeiro",
		description:
			"MVP Full Stack de um Dashboard financeiro moderno e responsivo, focado na visualização clara de dados e na experiência do usuário. Permite autenticação, gerenciamento de transações (receitas e despesas), categorização, resumo financeiro com gráficos e filtros por data.",
		technologies: [
			"React",
			"TailwindCSS",
			"TypeScript",
			"Node",
			"Fastify",
			"PrismaORM",
			"MongoDB",
			"Firebase",
		],
		banner: easybillsImg,
		links: {
			repository: "https://github.com/lucasfgaldinos/easybills-interface",
		},
	},
	{
		title: "Habitus – Dashboard Interativo de Hábitos e Ciclos de Foco",
		description:
			"MVP Full Stack de um Dashboard interativo para usuários acompanhar hábitos e no gerenciar ciclos de foco. Conta com autenticação via GitHub, registro diário de hábitos, controle de sessões de foco com tempos de foco e descanso, e dashboards com estatísticas interativas por período.",
		technologies: [
			"React",
			"CSS Modules",
			"TypeScript",
			"Node",
			"Express",
			"Mongoose",
			"MongoDB",
		],
		banner: habitusImg,
		links: {
			repository: "https://github.com/lucasfgaldinos/habitus-interface",
		},
	},
	{
		title: "Atlas Burger – Hamburgueria Digital",
		description:
			"Projeto fullstack com interface moderna e responsiva para uma hamburgueria digital, integrando navegação intuitiva, formulários validados e pagamentos online via Stripe. No backend, suporte a APIs eficientes para gerenciamento de pedidos e processamento seguro de transações. A aplicação combina tecnologias robustas para garantir performance, segurança e excelente experiência do usuário.",
		technologies: [
			"React",
			"TailwindCSS",
			"TypeScript",
			"Node",
			"Express",
			"SequelizeORM",
			"PostgreSQL",
			"MongoDB",
		],
		banner: atlasburgerImg,
		links: {
			repository: "https://github.com/lucasfgaldinos/atlas-burger-interface",
		},
	},
	{
		title: "PetCare - Landing Page",
		description:
			"Landing page desenvolvida com Next.js e TypeScript, projetada para oferecer uma experiência visual limpa, interativa e envolvente. Utiliza Tailwind CSS para uma estilização ágil e consistente, combinada com componentes sofisticados do shadcn/ui, animações suaves e carrosséis dinâmicos para garantir um design atraente.Uma página leve, funcional e visualmente elgante.",
		technologies: ["React", "TailwindCSS", "TypeScript"],
		banner: atlasburgerImg,
		links: {
			deploy: "https://petcareoficial.netlify.app/",
			repository: "https://github.com/lucasfgaldinos/petcare",
		},
	},
];
