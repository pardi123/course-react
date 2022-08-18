import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AdminPageeSharedLayout } from '@course-react/admin-pagee/shared/layout';

export function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route
          path="/"
          element={<AdminPageeSharedLayout children={undefined} />}
        />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
