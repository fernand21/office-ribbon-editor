import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  basePath: isGitHubPages ? "/office-ribbon-editor" : "",
  assetPrefix: isGitHubPages ? "/office-ribbon-editor" : "",
};

export default nextConfig;
