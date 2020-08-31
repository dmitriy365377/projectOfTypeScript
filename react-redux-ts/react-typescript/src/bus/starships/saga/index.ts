import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

import { STARSHIPS_FETCH_ASYNC } from '../types';

import { fetchStarships } from '../workers';

function* watchFetchStarships(): SagaIterator {
    yield takeEvery(STARSHIPS_FETCH_ASYNC, fetchStarships)
}

export function* watchStarships(): SagaIterator {
    yield all([
        call(watchFetchStarships)
    ])
}