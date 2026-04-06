import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Icon from './Icon';
import { getIconForEmoji } from '../utils/emojiMap';

describe('Icon component', () => {
  it('renders correctly with the given name', () => {
    render(<Icon name="shield" data-testid="test-icon" />);
    const iconElement = screen.getByTestId('test-icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveTextContent('shield');
    expect(iconElement).toHaveClass('material-symbols-outlined');
  });

  it('applies additional classNames', () => {
    render(<Icon name="star" className="text-red-500" data-testid="test-icon" />);
    const iconElement = screen.getByTestId('test-icon');
    expect(iconElement).toHaveClass('text-red-500');
  });

  it('sets aria-label and aria-hidden appropriately', () => {
    const { rerender } = render(<Icon name="water_drop" data-testid="test-icon" />);
    let iconElement = screen.getByTestId('test-icon');
    expect(iconElement).toHaveAttribute('aria-hidden', 'true');
    expect(iconElement).not.toHaveAttribute('aria-label');

    rerender(<Icon name="water_drop" ariaLabel="Water Resistance" data-testid="test-icon" />);
    iconElement = screen.getByTestId('test-icon');
    expect(iconElement).toHaveAttribute('aria-hidden', 'false');
    expect(iconElement).toHaveAttribute('aria-label', 'Water Resistance');
  });
});

describe('emojiMap utility', () => {
  it('maps emojis to correct Material Symbol names', () => {
    expect(getIconForEmoji('🛡️')).toBe('shield');
    expect(getIconForEmoji('💧')).toBe('water_drop');
    expect(getIconForEmoji('⭐')).toBe('star');
  });

  it('returns null for unknown emojis', () => {
    expect(getIconForEmoji('unknown')).toBeNull();
  });
});
