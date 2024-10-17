import React, { ReactNode } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Create an instance of Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // The GraphQL endpoint
  cache: new InMemoryCache(),
});

interface ApolloAppProviderProps {
  children: ReactNode;
}

// Apollo App Provider component
const ApolloAppProvider: React.FC<ApolloAppProviderProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloAppProvider;