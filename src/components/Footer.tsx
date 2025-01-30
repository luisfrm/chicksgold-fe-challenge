import { Star } from "lucide-react";

const paymentMethods = [
	{ name: "Visa", image: "https://res.cloudinary.com/dw4ecbwo9/image/upload/v1738277307/Visa-Logo-2006_jc6pj3.webp" },
	{
		name: "Mastercard",
		image: "https://res.cloudinary.com/dw4ecbwo9/image/upload/v1738277875/Mastercard_2019_logo_zmarzi.webp",
	},
	{ name: "American Express", image: "https://res.cloudinary.com/dw4ecbwo9/image/upload/v1738278694/amex_t9rhby.webp" },
	{ name: "Skrill", image: "https://res.cloudinary.com/dw4ecbwo9/image/upload/v1738277305/Skrill_logo_pmaebq.webp" }, // 100x32
	{
		name: "Bitcoin1",
		image: "https://res.cloudinary.com/dw4ecbwo9/image/upload/v1738277304/bitcoin-6141694_1280_ecrcsf.webp",
	}, // 32x32
	{
		name: "Ethereum",
		image: "https://res.cloudinary.com/dw4ecbwo9/image/upload/v1738278331/Ethereum_logo_2014_hlljwh.webp",
	}, // 32x32
	{ name: "Bitcoin2", image: "https://res.cloudinary.com/dw4ecbwo9/image/upload/v1738277304/Bitcoin-Logo_bh5ib6.webp" }, // 32x32
	{
		name: "Litecoin",
		image: "https://res.cloudinary.com/dw4ecbwo9/image/upload/v1738278330/1200px-LTC-400_r97bmf.webp",
	}, // 32x32
];

const socialLinks = [
	{
		url: "https://res.cloudinary.com/dw4ecbwo9/image/upload/v1738278691/2021_Facebook_icon_glsupa.webp",
		href: "#",
		label: "Facebook",
	},
	{
		url: "https://res.cloudinary.com/dw4ecbwo9/image/upload/v1738277304/Instagram_logo_2022.svg_xnpb7f.webp",
		href: "#",
		label: "Instagram",
	},
	{
		url: "https://res.cloudinary.com/dw4ecbwo9/image/upload/v1738278332/3938028_wg4pbv.webp",
		href: "#",
		label: "Twitter",
	},
	{
		url: "https://res.cloudinary.com/dw4ecbwo9/image/upload/v1738277306/tech-guide_header-image-discord_vxbqfk.webp",
		href: "#",
		label: "Discord",
	},
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
						{socialLinks.map(({ url, href, label }) => (
							<a key={label} href={href} className="social-link" aria-label={label}>
								<img src={url} alt={label} className="social-logo" />
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
							<img
								src="https://res.cloudinary.com/dw4ecbwo9/image/upload/v1738278693/chicks-logo_tmyqdq.webp"
								alt="Chicks Gold"
								className="footer-logo"
							/>
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
