import { Component, For } from 'solid-js';
import blog1 from './pages-img/blog-1.png';
import blog2 from './pages-img/blog-2.png'; // Gambar baru untuk donasi
import './blog-page.css';
import { Link } from '@solidjs/router';

interface BlogPost {
  title: string;
  content: string;
  date: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'NBM Marathon"',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...',
    date: 'Monday, May 21',
    image: blog1
  },
  {
    title: 'Social Media Campaign',
    content: 'Additional supporting explanation for the first content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...',
    date: 'Tuesday, June 21',
    image: blog2 // Menggunakan gambar untuk penjelasan tambahan
  },
  // Tambahkan lebih banyak post blog di sini
];

const BlogPage: Component = () => {
  const fundTarget = 100000000;
  const fundRaised = 72000000;
  const fundPercentage = (fundRaised / fundTarget) * 100;

  return (
    <div class="container-blog">
      <h1 class="main-title">Blog Kasih</h1>
      <For each={blogPosts}>
        {(post, index) => (
          <div class={`post ${index() === 0 ? 'first-post' : 'standard-post'}`}>
            <img class="image" src={post.image} alt={post.title} />
            <div class="text-content">
              <h2 class="title">{post.title}</h2>
              <p class="date">{post.date}</p>
              <p class="content">{post.content}</p>
            </div>
          </div>
        )}
      </For>
      <div class="search-results">
        <h2 class="search-title">Fundraising Progress</h2>
        <div class="fund-progress">
          <div class="progress-bar" style={{ width: `${fundPercentage}%` }}>
            <div class="progress-text">
              {`$${fundRaised.toLocaleString()} raised of $${fundTarget.toLocaleString()}`}
            </div>
          </div>
        </div>
        <Link href="/donate" class="donate-button">Donasi Sekarang</Link>
      </div>
    </div>
  );
};

export default BlogPage;
