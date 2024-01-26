/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styles from "./AboutMe.module.css";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
interface AboutMeSectionProps {
	id: string;
}

// eslint-disable-next-line no-empty-pattern
const AboutMeSection: React.FC<AboutMeSectionProps> = ({}) => {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (sectionRef.current) {
			gsap.to(sectionRef.current, {
				backgroundPosition: "200% 50%",
				duration: 10,
				repeat: -1,
				ease: "linear",
				yoyo: true,
			});
		}
	}, []);

	const handleScrollToProjects = () => {
		gsap.to(window, { duration: 1, scrollTo: "#my-projects" });
	};

	const technologies = [
		"JavaScript",
		"TypeScript",
		"React.js",
		"Angular2",
		"Node.js",
		"Express",
		"Next.js",
		"Knex.js",
		"CSS/Sass",
		"Bootstrap",
		"Tailwind CSS",
		"Material UI",
		"Daisy UI",
		"GSAP Web Animation",
		"MySQL",
		"MongoDB",
		"Firebase",
		"REST API",
		"PHP",
		"WordPress",
		"JWT",
		"Figma",
		"Photoshop",
		"Adobe Fresco",
		"Heroku",
	];

	return (
		<section id="about-me" ref={sectionRef} className={styles.aboutMeSection}>
			<header className={styles.aboutMeContent}>
				<div>
					<div className={styles.aboutMeContext}>
						<h3 className={styles.headings}>Maheshi Nawarathna</h3>
						<h2 className={styles.header}>About</h2>
					</div>

					<figure className={styles.aboutMeImage}>
						<img
							src="https://res.cloudinary.com/dchzjr4bz/image/upload/v1704412485/pro_pic_2_mo0wnm.png"
							alt="maheshi headshot"
						/>
					</figure>
				</div>

				<article className={styles.aboutMeText}>
					<p>
						I am a full stack developer based in Canada, everyday learning and
						conceptualizing new things to deliver beautiful and useful software
						solutions to people.
					</p>
					<br />
					<p>
						I like to bring innovative ideas into action with my programming
						skills while making them beautiful for a better User Experience.
					</p>
					<p>
						I pursued my higher studies in Liberal Arts and Humanities, which
						later led me to an honours degree in IT and Management. This
						combination helped me amass a wealth of knowledge in computer
						science. So, I started my career as a Software Engineer back home.
						Upon arriving in Canada for my Masters, I temporarily steered away
						from my true passion, programming.
					</p>
					<p>
						But since nothing is fulfilling me as coding I wanted to return it.
						To refresh my skills and rekindle my enthusiasm, I attended a
						Software Engineering Bootcamp at Brainstation. This intensive,
						project-based program was a crucial step towards re-entering the
						career I'm most passionate about.
					</p>
					<p>
						{" "}
						It's been a challenging journey, but I’m committed to it and
						continue to code with determination.
					</p>
					<p>
						I'm not just a programmer; I'm also an avid book lover, which I
						believe enhances my problem-solving abilities. Books encompass all
						kinds of problems, teaching me how to tackle challenges and find
						solutions. Besides, I love cats! They often play with my keyboard,
						causing syntax errors, but they also help throw away my stress with
						their 'purr' codes.
					</p>
					<h3 className={styles.techHeading}>Technologies and Skills</h3>
					<p className={styles.technologyText}>{technologies.join(", ")}</p>
					<div className={styles.resumeAndProjectsContainer}>
						<h3 className={styles.linksHeadings}>
							Want to know more about me?
						</h3>
						<span
							className={`${styles.buttonLink} ${styles.myProjectsLink}`}
							onClick={handleScrollToProjects}
						>
							Projects
						</span>
						<a
							href="/Maheshi-Nawarathna.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className={`${styles.buttonLink} ${styles.resumeButton}`}
						>
							Resume
						</a>
					</div>
				</article>
			</header>
		</section>
	);
};

export default AboutMeSection;
