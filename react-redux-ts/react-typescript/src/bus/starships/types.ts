export type Starship = {
    name: string
}

export type Starships = {
    results: Starship[]
}

export type ErrorHttpAction = {
    status: number
}

// синхронные action 

export const STARSHIPS_START_FETCHING = 'STARSHIPS_START_FETCHING'

type StarshipsStartFetchingAction = {
    type: typeof STARSHIPS_START_FETCHING
}

export const STARSHIPS_STOP_FETCHING = 'STARSHIPS_STOP_FETCHING'

type StarshipsStopFetchingAction = {
    type: typeof STARSHIPS_STOP_FETCHING
}

export const STARSHIPS_FILL_FETCHING = 'STARSHIPS_FILL_FETCHING'

type StarshipsFillFetchingAction = {
    type: typeof STARSHIPS_FILL_FETCHING
}

export const STARSHIPS_FILL = 'STARSHIPS_FILL'

export type StarshipsFillAction = {
    type: typeof STARSHIPS_FILL;
    payload: Starships
}

export const STARSHIPS_SET_FETCHING_ERROR = 'STARSHIPS_SET_FETCHING_ERROR'

export type StarshipsSetFetchingErrorAction = {
    type: typeof STARSHIPS_SET_FETCHING_ERROR;
    error: true;
    payload: ErrorHttpAction
}

// Async 

export const STARSHIPS_FETCH_ASYNC = 'STARSHIPS_FETCH_ASYNC'

type StarshipsFetchAsyncAction = {
    type: typeof STARSHIPS_FETCH_ASYNC;
}

export type StarshipActionTypes =
    | StarshipsStartFetchingAction
    | StarshipsStopFetchingAction
    | StarshipsFillFetchingAction
    | StarshipsFillAction
    | StarshipsSetFetchingErrorAction
    | StarshipsFetchAsyncAction