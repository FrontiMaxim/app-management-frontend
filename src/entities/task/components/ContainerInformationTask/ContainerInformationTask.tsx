import React from 'react'
import { PropsContainerInformationTask } from './ContainerInformationTask.props'
import { BsFillCalendarFill } from 'react-icons/bs';
import styles from './ContainerInformationTask.module.scss';
import { AiOutlineComment, AiOutlineFile } from 'react-icons/ai';

export const ContainerInformationTask = ({ typeInformation, title, information }: PropsContainerInformationTask) => {

    let icon: JSX.Element = <div></div>;

    switch(typeInformation) {
        case 'DEADLINE': 
            icon = <BsFillCalendarFill size={14} fill='#5e72d9' />;
            break;
        case 'RESOURCES':
            icon = <AiOutlineFile  size={17} />;
            break;
        case 'COMMENTS':
            icon = <AiOutlineComment size={17} />;
            break;       
    }

    return (
        <div className={styles.container} title={title}>
            {
                icon
            }
            {
                information &&  <span className={styles.information}>{information}</span>
            }
        </div>
    )
}
