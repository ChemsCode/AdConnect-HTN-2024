import { mutation, query } from "../_generated/server";
import { v } from "convex/values";

// Mutation to add a user
export const addUser = mutation({
    args: {
        username: v.string(),
        email: v.string(),
        phoneNumber: v.string(),
        rating: v.number(),
        bio: v.string(),
        profilePic: v.string(),
        type: v.union(v.literal("Sponsor"), v.literal("Creator")),
        targetAudience: v.optional(v.string()),
        totalFollowing: v.optional(v.number()),
        companyName: v.optional(v.string()),
        industry: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const {
            username,
            email,
            phoneNumber,
            rating,
            bio,
            profilePic,
            type,
            targetAudience,
            totalFollowing,
            companyName,
            industry,
        } = args;

        const userData = {
            username,
            email,
            phoneNumber,
            rating,
            bio,
            profilePic,
            type,
            targetAudience: targetAudience ?? undefined, // Convert null to undefined
            totalFollowing: totalFollowing ?? undefined, // Convert null to undefined
            companyName: companyName ?? undefined, // Convert null to undefined
            industry: industry ?? undefined, // Convert null to undefined
        };

        const newUserId = await ctx.db.insert("users", userData);
        return newUserId;
    },
});


// Query to get a user by ID
export const getUser = query({
    args: { userId: v.id("users") },
    handler: async (ctx, args) => {
        const user = await ctx.db.get(args.userId);
        return user || null;
    },
});

// Query to get users by type (Creator or Sponsor)
export const getUsersByType = query({
    args: { type: v.union(v.literal("Creator"), v.literal("Sponsor")) },
    handler: async (ctx, args) => {
        const users = await ctx.db
            .query("users")
            .filter((q) => q.eq(q.field("type"), args.type))
            .collect();
        return users;
    },
});

