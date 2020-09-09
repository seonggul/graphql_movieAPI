import {GraphQLServer} from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({ // 새로운 GraphQL Server를 만들어서 환경설정을 해주는 곳입니다. 현재는 따로 적을 것이 없습니다.
    typeDefs: "graphql/schema.graphql",
    resolvers
    }); 



server.start(() => console.log("GraphQL Server Running"));