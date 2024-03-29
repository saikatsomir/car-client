import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	const today = new Date();
	const currentYear = today.getFullYear();

	return (
		<footer id="footer_main" className="bg-my-dark-gray footer-text">
			<div className="container py-6 md:py-8 md:flex justify-between md:space-x-4 space-y-6 md:space-y-0">
				<div className="contact-info">
					<h4 className="text-white uppercase text-xl mb-3 md:mb-5">Showroom</h4>
					<div>
						<address className="not-italic">
							Bamonpara, 38 Hirimdia Road,<br />Bheramara-7040, Kushtia, Bangladesh.
						</address>
					</div>
					<p className="mt-4">
						<a href="mailto:help@elite-carz.com" className="footer-link">help@elite-carz.com</a>
					</p>
					<p className="mt-3">
						<a href="tel:+8801700110011" className="footer-link">+880 1700 110011</a>
					</p>
				</div>
				<div className="quick-links">
					<h4 className="text-white uppercase text-xl mb-3 md:mb-5">Quick Links</h4>
					<ul>
						<li>
							<Link to="/home" className="footer-link">Home</Link>
						</li>
						<li>
						<Link to="/all-products" className="footer-link">Products</Link>
						</li>
						<li>
						<Link to="/all-blogs" className="footer-link">Blogs</Link>
						</li>
						<li>
							<Link to="/contact" className="footer-link">Contact</Link>
						</li>
					</ul>
				</div>
				<div className="legal-info">
					<h4 className="text-white uppercase text-xl mb-3 md:mb-5">Legal Info</h4>
					<ul>
						<li>
							<Link to="/terms-conditions" className="footer-link">Terms &amp; Conditions</Link>
						</li>
						<li>
							<Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
						</li>
					</ul>
				</div>
			</div>
			<hr className="opacity-10" />
			<div className="container py-6 text-center">
				<div className="copyright">
					<p>
						&#169; {currentYear} Elite Carz by <span className="text-my-secondary-light">Fazle Rabbi Rana</span>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;