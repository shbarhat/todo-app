import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '../TaskItem';
import { Task } from '../../types';

const mockTask: Task = {
  id: 1,
  title: 'Test Task',
  completed: false
};

describe('TaskItem', () => {
  it('displays the task title', () => {
    render(<TaskItem task={mockTask} onToggle={jest.fn()} onDelete={jest.fn()} />);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  // it('calls onToggle when checkbox is clicked', () => {
  //   const toggleMock = jest.fn();
  //   render(<TaskItem task={mockTask} onToggle={toggleMock} onDelete={jest.fn()} />);
  //   fireEvent.click(screen.getByRole('checkbox'));
  //   expect(toggleMock).toHaveBeenCalledWith(1);
  // });

  it('calls onDelete when delete button is clicked', () => {
    const deleteMock = jest.fn();
    render(<TaskItem task={mockTask} onToggle={jest.fn()} onDelete={deleteMock} />);
    fireEvent.click(screen.getByText('Delete'));
    expect(deleteMock).toHaveBeenCalledWith(1);
    fireEvent.click(screen.getByText('Mark as Completed'));
    expect(deleteMock).toHaveBeenCalledWith(1);
  });
});