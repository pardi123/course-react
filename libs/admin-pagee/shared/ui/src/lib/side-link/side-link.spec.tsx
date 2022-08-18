import { render } from '@testing-library/react';

import SideLink from './side-link';

describe('SideLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SideLink />);
    expect(baseElement).toBeTruthy();
  });
});
