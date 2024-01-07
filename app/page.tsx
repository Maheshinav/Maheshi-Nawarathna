import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Maheshi - Portfolio",
	description: "Welcome to my portfolio website!",
};

import Nav from "./components/Nav";
import Hero from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<main>
			<Nav />
			<Hero id="home" />
			<AboutMe id="about-me" />
			<MyProjects id="my-projects" />
			<Footer />
		</main>
	);
}
