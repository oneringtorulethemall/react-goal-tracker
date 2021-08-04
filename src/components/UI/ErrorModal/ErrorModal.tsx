import React, { Fragment } from 'react';
import ReactDom from 'react-dom';

import Card from '../Card/Card';
import Button from '../Button/Button';
import Backdrop from '../Backdrop/Backdrop';

import styles from './ErrorModal.module.css';

interface IProps {
    title: string,
    message: string,
    children?: React.ReactNode | undefined
    onConfirm?(event: any): any
}


const ErrorModal = (props: IProps) => {
    const backdropDIV = document.getElementById("backdrop-root")! as HTMLElement;
    const modalDIV = document.getElementById("overlay-root")! as HTMLElement;

    return (
        <>
            {
                ReactDom.createPortal
                    (
                        <Backdrop onClick={props.onConfirm}></Backdrop>,
                        backdropDIV
                    )
            }

            {
                ReactDom.createPortal(
                    <Card className={styles.modal}>
                        <header className={styles.header}>
                            <h2>{props.title}</h2>
                        </header>
                        <div className={styles.content}>
                            <p>{props.message}</p>
                        </div>
                        {props.children}
                        <footer className={styles.actions}>
                            <Button
                                onClick={props.onConfirm}
                            >
                                OK
                            </Button>
                        </footer>
                    </Card>
                    ,
                    modalDIV
                )

            }
        </>
    )
};

export default ErrorModal;
