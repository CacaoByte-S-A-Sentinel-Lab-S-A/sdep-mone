import { getCollection } from "astro:content";
import { IdToSlug } from "./hash";

/**
 * Represents an archive item with a title, slug, date, and optional tags.
 */
export interface Archive {
  title: string;
  id: string;
  date: Date;
  tags?: string[];
  category?: string;           
  description?: string;        
  cover?: string;              
  readingMetadata?: {
    time: number;
    wordCount: number;
  };
  gameSlug?: string;
  gameId?: string;
}

/**
 * Represents a tag used to categorize content.
 */
export interface Tag {
  name: string;
  slug: string;
  posts: Archive[];
}

/**
 * Represents a category of content.
 */
export interface Category {
  name: string;
  slug: string;
  posts: Archive[];
}

/**
 * Post type including rendered metadata
 */
type PostWithGames = {
  id: string;
  slug: string;
  data: {
    title: string;
    published: Date;
    draft?: boolean;
    description?: string;
    cover?: string;
    tags?: string[];
    category?: string;
    author?: string;
    sourceLink?: string;
    licenseName?: string;
    licenseUrl?: string;
  };
  rendered?: {
    Content: unknown;
    headings: unknown[];
    remarkPluginFrontmatter: Record<string, unknown>;
    metadata: {
      frontmatter: {
        readingMetadata: { time: number; wordCount: number };
        gameSlug?: string;
        gameId?: string;
      };
    };
  };
};

/**
 * Utility to generate the correct URL for a post.
 */
function generatePostUrl(post: PostWithGames): string {
  const gameSlug = post.rendered?.metadata?.frontmatter?.gameSlug;
  const gameId = post.rendered?.metadata?.frontmatter?.gameId;

  return gameSlug && gameId
    ? `/games/${gameSlug}/${gameId}`
    : `/posts/${IdToSlug(post.id)}`;
}

/**
 * Retrieves and sorts blog posts by their published date.
 */
export async function GetSortedPosts() {
  const allBlogPosts = (await getCollection("posts", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  })) as unknown as PostWithGames[];

  const sorted = allBlogPosts.sort((a, b) => {
    const dateA = new Date(a.data.published);
    const dateB = new Date(b.data.published);
    return dateA > dateB ? -1 : 1;
  });

  for (let i = 1; i < sorted.length; i++) {
    (sorted[i].data as any).nextSlug = (sorted[i - 1] as any).slug;
    (sorted[i].data as any).nextTitle = (sorted[i - 1] as any).data.title;
  }
  for (let i = 0; i < sorted.length - 1; i++) {
    (sorted[i].data as any).prevSlug = (sorted[i + 1] as any).slug;
    (sorted[i].data as any).prevTitle = (sorted[i + 1] as any).data.title;
  }

  return sorted;
}

/**
 * Retrieves and organizes blog post archives.
 */
export async function GetArchives() {
  const allBlogPosts = (await getCollection("posts", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  })) as unknown as PostWithGames[];

  const archives = new Map<number, Archive[]>();

  for (const post of allBlogPosts) {
    const date = new Date(post.data.published);
    const year = date.getFullYear();

    const gameSlug = post.rendered?.metadata?.frontmatter?.gameSlug;
    const gameId = post.rendered?.metadata?.frontmatter?.gameId;
    const readingMetadata = post.rendered?.metadata?.frontmatter?.readingMetadata ?? {
      time: 0,
      wordCount: 0,
    }; // Valor seguro por si no existe

    if (!archives.has(year)) {
      archives.set(year, []);
    }

    archives.get(year)!.push({
      title: post.data.title,
      id: gameSlug && gameId
        ? `/games/${gameSlug}/${gameId}`
        : `/posts/${IdToSlug(post.id)}`,
      date: date,
      tags: post.data.tags,
      category: post.data.category,
      description: post.data.description,
      cover: post.data.cover,
      readingMetadata: readingMetadata,
      gameSlug: gameSlug,
      gameId: gameId,
    });
  }

  const sortedArchives = new Map(
    [...archives.entries()].sort((a, b) => b[0] - a[0])
  );
  sortedArchives.forEach((value) => {
    value.sort((a, b) => (a.date > b.date ? -1 : 1));
  });

  return sortedArchives;
}

/**
 * Retrieves all tags from blog posts.
 */
export async function GetTags() {
  const allBlogPosts = (await getCollection("posts", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  })) as unknown as PostWithGames[];

  const tags = new Map<string, Tag>();

  allBlogPosts.forEach((post) => {
    post.data.tags?.forEach((tag: string) => {
      const tagSlug = IdToSlug(tag);

      const gameSlug = post.rendered?.metadata?.frontmatter?.gameSlug;
      const gameId = post.rendered?.metadata?.frontmatter?.gameId;

      if (!tags.has(tagSlug)) {
        tags.set(tagSlug, {
          name: tag,
          slug: `/tags/${tagSlug}`,
          posts: [],
        });
      }

      tags.get(tagSlug)!.posts.push({
        title: post.data.title,
        id: gameSlug && gameId
          ? `/games/${gameSlug}/${gameId}`
          : `/posts/${IdToSlug(post.id)}`,
        date: new Date(post.data.published),
        tags: post.data.tags,
        gameSlug: gameSlug,
        gameId: gameId,
      });
    });
  });

  return tags;
}

/**
 * Retrieves all blog post categories.
 */
export async function GetCategories() {
  const allBlogPosts = (await getCollection("posts", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  })) as unknown as PostWithGames[];

  const categories = new Map<string, Category>();

  allBlogPosts.forEach((post) => {
    if (!post.data.category) return;

    const categorySlug = IdToSlug(post.data.category);

    const gameSlug = post.rendered?.metadata?.frontmatter?.gameSlug;
    const gameId = post.rendered?.metadata?.frontmatter?.gameId;
    const readingMetadata = post.rendered?.metadata?.frontmatter?.readingMetadata ?? {
      time: 0,
      wordCount: 0,
    }; 

    if (!categories.has(categorySlug)) {
      categories.set(categorySlug, {
        name: post.data.category,
        slug: `/categories/${categorySlug}`,
        posts: [],
      });
    }

    categories.get(categorySlug)!.posts.push({
      title: post.data.title,
      id: gameSlug && gameId
        ? `/games/${gameSlug}/${gameId}`
        : `/posts/${IdToSlug(post.id)}`,
      date: new Date(post.data.published),
      tags: post.data.tags,
      category: post.data.category,      
      description: post.data.description, 
      cover: post.data.cover,             
      readingMetadata: readingMetadata,   
      gameSlug: gameSlug,
      gameId: gameId,
    });
  });

  return categories;
}

