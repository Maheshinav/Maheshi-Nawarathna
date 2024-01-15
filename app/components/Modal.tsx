"use client";
import React, { useState, useEffect, useRef } from "react";
import modalStyles from "./Modal.module.css";
import { HiOutlineExternalLink } from "react-icons/hi";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	projectName: string;
	githubUrl?: string;
	siteUrl?: string;
	subtitle: string;
	description: React.ReactNode;
	images: string[];
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	projectName,
	githubUrl,
	siteUrl,
	subtitle,
	description,
	images,
}) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [containerStyle, setContainerStyle] = useState({});
	const buttonRef = useRef<HTMLButtonElement>(null);

	const openLink = (url: string) => {
		window.open(url, "_blank");
	};

	useEffect(() => {
		const adjustImageContainer = () => {
			if (window.innerWidth < 885) {
				const img = new Image();
				img.src = images[currentImageIndex];
				img.onload = () => {
					const imgWidth = img.naturalWidth;
					const imgHeight = img.naturalHeight;
					const imgAspectRatio = imgWidth / imgHeight;
					const viewportAspectRatio = window.innerWidth / window.innerHeight;
					let buttonWidth = 0;
					if (buttonRef.current) {
						buttonWidth = buttonRef.current.offsetWidth;
					}

					if (viewportAspectRatio > imgAspectRatio) {
						setContainerStyle({
							width: `calc(100% - ${buttonWidth * 2}px)`,
							height: "auto",
						});
					} else {
						setContainerStyle({
							width: "100%",
							height: "auto",
						});
					}
				};
			} else {
				setContainerStyle({});
			}
		};

		adjustImageContainer();
		window.addEventListener("resize", adjustImageContainer);

		return () => {
			window.removeEventListener("resize", adjustImageContainer);
		};
	}, [currentImageIndex, images]);

	if (!isOpen) return null;

	const openGitHub = () => {
		window.open(githubUrl, "_blank");
	};
	const nextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const prevImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	return (
		<div className={modalStyles.modalBackdrop} onClick={onClose}>
			<div
				className={`${modalStyles.modalContent} modal-box`}
				onClick={(e) => e.stopPropagation()}
			>
				<div className={modalStyles.imageContainer} style={containerStyle}>
					<img
						src={images[currentImageIndex]}
						alt={`Slide ${currentImageIndex + 1}`}
						className={modalStyles.modalImage}
					/>
					<button
						ref={buttonRef}
						onClick={prevImage}
						className={modalStyles.prevButton}
					>
						&lt;
					</button>
					<button onClick={nextImage} className={modalStyles.nextButton}>
						&gt;
					</button>
				</div>
				<div className={modalStyles.projectInfo}>
					<h2 className={modalStyles.projectName}>{projectName}</h2>
					<h3 className={modalStyles.subtitle}>{subtitle}</h3>
					<p className={modalStyles.projectDescription}>{description}</p>
					<div className={modalStyles.closeButtonContainer}>
						{githubUrl && (
							<button
								className={`${modalStyles.button} ${modalStyles.githubButton}`}
								onClick={openGitHub}
							>
								GITHUB
								<HiOutlineExternalLink />
							</button>
						)}

						{!githubUrl && siteUrl && (
							<button
								className={`${modalStyles.button} ${modalStyles.githubButton}`}
								onClick={() => openLink(siteUrl)}
							>
								VISIT SITE <HiOutlineExternalLink />
							</button>
						)}
						<button
							className={`${"btn btn-square"} ${modalStyles.closeButton}`}
							onClick={onClose}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
