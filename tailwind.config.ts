import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                mandate: {
                    blue: "#0284C7",
                    dark: "#0B192C",
                    orange: "#F97316",
                    gold: "#EAB308",
                    goldDark: "#CA8A04",
                    light: "#F0F9FF",
                },
            },
        },
    },
    plugins: [],
};
export default config;