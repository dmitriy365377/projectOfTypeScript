import {
    StarshipActionTypes,
    STARSHIPS_START_FETCHING,
    STARSHIPS_STOP_FETCHING,
    STARSHIPS_FETCH_ASYNC,
    StarshipsFillAction,
    StarshipsSetFetchingErrorAction,
    ErrorHttpAction,
    Starships,
    STARSHIPS_SET_FETCHING_ERROR,
    STARSHIPS_FILL,
} from './types';

// Синхронный запрос

export function startFetching(): StarshipActionTypes {
    return {
        type: STARSHIPS_START_FETCHING
    }
}

export function stopFetching(): StarshipActionTypes {
    return {
        type: STARSHIPS_STOP_FETCHING
    }
}

export function fill(payload: Starships): StarshipsFillAction {
    return {
        type: STARSHIPS_FILL,
        payload
    }
}

export function setFetchingError(payload: ErrorHttpAction): StarshipsSetFetchingErrorAction {
    return {
        type: STARSHIPS_SET_FETCHING_ERROR,
        error: true,
        payload
    }
}

// Асинхронные запросы 
export function fetchAsync(): StarshipActionTypes {
    return {
        type: STARSHIPS_FETCH_ASYNC
    }
}
