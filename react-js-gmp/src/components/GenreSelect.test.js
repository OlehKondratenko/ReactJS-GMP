import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GenreSelect from './GenreSelect';

describe('GenreSelect Component', () => {
  const genres = ['Action', 'Comedy', 'Drama', 'Horror'];
  const selectedGenre = 'Comedy';
  const onChangeMock = jest.fn();

  test('renders all genres passed in props', () => {
    render(<GenreSelect genres={genres} selectedGenre={selectedGenre} onChange={onChangeMock} />);
    genres.forEach((genre) => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });

  test('highlights the selected genre passed in props', () => {
    render(<GenreSelect genres={genres} selectedGenre={selectedGenre} onChange={onChangeMock} />);
    const selectedButton = screen.getByText(selectedGenre);
    expect(selectedButton).toHaveClass('selected');
  });

  test('calls "onChange" callback with correct genre after click event', () => {
    render(<GenreSelect genres={genres} selectedGenre={selectedGenre} onChange={onChangeMock} />);
    const actionButton = screen.getByText('Action');
    fireEvent.click(actionButton);
    expect(onChangeMock).toHaveBeenCalledWith('Action');
  });
});
