import React from 'react'
import "./Footer.css"
import{BsGithub} from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
		<footer>
			<a href="#booster" className="footer__logo">
				Booster
			</a>

			{/* Page links */}
			<ul className="permalinks">
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#energisers">Energisers</a>
				</li>
				<li>
					<a href="#mostLiked">Most Liked</a>
				</li>
				<li>
					<a href="#faq">FAQ</a>
				</li>
			</ul>

			{/* Social Profiles */}
			<div className="footer__socials">
				<a href="https://github.com" target="_blank">
					<BsGithub />
				</a>
				<a href="https://linkedin.com" target="_blank">
					<BsLinkedin />
				</a>
			</div>

			<div className="footer__copyright">
				<small>
					&copy; To be used by CodeYourFuture students only.All rights reserved.
				</small>
			</div>
		</footer>
	);
}
