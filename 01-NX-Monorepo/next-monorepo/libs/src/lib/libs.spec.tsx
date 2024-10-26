import { render } from '@testing-library/react';

import Libs from './libs';

describe('Libs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Libs />);
    expect(baseElement).toBeTruthy();
  });
});
