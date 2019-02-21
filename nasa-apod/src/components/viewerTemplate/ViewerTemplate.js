import React from 'react';
import styles from './ViewerTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

//  space-navigator-wrapper를 viewer-wrapper 내부에 넣어준 이유는, 추후 SpaceNavigator 컴포넌트에서 위치선정을 하게 될 때 
//  viewer-wrapper의 크기에 기반하여 설정할 것이기 때문
const ViewerTemplate = ({ viewer, spaceNavigator }) => {
    return(
        <div className={cx('viewer-template')}>
            <header>
                Astronomy Picture of the Day
            </header>
            <div className={cx('viewer-wrapper')}>
                {viewer}
                <div className={cx('space-navigator-wrapper')}>
                    {spaceNavigator}
                </div>
            </div>
        </div>
    );
};

export default ViewerTemplate;