import React from 'react';
import './Arrow.css';

export const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, fontSize: "3rem", display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

export const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,  display: "block", background: "red" }}
            onClick={onClick}
        />
        );
};
