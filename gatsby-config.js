module.exports = {
  siteMetadata: {
    title: `documentazione-utente`,
    description: `Progetto di un applicativo web statico per la pubblicazione della documentazione utente.`,
    author: `vasile.bezer.1@gmail.com`,
    siteUrl: "http://localhost:8000",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // useAutoGen: required 'true' to use autogen
        useAutoGen: true,
        // autoGenHomeLabel: optional 'Home' is default
        autoGenHomeLabel: `Root`,
        // exclude: optional, include this array to exclude paths you don't want to
        // generate breadcrumbs for (see below for details).
        exclude: [
          `**/dev-404-page/**`,
          `**/404/**`,
          `**/app/**`,
          `**/404.html`,
          `**/offline-plugin-app-shell-fallback/**`,
        ],
        // isMatchOptions: optional, include this object to configure the wildcard-match library.
        excludeOptions: {
          separator: ".",
        },
        // crumbLabelUpdates: optional, update specific crumbLabels in the path
        crumbLabelUpdates: [
          {
            pathname: "/book",
            crumbLabel: "Books",
          },
        ],
        // trailingSlashes: optional, will add trailing slashes to the end
        // of crumb pathnames. default is false
        trailingSlashes: true,
        // usePathPrefix: optional, if you are using pathPrefix above
        usePathPrefix: "/blog",
      },
    },
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_self",
              rel: "nofollow",
            },
          },
        ],
      },
    },
  ],
}
