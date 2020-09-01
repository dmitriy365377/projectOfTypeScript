import React, { FC, ReactElement } from 'react';
import { useStarshpsFetch } from '../starships/hooks/useStarshpsFetch';
import { Title } from '../../elements/title/index';
import { Starship } from './types';

export const Starships: FC = () => {
    const { isFetching, data, error } = useStarshpsFetch();

    const errorMessageJSX = error && <p>{error}</p>;
    const loaderJSX = isFetching && <p>Loading data from API...</p>

    const listJSX = isFetching || data.results.map(
        ({ name }: Starship, index: number): ReactElement => <li key={Number(index)}>{name}</li>
    )

    return (
        <>
            <Title>Starships</Title>
            {errorMessageJSX}
            {loaderJSX}
            {listJSX}
            {console.log('data',data)}
        </>
    )
}