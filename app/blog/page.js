import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { blogs } from '../../lib/blogs';

export const metadata = {
  title: 'Glowra Insights | Mr Glowra',
  description: 'Cleaning guides, floor-care tips, toilet hygiene and home-care insights from Mr Glowra.'
};

export default function BlogIndex() {
  return (
    <main className="blog-page">
      <section className="blog-hero">
        <Link href="/" className="back-link">← Mr Glowra</Link>
        <div className="kicker light">GLOWRA INSIGHTS</div>
        <h1>Cleaning knowledge<br /><em>that shines.</em></h1>
        <p>Explore the cleaning guides and home-hygiene articles already published on Mr Glowra.</p>
      </section>

      <section className="blog-list">
        <div className="blog-list-head"><span>{blogs.length} ARTICLES</span><span>MR GLOWRA</span></div>
        {blogs.map((blog, index) => (
          <article className="blog-row" key={blog.slug}>
            <div className="blog-number">{String(index + 1).padStart(2, '0')}</div>
            <div className="blog-content">
              <div className="blog-meta">{blog.date} · {blog.read}</div>
              <h2>{blog.title}</h2>
              <p>{blog.excerpt}</p>
              <Link href={`/blog/${blog.slug}`} className="blog-link">Read article <ArrowRight size={16} /></Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
