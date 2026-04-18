import { create } from "zustand";
import type { ChatResponse } from "../types";

interface LogsStore {
    logs: ChatResponse[]
    addLog: (log: ChatResponse) => void
}

export const useLogsStore = create<LogsStore>((set) => ({
    logs: [],
    addLog: (log) => set((state) => ({ logs: [...state.logs, log] }))
}))
