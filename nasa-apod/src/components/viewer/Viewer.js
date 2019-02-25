import React from 'react';
import styles from './Viewer.scss';
import classNames from 'classnames/bind';

//  loading 화면 필요할 시 사용하는 library
import { ChasingDots } from 'better-react-spinkit';

//  nasa API Key
//  W9Gh55nWWBsEGiOLkxunhkrWBQ6XJkAPAAkXdi9J
//  "https://api.nasa.gov/planetary/apod?api_key=W9Gh55nWWBsEGiOLkxunhkrWBQ6XJkAPAAkXdi9J"

const cx = classNames.bind(styles);
const Viewer = ( { mediaType, url, loading }) => {
    
    if(loading) {
        return <div classNames={cx('viewer')}> <ChasingDots className="dot" color="blue" size={60} /></div>
    }

    if(!url) return null;

    return(
        <div className = {cx('viewer')}>
            {
                mediaType === 'image' ? (<img onClick ={() => window.open(url)} src = {url} alt="space"/>) : (<iframe title="space-video" src={url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>)
            }
        </div>
    );
};

export default Viewer;