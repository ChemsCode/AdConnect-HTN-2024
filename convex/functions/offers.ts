import { mutation, query } from "../_generated/server";
import { v } from "convex/values";

// Mutation to add an offer
export const addOffer = mutation({
    args: {
        sponsorPostId: v.id("sponsorPosts"),
        creatorId: v.id("users"),
        isProcessed: v.boolean(),
        isAccepted: v.boolean(),
    },
    handler: async (ctx, args) => {
        const { sponsorPostId, creatorId, isProcessed, isAccepted } = args;

        // Validate sponsor post and creator
        const sponsorPost = await ctx.db.get(sponsorPostId);
        if (!sponsorPost) {
            throw new Error("Invalid Sponsor Post ID");
        }

        const creator = await ctx.db.get(creatorId);
        if (!creator || creator.type !== "Creator") {
            throw new Error("Invalid Creator ID");
        }

        const newOfferId = await ctx.db.insert("offers", {
            sponsorPostId,
            creatorId,
            isProcessed,
            isAccepted,
        });

        return newOfferId;
    },
});

// Query to get all accepted offers for a creator
export const getAcceptedOffersForCreator = query({
    args: { creatorId: v.id("users") },
    handler: async (ctx, args) => {
        const offers = await ctx.db
            .query("offers")
            .filter((q) => q.and(
                q.eq(q.field("creatorId"), args.creatorId),
                q.eq(q.field("isAccepted"), true)
            ))
            .collect();
        return offers;
    },
});



// Query to get all offers for a creator
export const getOffersForCreator = query({
    args: { creatorId: v.id("users") },
    handler: async (ctx, args) => {
        const offers = await ctx.db
            .query("offers")
            .filter((q) => q.eq(q.field("creatorId"), args.creatorId))
            .collect();

        return offers;
    },
});

// Query to get all offers for a specific sponsor post
export const getOffersForSponsorPost = query({
    args: { sponsorPostId: v.id("sponsorPosts") },
    handler: async (ctx, args) => {
        const offers = await ctx.db
            .query("offers")
            .filter((q) => q.eq(q.field("sponsorPostId"), args.sponsorPostId))
            .collect();
        return offers;
    },
});
