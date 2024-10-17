import React from 'react';
import ApolloAppProvider from './ApolloProvider';
import LeadPage from './components/Lead/Page';


const App: React.FC = () => {
  
  return (
    <ApolloAppProvider>
      <LeadPage/>
    </ApolloAppProvider>
  );
}

export default App;
