import { render } from '@testing-library/react';

import MobileSide from './mobile-side';

describe('MobileSide', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MobileSide />);
    expect(baseElement).toBeTruthy();
  });
});
