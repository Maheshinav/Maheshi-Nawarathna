"use client";
import { useState } from "react";
import ProjectsGallery from "./Gallery";
import styles from "./MyProjects.module.css";

interface MyProjectsProps {
	id: string;
}

// eslint-disable-next-line no-empty-pattern
const MyProjects: React.FC<MyProjectsProps> = ({}) => {
	const [activeTab, setActiveTab] = useState("ALL");

	return (
		<div id="my-projects">
			<div className={styles.myProjectsHeadings}>
				<h2>Projects</h2>
			</div>

			<div role="tablist" className={`tabs ${styles.myProjectsTabs}`}>
				<a
					role="tab"
					className={`tab ${activeTab === "ALL" ? styles.activeTab : ""}`}
					onClick={() => setActiveTab("ALL")}
				>
					ALL
				</a>
				<a
					role="tab"
					className={`tab ${activeTab === "FREELANCE" ? styles.activeTab : ""}`}
					onClick={() => setActiveTab("FREELANCE")}
				>
					FREELANCE
				</a>
			</div>

			<ProjectsGallery activeTab={activeTab} />
		</div>
	);
};

export default MyProjects;
