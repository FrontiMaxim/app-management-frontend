import React from 'react';
import './Loader.scss';
import { PropsLoader } from './Loader.props';
import cn from 'classnames';

export const Loader = ({className}: PropsLoader) => {
  return (
    <div className={cn('loader', className)}>
        <svg width="183" height="179" viewBox="0 0 183 179" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="loader">
                <ellipse id="center_circle" cx="91.5" cy="89.5" rx="39.5" ry="37.5" fill="#FFFFFF"/>
                <g id="outer_ring">
                    <circle id="out_circle" cx="92" cy="14" r="14" fill="#FFFFFF"/>
                    <circle id="out_circle_2" cx="92" cy="165" r="14" fill="#FFFFFF"/>
                    <circle id="out_circle_3" cx="169" cy="90" r="14" fill="#FFFFFF"/>
                    <circle id="out_circle_4" cx="14" cy="90" r="14" fill="#FFFFFF"/>
                </g>
            </g>
        </svg>
    </div>
  )
}
