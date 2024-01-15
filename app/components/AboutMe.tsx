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
		"Daisy UI",
		"GSAP Web Animation",
		"MySQL",
		"MongoDB",
		"Firebase",
		"REST API",
		"Figma",
		"PHP",
		"WordPress",
		"JWT",
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
						Arts stream was for my higher education and then I had my Bachelors
						in IT & Management where I learned about computer's language. Then I
						arrived in Canada for my Masters later decided to go back to get
						familiar with programming again. That was the time I had at the
						Brainstation SE Bootcamp, where I went beyond what I always thought
						I only can do and updated my tech stack. I am now confident as a
						full stack developer and doing freelance projects with much
						knowledge.
					</p>
					<p>
						{" "}
						Despite facing challenges my dedication to my coding journey
						remained unshaken.
					</p>
					<p>
						Apart from my passion for programming I have my own creative demon
						always wants to read a book and I believe that is why I became a
						good problem solver; books have all the different kinds of problems
						in the whole world. So the problems I encounter while programming, I
						always find a way to solve them! Again, I write short stories for
						children and sometimes I illustrate for them. They are my hobbies.
						And I love cats where I always hug them when I want a little comfort
						away from the stress!
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
