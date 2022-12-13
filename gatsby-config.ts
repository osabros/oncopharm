import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `ebt`,
    // description: 'TBD',
    // image: `/helmet.png`, //https://www.flaticon.com/free-icon/helmet_6186688
    // socialImage: `/miluimnikim.jpg`,
    siteUrl: `https://www.yourdomain.tld` // TODO update this
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss', // for tailwind
    'gatsby-plugin-image',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `European Biopharma Therapeutics`,
        short_name: `EBT`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'images',
        'path': './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'pages',
        'path': './src/pages/'
      },
      __key: 'pages'
    },
  ]
};

export default config;
