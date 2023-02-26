const createPosts = require("./create/createPosts")
const { setOptions, createPages } = require("./create/createPages")

setOptions({
  postTypes: ["Page"],
  graphQLFieldGroupName: "pageComponents",
  graphQLFieldName: "pageComponents",
})

module.exports.createPages = async gatsbyUtilities => {
  await createPages(gatsbyUtilities)
  // await createPosts(gatsbyUtilities)
}

// original
// const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//   const { data } = await graphql(`
//     query ResidentialServices {
//       allWpResidentialService {
//         nodes {
//           banner {
//             bannerDescription
//             bannerTitle
//             bannerImage {
//               altText
//               localFile {
//                 childImageSharp {
//                   gatsbyImageData
//                 }
//               }
//             }
//           }
//           slug
//         }
//       }
//     }
//   `)

//   data.allWpResidentialService.nodes.forEach(node => {
//     actions.createPage({
//       path: "/residential-services/" + node.slug,
//       component: path.resolve("./src/templates/residential-service.js"),
//       context: { slug: node.slug },
//     })
//   })
// }
