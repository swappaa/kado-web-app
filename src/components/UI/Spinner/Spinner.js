import React from 'react';
import style from './Spinner.module.css';
import cx from 'classnames';

const spinner = () => (
    <div className={style['sk-circle']}>
        <div className={cx(style['sk-circle1'], style['sk-child'])}></div>
        <div className={cx(style['sk-circle2'], style['sk-child'])}></div>
        <div className={cx(style['sk-circle3'], style['sk-child'])}></div>
        <div className={cx(style['sk-circle4'], style['sk-child'])}></div>
        <div className={cx(style['sk-circle5'], style['sk-child'])}></div>
        <div className={cx(style['sk-circle6'], style['sk-child'])}></div>
        <div className={cx(style['sk-circle7'], style['sk-child'])}></div>
        <div className={cx(style['sk-circle8'], style['sk-child'])}></div>
        <div className={cx(style['sk-circle9'], style['sk-child'])}></div>
        <div className={cx(style['sk-circle10'], style['sk-child'])}></div>
        <div className={cx(style['sk-circle11'], style['sk-child'])}></div>
        <div className={cx(style['sk-circle12'], style['sk-child'])}></div>
    </div>
)

export default spinner;