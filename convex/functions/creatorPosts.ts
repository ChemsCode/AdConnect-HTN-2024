import { mutation, query } from "../_generated/server";
import { v } from "convex/values";
import { filter } from "convex-helpers/server/filter";

// Mutation to add a creator post
export const addCreatorPost = mutation({
    args: {
        creatorId: v.id("users"),
        desc: v.string(),
        images: v.array(v.string()),
        tags: v.array(v.string()),
    },
    handler: async (ctx, args) => {
        const { creatorId, desc, images, tags } = args;

        // Validate creator
        const creator = await ctx.db.get(creatorId);
        if (!creator || creator.type !== "Creator") {
            throw new Error("Invalid Creator ID");
        }

        const newPostId = await ctx.db.insert("creatorPosts", {
            creatorId,
            desc,
            images,
            tags,
        });

        return newPostId;
    },
});

// Query to get all posts by a creator
export const getCreatorPosts = query({
    args: { creatorId: v.id("users") },
    handler: async (ctx, args) => {
        const posts = await ctx.db
            .query("creatorPosts")
            .filter((q) => q.eq(q.field("creatorId"), args.creatorId))
            .collect();
        return posts;
    },
});


// Query to get a specific creator post by post ID
export const getCreatorPostById = query({
    args: { postId: v.id("creatorPosts") },
    handler: async (ctx, args) => {
        const post = await ctx.db.get(args.postId);
        return post || null;
    },
});


// Query to get creator posts by a specific tag using the `filter` helper
export const getCreatorPostsByTag = query({
    args: { tag: v.string() },
    handler: async (ctx, args) => {
        // Use the `filter` helper to filter posts where the tags array includes the given tag
        return filter(
            ctx.db.query("creatorPosts"),
            (post) => post.tags.includes(args.tag) // Custom TypeScript filtering
        ).collect(); // Collect the filtered results
    },
});

