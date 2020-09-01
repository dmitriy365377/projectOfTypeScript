import {all} from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

//Wathers
import { watchStarships } from '../bus/starships/saga'

export function* rootSaga(): Generator {
    yield all([watchStarships()])
}