import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 0,
      txt: 'beast',
    },
    {
      id: 1,
      txt: 'rwad',
    },
  ],
  reducers: {
    add(state, { payload }) {
      state.push(payload);
    },
    del(state, { payload }) {
      return (state = state.filter(({ id }) => id !== payload));
    },
  },
});

// action
export const { add, del } = todoSlice.actions;

// state (referencing the store)
export const selectTodos = ({ todos }) => todos;

// reducer
export default todoSlice.reducer;
