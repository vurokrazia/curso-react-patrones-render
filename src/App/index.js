import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
<<<<<<< HEAD
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
=======
>>>>>>> curse
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
<<<<<<< HEAD
import { ChangeAlert } from '../ChangeAlert';
=======
import { TodoSearch } from '../TodoSearch';
import { TodoCounter } from '../TodoCounter';
import { ChangeAlertWithStorageListener } from '../ChangeAlert'
>>>>>>> curse

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
<<<<<<< HEAD
    setOpenModal,
=======
>>>>>>> curse
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeTodos,
  } = useTodos();
  
  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySeachResults={
          (searchText) => <p> No hay resultados para {searchText} </p>
        }
      // render={todo => (
      //   <TodoItem
      //     key={todo.text}
      //     text={todo.text}
      //     completed={todo.completed}
      //     onComplete={() => completeTodo(todo.text)}
      //     onDelete={() => deleteTodo(todo.text)}
      //   />
      // )}
      >
        {
          todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )
        }
      </TodoList >

      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
      <ChangeAlertWithStorageListener />


    </React.Fragment>
  );
}

export default App;
