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
		"JWT",
		"CSS/Sass",
		"MySQL",
		"Bootstrap",
		"MongoDB",
		"JavaScript",
		"Knex.js",
		"Typescript",
		"React.js",
		"Node.js",
		"Angular2",
		"Express",
		"Figma",
		"REST API",
		"Firebase",
		"Tailwind CSS",
		"Daisy UI",
		"PHP",
		"WordPress",
		"Next.js",
		"GSAP Web animation",
	];

	return (
		<section id="about-me" ref={sectionRef} className={styles.aboutMeSection}>
			<div className={styles.aboutMeContent}>
				<div>
					<div className={styles.aboutMeContext}>
						<h3 className={styles.headings}>Maheshi Nawarathna</h3>
						<h2 className={styles.header}>About</h2>
					</div>
					<div>
						<div className={styles.aboutMeImage}>
							<img
								src="https://res.cloudinary.com/dchzjr4bz/image/upload/v1704412485/pro_pic_2_mo0wnm.png"
								alt="maheshi headshot"
							/>
						</div>
					</div>
				</div>

				<div className={styles.aboutMeText}>
					<p>
						I am a full stack developer based in Canada, everyday learning and
						conceptualizing new things to deliver beautiful and useful software
						solutions to people.
					</p>
					<br />
					<p>
						I like to bring innovative ideas into action with my programming
						knowledge. What makes me more happy as a programmer is my ability to
						make delightful digital solutions with much effort and see how it
						makes peoples' lives more easy going. Better user experience,
						creative representation of the solution are some of the main things
						I care about when I am developing software.
					</p>
					<p>
						Arts stream was for my higher education and then I had my Bachelors
						in IT & Management where I learned about computer's language. Then I
						arrived in Canada for my Masters later decided to go back to get
						familiar with programming. That was the time I had at the
						Brainstation SE Bootcamp, where I go beyond what I always thought I
						only can do. I am now confident as a full stack developer and doing
						freelance projects with much knowledge and confidence. In 2023, I
						was hit by Covid for 3 times yet I am on my journey!
					</p>
					<p>
						Apart from my passion for programming I have my own creative demon
						always wants to read a book and live inside that world for sometime
						and I believe that is why I became a good problem solver; books have
						all the different kinds of problems in the whole world. So the
						problems I encounter while programming, I accept them with much
						courage! Again, I write short stories for children and sometimes I
						illustrate for them. They are my hobbies. And I love cats where I
						always hug them when I want a little comfort away from the stress!
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
							href="/Maheshi-Nawarathna-Resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className={`${styles.buttonLink} ${styles.resumeButton}`}
						>
							Resume
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMeSection;
