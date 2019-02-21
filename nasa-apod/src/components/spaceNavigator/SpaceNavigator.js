import React from 'react';
import styles from './SpaceNavigator.scss';
import classNames from 'classnames/bind';
import {IoIosArrowRoundBack} from 'react-icons/io';
import {IoIosArrowRoundForward} from 'react-icons/io';

//  react-icons 경로 및 이름 사이트
//  https://react-icons.netlify.com/#/icons/io
const cx = classNames.bind(styles);
const SpaceNavigator = ( { onPrev, onNext }) => {
    return(
        <div className = {cx('space-navigator')}>
            <div className = {cx('left', 'end')}>
                <div className = {cx('circle')} onClick={onPrev}>
                    <IoIosArrowRoundBack />
                </div>
            </div>
            <div className = {cx('right', 'end')}>
                <div className = {cx('circle')} onClick={onNext}>
                    <IoIosArrowRoundForward />
                </div>
            </div>
        </div>
    );
};

export default SpaceNavigator;