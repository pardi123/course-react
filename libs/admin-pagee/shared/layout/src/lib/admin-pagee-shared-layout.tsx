import { Box, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Sidebar from '../sidebar/sidebar/sidebar';

/* eslint-disable-next-line */
export interface AdminPageeSharedLayoutProps {}

export function AdminPageeSharedLayout({ children }: { children: ReactNode }) {
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <Sidebar />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

export default AdminPageeSharedLayout;
