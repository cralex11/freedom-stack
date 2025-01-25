import { db, Posts, ArtworksTable } from "astro:db";

const content = `
## This is the first post of my new Astro blog.

Never gonna give you up, never gonna let you down.
Never gonna run around and desert you.
Never gonna make you cry, never gonna say goodbye.
Never gonna tell a lie and hurt you.
Never gonna hold you back, never gonna lose your grip.
Never gonna give you up, never gonna let you down.
Never gonna run around and desert you.
Never gonna make you cry, never gonna say goodbye.
Never gonna tell a lie and hurt you.
`.trim();

const shrekContent = `
<h1>A Story of Layers</h1>

<p>
Just like onions, this blog post has layers. Shrek taught us that true beauty lies within,
and that the best stories often come from the most unexpected places - like a swamp.
</p>
<p></p>
<p>
Some people judge a book by its cover, but as our favorite ogre would say, "Better out than in!"
This post celebrates the wisdom, humor, and heart that made Shrek a beloved character for generations.
</p>
<p></p>
<p>
Remember: Ogres are like onions. They have layers. Onions have layers.
</p>
`.trim();

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Posts).values([
    {
      id: 1,
      title: "My First Blog Post",
      pubDate: new Date("2022-07-01"),
      description: "This is the first post of my new Astro blog.",
      author: "email@example.com",
      imageUrl: "https://astro.build/assets/blog/astro-1-release-update/cover.jpeg",
      imageAlt: "The Astro logo with the word One.",
      tags: JSON.stringify(["astro", "blogging", "learning in public"]),
      slug: "my-first-blog-post",
      content
    },
    {
      id: 2,
      title: "Shrek: Lessons from an Ogre",
      pubDate: new Date("2022-07-15"),
      description: "Exploring the wisdom and layers of everyone's favorite ogre.",
      author: "cameronandrewpak@gmail.com",
      imageUrl: "https://example.com/shrek-image.jpg", // Replace with actual Shrek image URL
      imageAlt: "Shrek standing proudly in his swamp",
      tags: JSON.stringify(["shrek", "movies", "life lessons", "animation"]),
      slug: "shrek-lessons-from-an-ogre",
      content: shrekContent
    }
  ]);
  // Seed artworks data
  await db.insert(ArtworksTable).values([
    {
      id: 1,
      title: "Autumn Reflections",
      artist: "Sarah Chen",
      description: "A vibrant oil painting capturing the warm hues of fall foliage reflected in a still lake.",
      price: 2800,
      imageUrl:
        "data:image/webp;base64,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",
      medium: "Oil on Canvas",
      dimensions: "30x40 inches",
      year: 2023,
      slug: "autumn-reflections",
      status: "available",
      category: "painting",
      featured: false
    }
  ]);
}
