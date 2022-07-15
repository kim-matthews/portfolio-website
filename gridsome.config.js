// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: process.env.SITE_NAME || "Portfolio of Kim Matthews",
  siteDescription: process.env.SITE_DESCRIPTION || "Freelance Full Stack Developer",
  siteUrl: process.env.SITE_URL,
  pathPrefix: process.env.PATH_PREFIX,
  metadata: {
    author: process.env.AUTHOR || "Kim Matthews",
    github: process.env.GITHUB_URL || "https://github.com/octocat",
    linkedin: process.env.LINKEDIN_URL || "https://www.linkedin.com/in/john-doe",
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: './content/experiences/',
        path: "*.md",
        typeName: "Experiences", // for the sake of naming GraphQL - template missing
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: './content/projects/',
        path: "*.md",
        typeName: "Projects", // for the sake of naming GraphQL - template missing
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
        },
      },
    },
    {
      use: "gridsome-plugin-windicss",
      options: {
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [/token$/],
        },
      },
    }
  ]
}
