import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';
import { SidebarContent } from '@course-react/admin-pagee/shared/ui';
import { MobileSide } from '@course-react/admin-pagee/shared/ui';

/* eslint-disable-next-line */
export interface SidebarProps {}

export function Sidebar(Props: SidebarProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileSide display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
    </Box>
  );
}

export default Sidebar;
