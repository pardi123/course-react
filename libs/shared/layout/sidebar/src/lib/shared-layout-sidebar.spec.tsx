import { render } from '@testing-library/react';

import SharedLayoutSidebar from './shared-layout-sidebar';

describe('SharedLayoutSidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedLayoutSidebar />);
    expect(baseElement).toBeTruthy();
  });
});
