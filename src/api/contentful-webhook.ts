// pages/api/contentful-webhook.ts

import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

// In-memory timer for debounce (resets if multiple requests come in)
let timer: NodeJS.Timeout | null = null;

// How long to wait before triggering a Vercel build (in ms)
const DEBOUNCE_TIME = 30000; // 30 seconds

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).end("Method not allowed");
  }

  console.log("🔔 Contentful webhook received");

  // Clear previous timer if it exists
  if (timer) {
    clearTimeout(timer);
    console.log("⏱ Reset debounce timer");
  }

  // Start debounce timer again
  timer = setTimeout(async () => {
    try {
      // 🔁 Replace with your actual Vercel deploy hook URL
      const VERCEL_DEPLOY_HOOK_URL = `${process.env.NEXT_PUBLIC_CONTENTFUL_WEBHOOK_URL}`;

      console.log("🚀 Triggering Vercel build...");
      await axios.post(VERCEL_DEPLOY_HOOK_URL);
      console.log("✅ Vercel build triggered");
    } catch (err) {
      console.error("❌ Failed to trigger Vercel build:", err);
    }
  }, DEBOUNCE_TIME);

  return res
    .status(200)
    .json({ message: "Webhook received. Build will be triggered shortly." });
}
