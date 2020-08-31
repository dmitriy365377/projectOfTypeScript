import { Starships } from './../../types';

import {
    startFetching,
    stopFetching,
    fill,
    setFetchingError
} from '../../action'

import { makeRequestWithSpinner } from ''

import { api } from ''

export function* fetchStarships() {
    const options = {
        fetcher: api.starships.fetch,
        startFetching,
        stopFetching,
        fill,
        setErrorAction: setFetchingError
    }

    yield makeRequestWithSpinner<Starships>(options);
}