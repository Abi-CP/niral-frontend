import { writable } from 'svelte/store';
// import { serverUrl } from '../.env';

const initialState = {
    pending: false,
    permitID: ''
  };

export const pendingPayment = writable(initialState);