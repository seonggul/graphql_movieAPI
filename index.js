import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  // 새로운 GraphQL Server를 만들어서 환경설정을 해주는 곳입니다. 현재는 따로 적을 것이 없습니다.
  typeDefs: `type Movie {
    id: Int!
    title: String!
    rating: Float
    description_intro: String
    language: String
    medium_cover_image: String
    genres: [String]
  }
  
  type Query {
    movies(limit: Int, rating: Float): [Movie]!
    movie(id: Int!): Movie
    suggestions(id: Int!): [Movie]!
  }
  `,
  resolvers,
});

server.start(() => console.log("Graphql Server Running"));
