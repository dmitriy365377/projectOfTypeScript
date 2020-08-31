import React, { FC, useState } from 'react'

type PropTypes = {
    title?: string;
    children?: never;
}

export const Header: FC<PropTypes> = ({ title }: PropTypes) => {
    const content = typeof title === 'string' ? title.toLocaleLowerCase() : null;
    // нужно использовать дженерик если передаются пропсы в useState если их нету дженерик можно не указывать
    const [counter, setCounter] = useState(0) 

    setCounter(2)

    const increase = ():void => {
        setCounter((prevCounter) => prevCounter + 1)
    }

    const decrease = ():void => {
        setCounter((prevCounter) => prevCounter - 1)
    }

    return (
        <>
            <h1>{content}</h1>
            <h3>{counter}</h3>
        </>
    )
}

Header.defaultProps = {
    title: 'Hello'
}