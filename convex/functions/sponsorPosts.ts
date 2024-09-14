import { mutation, query } from "../_generated/server";
import { v } from "convex/values";

// Mutation to add a sponsor post
export const addSponsorPost = mutation({
    args: {
        sponsorId: v.id("users"),
        desc: v.string(),
        images: v.array(v.string()),
        tags: v.array(v.string()),
        type: v.union(v.literal("AnyoneCanPost"), v.literal("NeedsApproval")),
    },
    handler: async (ctx, args) => {
        const { sponsorId, desc, images, tags, type } = args;

        // Validate sponsor
        const sponsor = await ctx.db.get(sponsorId);
        if (!sponsor || sponsor.type !== "Sponsor") {
            throw new Error("Invalid Sponsor ID");
        }

        const newPostId = await ctx.db.insert("sponsorPosts", {
            sponsorId,
            desc,
            images,
            tags,
            type,
        });

        return newPostId;
    },
});


// Query to get a specific sponsor post by post ID
export const getSponsorPostById = query({
    args: { postId: v.id("sponsorPosts") },
    handler: async (ctx, args) => {
        const post = await ctx.db.get(args.postId);
        return post || null;
    },
});


// Query to get all posts by a sponsor
export const getSponsorPosts = query({
    args: { sponsorId: v.id("users") },
    handler: async (ctx, args) => {
        const posts = await ctx.db
            .query("sponsorPosts")
            .filter((q) => q.eq(q.field("sponsorId"), args.sponsorId))
            .collect();
        return posts;
    },
});

// Query to get sponsor posts by type
export const getSponsorPostsByType = query({
    args: { type: v.union(v.literal("AnyoneCanPost"), v.literal("NeedsApproval")) },
    handler: async (ctx, args) => {
        const posts = await ctx.db
            .query("sponsorPosts")
            .filter((q) => q.eq(q.field("type"), args.type))
            .collect();
        return posts;
    },
});
