export interface initStore {
    flights: any[],
    flightInfo: {
        location: string,
        arrival: string,
        departure: string,
        airline: string
    }
    modal: boolean
}

export interface rootState {
    state: initStore
}