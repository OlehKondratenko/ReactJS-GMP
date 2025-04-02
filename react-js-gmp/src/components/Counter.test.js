import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders initial value provided in props', () => {
    render(<Counter initialValue={5} />);
    const counterValue = screen.getByText('Count: 5');
    expect(counterValue).toBeInTheDocument();
  });

  test('clicking "decrement" button decrements the displayed value', () => {
    render(<Counter initialValue={5} />);
    const decrementButton = screen.getByText('Decrement');
    fireEvent.click(decrementButton);
    const counterValue = screen.getByText('Count: 4');
    expect(counterValue).toBeInTheDocument();
  });

  test('clicking "increment" button increments the displayed value', () => {
    render(<Counter initialValue={5} />);
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);
    const counterValue = screen.getByText('Count: 6');
    expect(counterValue).toBeInTheDocument();
  });
});
