import { create } from "zustand";
import type { ChatResponse } from "../types";

interface LogsStore {
    logs: ChatResponse[]
    addLog: (log: ChatResponse) => void
    setLogs: (logs: ChatResponse[]) => void
}

export const useLogsStore = create<LogsStore>((set) => ({
    logs: [],
    addLog: (log) => set((state) => ({ logs: [...state.logs, log] })),
    setLogs: (logs) => set({logs})
}))
