import React, { useEffect, useState } from 'react';
import Button ,{ ButtonType } from '../Componets/Common/Button/Button';

function Count(props) {
    const  [count , setCount] = useState(0);
    const [disable , setDisable] = useState(false);
    
    useEffect(
        () => {
            if(count === 0) {
                setDisable(true);
            } else{
                setDisable(false);
            }
        }
    ) 

    console.log("useEffect");


    const handleIncrament = () => {
        console.log("handleIncrament")
        setCount(count + 1)
    }
    const handleDecrament = () => {
        console.log("handleDecrament")
        if (count !== 0) {
            setCount(count - 1)
        }
    }
    
    console.log('render')
    return (
        
        <div className='text-center m-5'>
             <Button onClick={() => handleDecrament()} buttonType={ButtonType.PRIMARY} disabled={disable}>
                -
            </Button>
            
            <label className='px-4'>
                {count}
            </label>

            <Button onClick={() => handleIncrament()} buttonType={ButtonType.PRIMARY}>
                +
            </Button>
           
            
        </div>
    );
}

export default Count;