"use client";
import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import styles from "./Gallery.module.css";

interface Project {
	imageUrl: string;
	projectName: string;
	subtitle: string;
	description: string;
	technologies: string[];
	githubUrl: string;
	images: string[];
}

interface ProjectsGalleryProps {
	activeTab: string;
}

const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ activeTab }) => {
	const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

	const projectData: Project[] = [
		{
			imageUrl:
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704494414/petree-thumbnail_m9loos.png",
			projectName: "Petree",
			subtitle: "Subtitle for PETREE",
			description: "Description for PETREE",
			technologies: [
				"React",
				"Node Js",
				"JavaScript",
				"Knex.Js & MySQL",
				"JWT",
			],
			githubUrl: "https://github.com/Maheshinav/band-site",
			images: [
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704494902/petree-1_oki1qs.png",
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704495343/petree-2_jmbfil.png",
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704496387/petree-3_daowiu.png",
			],
		},
		{
			imageUrl:
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704567603/bees-knees-thumbnail_wglvjg.png",
			projectName: "Bandsite",
			subtitle: "Bees Knees Band's Site",
			description:
				"Bandsite is the official website of BeesKnees Band, offering tour information, booking options, and a platform for fan comments",
			technologies: ["Javascript", "HTML5", "Axios", "Sass"],
			githubUrl: "https://github.com/Maheshinav/band-site",
			images: [
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704231516/bandsite-1_y7adxs.png",
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704225496/bees_knees_2_p9pql8.png",
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704055838/1280720_qayjal.png",
			],
		},
		{
			imageUrl:
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704492900/brainflix-thumbnail_gzxria.png",
			projectName: "Brainflix",
			subtitle: "Subtitle for BRAINFLIX",
			description: "Description for BRAINFLIX",
			technologies: ["Javascript", "Node.js", "React", "Sass", "Axios"],
			githubUrl: "https://github.com/Maheshinav/band-site",
			images: [
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704489141/brainflix2_adwasf.png",
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704488794/brainflix-1_v4yrvw.png",
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704489501/brainflix3_deroft.png",
			],
		},
	{
			imageUrl:
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704493676/instock_thumbnail_bkr0wc.png",
			projectName: "Instock",
			subtitle: "Subtitle for BRAINFLIX",
			description: "Description for BRAINFLIX",
			technologies: ["Javascript", "Node.js", "React", "Sass", "Axios"],
			githubUrl: "https://github.com/Maheshinav/band-site",
			images: [
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704490035/instock_1_cakctp.png",
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704490412/instock_2_b4rn6g.png",
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704490640/instock3_vjvauz.png",
			],
		},
		{
			imageUrl:
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704560969/travel-site-thumbnail_sfgjgl.png",
			projectName: "Travel Site",
			subtitle: "Subtitle for PAWLOVE",
			description: "Description for PAWLOVE",
			technologies: [
				"React",
				"Knex.js",
				"Javascript",
				"Firebase",
				"Bootstrap",
				"Sass",
			],
			githubUrl: "https://github.com/Maheshinav/band-site",
			images: [
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704564819/travel-site-2_jil88m.png",
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704565230/travel-site-1_tnjyym.png",
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704565485/travel-site-3_tlvtos.png",
			],
		},
		{
			imageUrl:
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704565978/vancity-thumbnail_fxxgpm.png",
			projectName: "Vancity Cleaning",
			subtitle: "Subtitle for LYROCAT",
			description: "Description for LYROCAT",
			technologies: [
				"WordPress"
				
			],
			githubUrl: "https://github.com/Maheshinav/band-site",
			images: [
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704567061/vancity-2_q5tcjd.png",
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704566916/vancity-3_i0ntps.png",
				"https://res.cloudinary.com/dchzjr4bz/image/upload/v1704567359/vancity-4_xsfnec.png",
			],
		},
	];

	useEffect(() => {
		setActiveCardIndex(null);
	}, [activeTab]);

	const filteredProjects = projectData.filter((project) => {
		if (activeTab === "ALL") return true;
		if (activeTab === "MINI_WORKS") {
			return (
				project.projectName === "PAWLOVE" || project.projectName === "LYROCAT"
			);
		}
		return false;
	});

	const handleCardClick = (index: number) => {
		setActiveCardIndex(activeCardIndex === index ? null : index);
	};

	return (
		<div>
			<div className={styles.projectsGallery}>
				{filteredProjects.map((project, index) => (
					<ProjectCard
						key={index}
						imageUrl={project.imageUrl}
						githubUrl={project.githubUrl}
						projectName={project.projectName}
						subtitle={project.subtitle}
						description={project.description}
						technologies={project.technologies}
						images={project.images}
						index={index}
						isActive={index === activeCardIndex}
						onCardClick={() => handleCardClick(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default ProjectsGallery;
