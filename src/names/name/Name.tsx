import React from 'react';
import css from './Name.module.scss';

const Name = (props: any) => {
// const Name = (props: NameProps) => {
    return (
        <p className={css.Name}>
        {/*<p >*/}
            {/*{name}*/}
            {props.name}
            {props.children}
        </p>

    );
};

export default Name;

interface NameProps{
    name: string;
    children: string;
}