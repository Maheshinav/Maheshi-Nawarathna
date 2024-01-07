import styles from "./Footer.module.css";
import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";

function Footer() {
	return (
		<div>
			<footer
				className={`footer p-4 text-neutral-content ${styles.footerItems}`}
			>
				<div className="flex flex-col items-center">
					<p className="mb-4">MAHESHI NAWARATHNA © 2023</p>
					<div className={styles.socialLinks}>
						<a
							href="https://github.com/Maheshinav"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BsGithub />
						</a>
						<a
							href="http://www.linkedin.com/in/maheshinawarathna"
							target="_blank"
							rel="noopener noreferrer"
						>
							<ImLinkedin />
						</a>
						<span className={styles.emailText}>maheshin653@gmail.com</span>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
