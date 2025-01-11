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

const useTrendingCoinStore = create(
  persist(
    (set) => ({
      trending: [],
      setTrending: (data) => set({ trending: data })
    }),
    { name: 'trending-coin-store' }
  )
);

export { useTrendingCoinStore };