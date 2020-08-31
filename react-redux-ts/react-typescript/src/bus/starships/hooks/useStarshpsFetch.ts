import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAsync } from '../action';
import { StarhipsState } from '../reducer';
import { AppState } from '../../../init/rootReducer'

export const useStarshpsFetch = (): StarhipsState => {
    const dispatch = useDispatch();

    const {
        data,
        isFetching,
        error
    } = useSelector<AppState, StarhipsState>((state) => state.starships)

    useEffect(() => {
        dispatch(fetchAsync())
    }, [dispatch])


    return {
        isFetching,
        data,
        error,
    }
}