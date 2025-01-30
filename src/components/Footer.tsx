import { Facebook, Instagram, Twitter, DiscIcon as Discord, Star } from "lucide-react";

const paymentMethods = [
	{ name: "Visa", image: "https://picsum.photos/100/32" },
	{ name: "Mastercard", image: "https://picsum.photos/100/32" },
	{ name: "American Express", image: "https://picsum.photos/100/32" },
	{ name: "Skrill", image: "https://picsum.photos/100/32" },
	{ name: "Bitcoin", image: "https://picsum.photos/32" },
	{ name: "Ethereum", image: "https://picsum.photos/32" },
	{ name: "Litecoin", image: "https://picsum.photos/32" },
];

const socialLinks = [
	{ icon: Facebook, href: "#", label: "Facebook" },
	{ icon: Instagram, href: "#", label: "Instagram" },
	{ icon: Twitter, href: "#", label: "Twitter" },
	{ icon: Discord, href: "#", label: "Discord" },
];

const footerSections = {
	chicksGold: {
		title: "Chicks Gold",
		links: [
			{ label: "Games", href: "#" },
			{ label: "About Us", href: "#" },
			{ label: "Blog", href: "#" },
			{ label: "Sitemap", href: "#" },
		],
	},
	support: {
		title: "Support",
		links: [
			{ label: "Contact Us", href: "#" },
			{ label: "FAQ", href: "#" },
		],
	},
	legal: {
		title: "Legal",
		links: [
			{ label: "Privacy Policy", href: "#" },
			{ label: "Terms of Service", href: "#" },
			{ label: "Copyright Policy", href: "#" },
		],
	},
};

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-container">
				{/* Payment Methods */}
				<div id="payment-methods-wrapper">
					<div className="payment-methods">
						{paymentMethods.map(method => (
							<img
								key={method.name}
								src={method.image || "/placeholder.svg"}
								alt={method.name}
								className="payment-logo"
							/>
						))}
						<span className="more-text">and 50+ more</span>
					</div>
				</div>

				{/* Social Links */}
				<div id="social-links-wrapper">
					<div className="social-links">
						{socialLinks.map(({ icon: Icon, href, label }) => (
							<a key={label} href={href} className="social-link" aria-label={label}>
								<Icon size={20} />
							</a>
						))}
					</div>
				</div>

				<div className="footer-divider" />

				{/* Main Footer Content */}
				<div id="footer-content-wrapper">
					<div className="footer-content">
						{/* Company Info */}
						<div className="footer-section">
							<img src="https://picsum.photos/160/40" alt="Chicks Gold" className="footer-logo" />
							<a href="mailto:support@chicksgold.com" className="footer-email">
								support@chicksgold.com
							</a>
						</div>

						{/* Footer Sections */}
						{Object.entries(footerSections).map(([key, section]) => (
							<div key={key} className="footer-section">
								<h3>{section.title}</h3>
								<div className="footer-links">
									{section.links.map(link => (
										<a key={link.label} href={link.href} className="footer-link">
											{link.label}
										</a>
									))}
								</div>
							</div>
						))}

						{/* Trustpilot */}
						<div className="footer-section">
							<div className="trustpilot">
								{Array(5)
									.fill(null)
									.map((_, i) => (
										<Star key={i} size={20} fill="currentColor" />
									))}
								<span>Trustpilot Reviews</span>
							</div>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="copyright">© 2017 - 2020 Chicksgold.com. All Rights Reserved</div>
			</div>
		</footer>
	);
}
