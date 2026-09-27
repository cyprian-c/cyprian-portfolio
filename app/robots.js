export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cyprian-portfolio.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Anthropic-AI",
          "Google-Extended",
          "Applebot-Extended",
          "cohere-ai",
          "meta-externalagent",
          "Amazonbot",
        ],
        allow: ["/", "/llms.txt", "/llms-full.txt", "/sitemap.xml"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
