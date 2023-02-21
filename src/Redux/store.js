import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRandom = createAsyncThunk('messages/fetchRamdom', async () => {
  const response = await fetch('http://127.0.0.1:3000/random', {
    method: 'GET',
    mode: 'cors',
  });
  const data = await response.json();
  return data;
});

const messageSlice = createSlice({
  name: 'randomess',
  initialState: {
    message: '',
    status: '',
    error: null,
  },
  reducers: {
  },
  extraReducers(builder) {
    /* eslint-disable no-param-reassign */
    builder
      .addCase(fetchRandom.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRandom.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched posts to the array
        state.message = action.payload.body;
      })
      .addCase(fetchRandom.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
    /* eslint-enable no-param-reassign */
  },
});

const store = configureStore({
  reducer: messageSlice.reducer,
});

export default store;
