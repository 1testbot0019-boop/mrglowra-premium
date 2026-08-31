import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Mr Glowra | Power That Shines!',
  description: 'Premium floor and toilet care by Mr Glowra. Pine, lemongrass and everyday cleaning power. Made in Uttarakhand.',
};

const footerLinks = [
  ['Our Story', '/family-safe-floor-cleaner'],
  ['Products', '/natural-floor-cleaner'],
  ['Blogs', '/toilet-cleaner'],
  ['Contact', '/mr-glowra-cleaning-products-contact'],
  ['Reviews', '/reviews-floor-and-toilet-cleaners-in-india'],
  ['Privacy Policy', '/privacy-policy'],
  ['Return Policy', '/household-cleaning-products-india'],
  ['Weekly Hygiene Checklist', '/this-weeks-hygiene-checklist'],
  ['Lucky Draw', '/lucky-draw'],
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">{children}</div>
        <footer className="site-footer">
          <div className="site-footer-main">
            <Link href="/" className="logo site-footer-brand" aria-label="Mr Glowra home">
              <span>MG</span><b>MR GLOWRA</b>
            </Link>
            <nav className="site-footer-links" aria-label="Footer navigation">
              {footerLinks.map(([label, href]) => (
                <Link href={href} key={href}>{label}</Link>
              ))}
              <a href="https://www.mrglowra.com/shop" target="_blank" rel="noopener noreferrer">Also available on Flipkart</a>
            </nav>
            <div className="site-footer-copy">
              <strong>Power That Shines!</strong>
              <span>Made in Uttarakhand, India</span>
            </div>
          </div>
          <div className="site-footer-bottom">
            <span>© 2026 Mr Glowra. All Rights Reserved.</span>
            <span>Premium home-care essentials for modern homes.</span>
            <Link href="/lucky-draw">Lucky Draw Winner Rules &amp; Terms →</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
