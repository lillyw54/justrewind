const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
  },
  Mutation: {
    createUser: (parent, args) => {
      const { name } = args;
      // Logic to create a user in your database
      return { id: 1, name };
    },
  },
};

module.exports = resolvers;