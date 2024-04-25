import { render } from '@testing-library/react';

import Mocks from './mocks';

describe('Mocks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Mocks />);
    expect(baseElement).toBeTruthy();
  });
});
