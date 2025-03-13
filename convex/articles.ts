import { query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const articles = await ctx.db.query("articles").collect();
    const sortedArticles = articles.sort(
      (a, b) => b._creationTime - a._creationTime
    );

    return sortedArticles.map((articles) => {
      return {
        id: articles._id,
        title: articles.title,
        description: articles.description,
        author: articles.author,
        createdAt: articles._creationTime,
        viewCount: articles.viewCount,
      };
    });
  },
});
