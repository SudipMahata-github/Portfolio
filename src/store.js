// import { create } from 'zustand'
// import { persist } from "zustand/middleware"

// const useTokenStore = create(
//     persist((set) => ({
//         token: "",
//         setToken: (data) => set({ token: data }),
//     })),
//     { name: "token-store" }
// )

// export default useTokenStore;


import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
// import type { PersistOptions } from 'zustand/middleware/persist' // Updated type import



const useTokenStore = create(
    devtools(
        persist(
            (set) => ({
                token: "",
                setToken: (data) => set((state) => ({ token: data })),
            }),
            { name: 'token-data' },
        ),
    ),
)

export default useTokenStore;
