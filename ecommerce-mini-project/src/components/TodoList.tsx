"use client";
import { useGetTodosQuery } from "@/services/todoApi";
import React from "react";

type TodoType = {
  id: number;
  todo: string;
  // Add other fields if needed
};


function TodoList() {
  const { data, error, isLoading } = useGetTodosQuery(null);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;
  console.log(data);

  return (
    <ul>
      {data?.todos?.map((item: TodoType) => (
        <li key={item.id}>{item.todo}</li>
      ))}
    </ul>
  );
}

export default TodoList;
