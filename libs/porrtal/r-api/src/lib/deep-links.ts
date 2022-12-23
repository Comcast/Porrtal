import { StateObject } from "./view-state"

export interface DeepLinks {
    [key: string]: {
        viewId?: string,
        state?: StateObject
    }
}
