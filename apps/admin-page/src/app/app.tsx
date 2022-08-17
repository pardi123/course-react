import styled from '@emotion/styled';

import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { SharedLayoutSidebar } from '@course-react/shared/layout/sidebar';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<SharedLayoutSidebar />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
