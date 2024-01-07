/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import styles from "./HeroSection.module.css";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollToPlugin);
interface HeroProps {
	id: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
	const h1Ref = useRef<HTMLHeadingElement>(null);
	const pRef = useRef<HTMLParagraphElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		gsap.fromTo(
			h1Ref.current,
			{ opacity: 0, y: -20 },
			{ opacity: 1, y: 0, duration: 0.8 }
		);

		gsap.fromTo(
			pRef.current,
			{ opacity: 0 },
			{
				delay: 0.5,
				duration: 2,
				text: "The awesome Programmer you have never met before..",
				ease: "none",
				autoAlpha: 1,
			}
		);
	}, []);

	const handleSeeMoreClick = () => {
		const aboutMeSection = document.getElementById("about-me");
		if (aboutMeSection) {
			aboutMeSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section id={id} className={styles.heroImageContainer}>
			<article className={styles.heroImage}>
				<div className={styles.heroOverlay}></div>
				<div className={styles.heroContentWrapper}>
					<div className={styles.heroContent}>
						<h1 ref={h1Ref} className={styles.heroImageText}>
							I'm <span className={styles.maheshiText}>Maheshi</span>
						</h1>
						<p ref={pRef} className={styles.heroParagraph}></p>
					</div>
					<div className={styles.buttonContainer}>
						<button
							ref={buttonRef}
							className={styles.heroButton}
							onClick={handleSeeMoreClick}
						>
							See More
						</button>
					</div>
				</div>
			</article>
		</section>
	);
};

export default Hero;
