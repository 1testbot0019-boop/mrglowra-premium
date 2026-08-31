import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { blogs, getBlog } from '../../../lib/blogs';

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) return {};
  return { title: `${blog.title} | Mr Glowra`, description: blog.excerpt };
}

async function getSourceHtml(url) {
  try {
    const response = await fetch(url, { next: { revalidate: 3600 } });
    if (!response.ok) return null;
    const html = await response.text();
    const mainMatch = html.match(/<main[\s\S]*?<\/main>/i);
    const articleMatch = html.match(/<article[\s\S]*?<\/article>/i);
    let content = articleMatch?.[0] || mainMatch?.[0] || html;
    content = content
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<nav[\s\S]*?<\/nav>/gi, '')
      .replace(/<footer[\s\S]*?<\/footer>/gi, '')
      .replace(/<form[\s\S]*?<\/form>/gi, '');
    return content;
  } catch {
    return null;
  }
}

export default async function BlogArticle({ params }) {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) notFound();

  const sourceHtml = await getSourceHtml(blog.url);

  return (
    <main className="article-page">
      <header className="article-header">
        <Link href="/blog" className="back-link"><ArrowLeft size={16} /> All insights</Link>
        <div className="kicker light">GLOWRA INSIGHTS</div>
        <h1>{blog.title}</h1>
        <div className="article-meta">{blog.date} · {blog.read}</div>
      </header>

      <article className="article-body">
        {sourceHtml ? (
          <div className="imported-article" dangerouslySetInnerHTML={{ __html: sourceHtml }} />
        ) : (
          <div className="source-fallback">
            <p>{blog.excerpt}</p>
            <p>The original article could not be fetched during this build. Read the complete article on the original Mr Glowra website.</p>
          </div>
        )}

        <div className="article-source">
          <a href={blog.url} target="_blank" rel="noreferrer">View original article <ExternalLink size={15} /></a>
        </div>
      </article>
    </main>
  );
}
