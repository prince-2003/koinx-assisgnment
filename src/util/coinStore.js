import {create} from 'zustand';
import { persist } from 'zustand/middleware';

const useCoinStore = create(
  persist(
    (set) => ({
      coinData: null,
      setCoinData: (data) => set({ coinData: data })
      
    }),
    { name: 'coin-store' } 
  )
);

export default useCoinStore;
