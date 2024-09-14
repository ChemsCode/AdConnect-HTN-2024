import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Users table definition
  users: defineTable({
    username: v.string(),
    email: v.string(),
    phoneNumber: v.string(),
    rating: v.number(),
    bio: v.string(),
    profilePic: v.string(),
    type: v.union(v.literal("Sponsor"), v.literal("Creator")),
    targetAudience: v.optional(v.string()), // Optional for Sponsors
    totalFollowing: v.optional(v.number()), // Optional for Sponsors
    companyName: v.optional(v.string()), // Optional for Creators
    industry: v.optional(v.string()), // Optional for Creators
  }).index("by_email", ["email"]), // Index for faster queries by email

  // Creator Posts table definition
  creatorPosts: defineTable({
    creatorId: v.id("users"), // Foreign key to users
    desc: v.string(),
    images: v.array(v.string()), // Array of image URLs
    tags: v.array(v.string()), // Array of tags
  }).index("by_creatorId", ["creatorId"]), // Index for faster queries by creatorId

  // Sponsor Posts table definition
  sponsorPosts: defineTable({
    sponsorId: v.id("users"), // Foreign key to users
    desc: v.string(),
    images: v.array(v.string()), // Array of image URLs
    tags: v.array(v.string()), // Array of tags
    type: v.union(v.literal("AnyoneCanPost"), v.literal("NeedsApproval")), // Literal values for post type
  }).index("by_sponsorId", ["sponsorId"]), // Index for faster queries by sponsorId

  // Offers table definition
  offers: defineTable({
    sponsorPostId: v.id("sponsorPosts"), // Foreign key to sponsor posts
    creatorId: v.id("users"), // Foreign key to users (creator)
    isProcessed: v.boolean(),
    isAccepted: v.boolean(),
  }).index("by_creatorId", ["creatorId"]) // Index for faster queries by creatorId
    .index("by_sponsorPostId", ["sponsorPostId"]), // Index for faster queries by sponsorPostId
}, {
  schemaValidation: true, // Enable schema validation to ensure data integrity
});
