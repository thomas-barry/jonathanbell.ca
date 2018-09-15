module.exports = {
  siteMetadata: {
    title: 'Jonathan Bell',
    desc: 'The online photography portfolio of Jonathan Bell',
    keywords:
      'photography, Jonathan Bell, portfolio, photographer, fashion, Victoria, BC',
    email: 'jonathanbell.ca+site@gmail.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-image#problem
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    // https://github.com/DSchau/gatsby-source-s3
    {
      resolve: 'gatsby-source-s3',
      options: {
        aws: {
          // Shh!
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_ACCESS_KEY
        },
        buckets: [process.env.AWS_BUCKET_NAME]
      }
    },
    {
      resolve: `gatsby-plugin-accessibilityjs`,
      options: {
        injectStyles: `
          .accessibility-error {
            border: 3px solid #f00;
          }
        `,
        errorClassName: `accessibility-error`,
        onError: error => {
          // What to do with that error?? Hmm.. I dunno.. console.log for now..
          console.log(error);
        }
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    }
  ]
};
