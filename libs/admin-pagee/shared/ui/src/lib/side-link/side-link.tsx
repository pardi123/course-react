import { Flex, FlexProps, Link, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
/* eslint-disable-next-line */
export interface SideLinkProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}

export const SideLink = ({ icon, children, ...rest }: SideLinkProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default SideLink;
