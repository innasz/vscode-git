import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Footer from '../components/Footer';
import TodoList from '../components/TodoList';

function Main() {
  return (
    <>
      <Header />
      <Input />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
      <Footer />
    </>
  );
}

export default Main;
