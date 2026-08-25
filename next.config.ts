import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  basePath: isGitHubPages ? "/ribbon-ui-studio" : "",
  assetPrefix: isGitHubPages ? "/ribbon-ui-studio" : "",
};

export default nextConfig;
