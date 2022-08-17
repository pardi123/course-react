import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SharedLayoutSidebarProps {}

const StyledSharedLayoutSidebar = styled.div`
  color: pink;
`;

export function SharedLayoutSidebar(props: SharedLayoutSidebarProps) {
  return (
    <StyledSharedLayoutSidebar>
      <h1>Welcome to SharedLayoutSidebar!</h1>
    </StyledSharedLayoutSidebar>
  );
}

export default SharedLayoutSidebar;
