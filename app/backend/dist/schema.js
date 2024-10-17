"use strict";
// app/backend/src/schema.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
// Import necessary GraphQL types and functions
const graphql_1 = require("graphql");
const typeorm_1 = require("typeorm");
const Lead_1 = require("./entity/Lead");
// Define a GraphQL type for Lead
const LeadType = new graphql_1.GraphQLObjectType({
    name: 'Lead',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        mobile: { type: graphql_1.GraphQLString },
        postcode: { type: graphql_1.GraphQLString },
        services: { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
    }),
});
// Defines the Root Query type for GraphQL
const RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // Query to fetch all leads
        leads: {
            type: new graphql_1.GraphQLList(LeadType),
            resolve: () => __awaiter(void 0, void 0, void 0, function* () {
                const leadRepository = (0, typeorm_1.getRepository)(Lead_1.Lead);
                return yield leadRepository.find();
            }),
        },
        // Query to fetch a single lead by ID
        lead: {
            type: LeadType,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
                const leadRepository = (0, typeorm_1.getRepository)(Lead_1.Lead);
                // Fetch and return the lead with the specified ID from the database
                return yield leadRepository.findOne({ where: { id: Number(id) } });
            }),
        },
    },
});
// Define the mutation type for GraphQL
const Mutation = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // Mutation to register a new lead
        registerLead: {
            type: LeadType,
            args: {
                name: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                email: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                mobile: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                postcode: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                services: { type: new graphql_1.GraphQLNonNull(new graphql_1.GraphQLList(graphql_1.GraphQLString)) },
            },
            resolve: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { name, email, mobile, postcode, services }) {
                const leadRepository = (0, typeorm_1.getRepository)(Lead_1.Lead);
                // Create a new lead object using the provided arguments
                const lead = leadRepository.create({ name, email, mobile, postcode, services });
                // Save the new lead to the database and return it
                return yield leadRepository.save(lead);
            }),
        },
    },
});
// Export the complete GraphQL schema, combining queries and mutations
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
