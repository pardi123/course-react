import { render } from '@testing-library/react';

import AdminPageeSharedLayout from './admin-pagee-shared-layout';

describe('AdminPageeSharedLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <AdminPageeSharedLayout children={undefined} />
    );
    expect(baseElement).toBeTruthy();
  });
});
