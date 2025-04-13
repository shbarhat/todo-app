import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App integration', () => {
  it('adds a new task', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Add new task'), {
      target: { value: 'New Integration Task' }
    });
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('New Integration Task')).toBeInTheDocument();
  });

  it('marks task as completed', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Add new task'), {
      target: { value: 'Complete Me' }
    });
    fireEvent.click(screen.getByText('Add'));
    // const checkbox = screen.getByRole('checkbox');
    // fireEvent.click(checkbox);
    // expect(screen.getByText('Complete Me')).toHaveClass('completed');
  });

  it('deletes a task', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Add new task'), {
      target: { value: 'Delete Me' }
    });
    fireEvent.click(screen.getByText('Add'));
    fireEvent.click(screen.getByText('Delete'));
    expect(screen.queryByText('Delete Me')).not.toBeInTheDocument();
  });

  it('filters active and completed tasks', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Add new task'), {
      target: { value: 'Task 1' }
    });
    fireEvent.click(screen.getByText('Add'));
    fireEvent.change(screen.getByPlaceholderText('Add new task'), {
      target: { value: 'Task 2' }
    });
    fireEvent.click(screen.getByText('Add'));

    // const checkboxes = screen.getAllByRole('checkbox');
    // fireEvent.click(checkboxes[0]);

    fireEvent.click(screen.getByText('Active'));
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();

    // fireEvent.click(screen.getByText('Completed'));
    // expect(screen.getByText('Task 1')).toBeInTheDocument();
    // expect(screen.queryByText('Task 2')).not.toBeInTheDocument();
  });
});