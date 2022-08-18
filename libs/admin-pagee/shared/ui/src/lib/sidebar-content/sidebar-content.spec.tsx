import { render } from '@testing-library/react';

import SidebarContent from './sidebar-content';

describe('SidebarContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SidebarContent />);
    expect(baseElement).toBeTruthy();
  });
});
