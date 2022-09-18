import { createSlice } from '@reduxjs/toolkit';

import { registration, entry } from './auth-operations';

const initialState = {
  user: {},
  isLogin: false,
  token: '',
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registration.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [registration.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [registration.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [entry.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [entry.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [entry.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default authSlice.reducer;
