"use strict";
// app/backend/src/server.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import necessary modules and decorators
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const typeorm_1 = require("typeorm");
const schema_1 = require("./schema");
const ormconfig_1 = __importDefault(require("./ormconfig")); // Import the ORM configuration
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    // Connect to the database using the config
    yield (0, typeorm_1.createConnection)(ormconfig_1.default);
    app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
        schema: schema_1.schema,
        graphiql: true,
    }));
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}/graphql`);
    });
});
startServer().catch((error) => console.error(error));
