import React from 'react';
import { FiMonitor } from 'react-icons/fi';

import { Wrapper } from './styles';

export const Sidebar = () => {
  return (
    <Wrapper>
      <a href="#">
        <FiMonitor className="icon" />
        <span>Dashboard</span>
      </a>
    </Wrapper>
  );
}