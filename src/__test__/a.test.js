// import React from 'react';
import '@testing-library/react'; // 导入 @testing-library/react 模块
import '@testing-library/jest-dom'; // 导入 extend-expect 函数


import Administration from '../features/settings/Administration';

import { render, screen } from '@testing-library/react';

test('renders administration page heading', async () => {
  render(<Administration />);
  const headingElement = screen.getAllByRole('heading');
  // expect(headingElement).toHaveLength(1);
  expect(screen.getByText('Administration Page')).toBeInTheDocument();
});


