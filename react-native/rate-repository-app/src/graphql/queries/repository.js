import { gql } from 'apollo-server';

export const typeDefs = gql`
    extend type Query {
        """
        Returns repository by and id.
        """
        repository(id: ID!): Repository
    }
`;

export const resolvers = {
    Query: {
        repository: async (obj, args, { dataLoaders: { repositoryLoader } }) =>
            repositoryLoader.load(args.id),
    },
};

export default {
    typeDefs,
    resolvers,
};