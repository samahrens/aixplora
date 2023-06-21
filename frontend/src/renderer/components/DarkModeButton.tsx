import React from 'react';
import { Button } from '@mantine/core';

function ThemeToggleButton({ toggleTheme, colorScheme }) {
  const handleClick = () => {
    toggleTheme();
  };

  return (
    <Button onClick={handleClick}>
      Toggle {colorScheme === 'dark' ? 'Light' : 'Dark'} Mode
    </Button>
  );
}

export default ThemeToggleButton;
