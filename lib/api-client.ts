/**
 * =================================
 * API Client
 *
 * This file configures and exports an Axios instance for making API requests.
 * It also defines a set of functions for interacting with the todo and category
 * endpoints, ensuring type safety and consistency across the application.
 * =================================
 */

import axios, { AxiosInstance } from "axios";
import {
  Todo,
  Category,
  CreateTodoPayload,
  UpdateTodoPayload,
  CreateCategoryPayload,
  UpdateCategoryPayload,
} from "../types";

// Create an Axios instance with a base URL for the API
const apiClient: AxiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

/**
 * =================================
 * TODO API Functions
 * =================================
 */

export const getTodos = async (): Promise<Todo[]> => {
  const response = await apiClient.get<Todo[]>("/todos");
  return response.data;
};

export const getTodoById = async (id: string): Promise<Todo> => {
  const response = await apiClient.get<Todo>(`/todos/${id}`);
  return response.data;
};

export const createTodo = async (payload: CreateTodoPayload): Promise<Todo> => {
  const response = await apiClient.post<Todo>("/todos", payload);
  return response.data;
};

export const updateTodo = async (
  id: string,
  payload: UpdateTodoPayload,
): Promise<Todo> => {
  const response = await apiClient.put<Todo>(`/todos/${id}`, payload);
  return response.data;
};

export const clearCompletedTodos = async (): Promise<Todo[]> => {
  const response = await apiClient.delete<Todo[]>("/todos");
  return response.data;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await apiClient.delete(`/todos/${id}`);
};

/**
 * =================================
 * CATEGORY API Functions
 * =================================
 */

export const getCategories = async (): Promise<Category[]> => {
  const response = await apiClient.get<Category[]>("/categories");
  return response.data;
};

export const getCategoryById = async (id: string): Promise<Category> => {
  const response = await apiClient.get<Category>(`/categories/${id}`);
  return response.data;
};

export const createCategory = async (
  payload: CreateCategoryPayload,
): Promise<Category> => {
  const response = await apiClient.post<Category>("/categories", payload);
  return response.data;
};

export const updateCategory = async (
  id: string,
  payload: UpdateCategoryPayload,
): Promise<Category> => {
  const response = await apiClient.put<Category>(`/categories/${id}`, payload);
  return response.data;
};

export const deleteCategory = async (id: string): Promise<void> => {
  await apiClient.delete(`/categories/${id}`);
};

export default apiClient;
