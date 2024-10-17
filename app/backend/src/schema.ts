// app/backend/src/schema.ts

// Import necessary GraphQL types and functions
import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID, GraphQLNonNull, GraphQLSchema, GraphQLInputObjectType } from 'graphql';
import { getRepository } from 'typeorm';
import { Lead } from './entity/Lead';

// Define a GraphQL type for Lead
const LeadType = new GraphQLObjectType({
  name: 'Lead',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    mobile: { type: GraphQLString },
    postcode: { type: GraphQLString },
    services: { type: new GraphQLList(GraphQLString) },
  }),
});

// Define the LeadInput type
const LeadInputType = new GraphQLInputObjectType({
  name: 'LeadInput',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    mobile: { type: new GraphQLNonNull(GraphQLString) },
    postcode: { type: new GraphQLNonNull(GraphQLString) },
    services: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
  },
});

// Defines the Root Query type for GraphQL
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // Query to fetch all leads
    leads: {
      type: new GraphQLList(LeadType),
      resolve: async () => {
        const leadRepository = getRepository(Lead);
        return await leadRepository.find();
      },
    },
    // Query to fetch a single lead by ID
    lead: {
      type: LeadType,
      args: { id: { type: GraphQLID } },
      resolve: async (_, { id }) => { 
        const leadRepository = getRepository(Lead);
        // Fetch and return the lead with the specified ID from the database
        return await leadRepository.findOne({ where: { id: Number(id) } });
      },
    },
  },
});

// Define the mutation type for GraphQL
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Mutation to register a new lead
    registerLead: {
      type: LeadType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        mobile: { type: new GraphQLNonNull(GraphQLString) },
        postcode: { type: new GraphQLNonNull(GraphQLString) },
        services: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
      },
      resolve: async (_, { name, email, mobile, postcode, services }) => {
        const leadRepository = getRepository(Lead);
        // Create a new lead object using the provided arguments
        const lead = leadRepository.create({ name, email, mobile, postcode, services });
        // Save the new lead to the database and return it
        return await leadRepository.save(lead);
      },
    },
  },
});

// Export the complete GraphQL schema, combining queries and mutations
export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});