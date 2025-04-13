import { render, screen, fireEvent } from '@testing-library/react';
import AddTask from '../AddTask';

describe('AddTask', () => {
  it('calls onAdd when a task is added', () => {
    const mockAdd = jest.fn();
    render(<AddTask onAdd={mockAdd} />);

    const input = screen.getByPlaceholderText('Add new task');
    const button = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);

    expect(mockAdd).toHaveBeenCalledWith('New Task');
  });

  it('does not call onAdd for empty input', () => {
    const mockAdd = jest.fn();
    render(<AddTask onAdd={mockAdd} />);
    fireEvent.click(screen.getByText('Add'));
    expect(mockAdd).not.toHaveBeenCalled();
  });
});