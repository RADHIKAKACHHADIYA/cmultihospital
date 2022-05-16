import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { resetAlert } from '../../redux/actions/alert.action';

function Alert(props) {
    let dispatch = useDispatch()
    let alert = useSelector(state => state.alert)
    console.log(alert);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    // const handleClick = () => {
    //     enqueueSnackbar('I love hooks');
    // };
    useEffect(
        () => {
            if (alert.text !==  '') {
            enqueueSnackbar(alert.text);
            setTimeout(() => {dispatch(resetAlert())} , 2000)
            } 
        },
        [alert.text])
    return (
        <div>

        </div>
    );
}

export default Alert;