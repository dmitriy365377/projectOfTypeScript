import {
    ErrorHttpAction,
    Starships,
    STARSHIPS_FETCH_ASYNC,
    STARSHIPS_FILL,
    STARSHIPS_SET_FETCHING_ERROR,
    STARSHIPS_START_FETCHING,
    STARSHIPS_STOP_FETCHING,
    StarshipsActionTypes
} from './types';


export type StarhipsState = {
    data: Starships;
    isFetching: boolean;
    error: false | ErrorHttpAction
}

const initialState: StarhipsState = {
    data: {
        results: []
    },
    isFetching: false,
    error: false
}

export const starshipsReducer = (state = initialState, action: StarshipsActionTypes): StarhipsState => {
    switch (action.type) {
        case STARSHIPS_START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case STARSHIPS_STOP_FETCHING:
            return {
                ...state,
                isFetching: false,
                error: false
            };
        case STARSHIPS_SET_FETCHING_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case STARSHIPS_FILL:
            return {
                ...state,
                data: {
                    ...action.payload
                },
                error: false
            }
        case STARSHIPS_FETCH_ASYNC:
            return state;
        default:
            return state
    }
}