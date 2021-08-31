import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { TaskList } from '../../components/TaskList';

describe('App Page', () => {
  it('should be able to add a task', async () => {
    render(<TaskList />);

    // Pega o input pelo placeholder
    const taskInput = screen.getByPlaceholderText('Adicionar novo todo');
    // Pega o button pela data-testid
    const addTaskButton = screen.getByTestId('add-task-button');
    
    // Utilizar o fireEvent para simular evento de onchange no input taskInput
    fireEvent.change(taskInput, {
      target: {
        value: 'Desafio ReactJS Ignite'
      }
    });
    // Utilzar o onclick para adicionar o texto do taskInput
    fireEvent.click(addTaskButton);

    // Pegar a task adicionada pelo texto
    const addedFirstTaskTitle = screen.getByText('Desafio ReactJS Ignite');

    // Verificar se addedFirstTaskTitle se possui o texto correto
    expect(addedFirstTaskTitle).toHaveTextContent('Desafio ReactJS Ignite');
    // Verifica se o elemento pai do texto possui a classe 'completed'
    expect(addedFirstTaskTitle.parentElement).not.toHaveClass('completed')

    fireEvent.change(taskInput, {
      target: {
        value: 'Beber água'
      }
    });
    fireEvent.click(addTaskButton);

    const addedSecondTaskTitle = screen.getByText('Beber água');

    // Verifica se a primeira task adicionada está no documento
    expect(addedFirstTaskTitle).toBeInTheDocument();
    expect(addedFirstTaskTitle).toHaveTextContent('Desafio ReactJS Ignite');
    expect(addedFirstTaskTitle.parentElement).not.toHaveClass('completed')

    // Verifica se a segunda task tem o texto correto
    expect(addedSecondTaskTitle).toHaveTextContent('Beber água');
    // Verifica se o elemento pai não tem a classe 'completed'
    expect(addedSecondTaskTitle.parentElement).not.toHaveClass('completed')
  })

  it('should not be able to add a task with a empty title', () => {
    render(<TaskList />);

    // Pega o button
    const addTaskButton = screen.getByTestId('add-task-button');
    // Evento de click 
    fireEvent.click(addTaskButton);

    // Verifica se o elemento com o data-testId task, não é renderizado na página
    expect(screen.queryByTestId('task')).not.toBeInTheDocument();

    const taskInput = screen.getByPlaceholderText('Adicionar novo todo');

    fireEvent.change(taskInput, {
      target: {
        value: 'Desafio ReactJS Ignite'
      }
    });
    
    fireEvent.click(addTaskButton);

    const addedFirstTaskTitle = screen.getByText('Desafio ReactJS Ignite');

    expect(addedFirstTaskTitle).toHaveTextContent('Desafio ReactJS Ignite');
  })

  it('should be able to remove a task', async () => {
    render(<TaskList />);

    const taskInput = screen.getByPlaceholderText('Adicionar novo todo');
    const addTaskButton = screen.getByTestId('add-task-button');

    fireEvent.change(taskInput, {
      target: {
        value: 'Desafio ReactJS Ignite'
      }
    });
    fireEvent.click(addTaskButton);

    fireEvent.change(taskInput, {
      target: {
        value: 'Beber água'
      }
    });
    fireEvent.click(addTaskButton);

    const addedFirstTaskTitle = screen.getByText('Desafio ReactJS Ignite');
    const addedSecondTaskTitle = screen.getByText('Beber água');

    expect(addedFirstTaskTitle).toBeInTheDocument()
    expect(addedSecondTaskTitle).toBeInTheDocument();

    // Pega o botão de remover as tasks pelo data-testid, o botão é verificado desse jeito pelo fato de ser renderizado um botão por task adicionada, ou seja, retorna todos os botões criados
    const [addedFirstTaskRemoveButton] = screen.getAllByTestId('remove-task-button');

    // Remove a task clicada
    fireEvent.click(addedFirstTaskRemoveButton);

    // Verifica e espera que a addedFirstTaskTitle não esteja mais na tela
    expect(addedFirstTaskTitle).not.toBeInTheDocument();
    // Verifica e espera que a addedSecondTaskTitle esteja na telas
    expect(addedSecondTaskTitle).toBeInTheDocument();
  })

  it('should be able to check a task', () => {
    render(<TaskList />);

    const taskInput = screen.getByPlaceholderText('Adicionar novo todo');
    const addTaskButton = screen.getByTestId('add-task-button');

    fireEvent.change(taskInput, {
      target: {
        value: 'Desafio ReactJS Ignite'
      }
    });
    fireEvent.click(addTaskButton);

    fireEvent.change(taskInput, {
      target: {
        value: 'Beber água'
      }
    });
    fireEvent.click(addTaskButton);

    // Pega as duas tasks pelo data-testId
    const [addedFirstTask, addedSecondTask] = screen.getAllByTestId('task');
    // Faz o evento de click no primeiro elemento filho da div que tem data-testId
    if (addedFirstTask.firstChild) {
      fireEvent.click(addedFirstTask.firstChild)
    }

    // Espera que addedFirstTask esteja na tela
    expect(addedFirstTask).toBeInTheDocument();
    // Espera que addedFirstTask tenha a classe 'completed'
    expect(addedFirstTask).toHaveClass('completed');

    // Espera que addedSecondTask esteja na tela
    expect(addedSecondTask).toBeInTheDocument();
    // Espera que addedSecondTask não tenha a classe 'completed'
    expect(addedSecondTask).not.toHaveClass('completed');
  })
})
