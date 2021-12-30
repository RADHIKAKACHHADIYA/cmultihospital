import styled from 'styled-components';
import { Button } from 'reactstrap';

const BaseButton = styled(Button)`
    border-radius: 50px;
    white-space: nowrap;
    transition: 0.5s;
    font-size: 14px;
    display: inline-block;
    border: none;

    :hover{
    background: #0d6efd;
    };

`;

export const PrimaryButton = styled(BaseButton)`
    background: #FF6337;
    color: #fff;
    padding: 8px 25px;
    font-size : 18px;
    :honer{
        
    }
`;

export const LinkButton = styled(BaseButton)`
    background: none;
    color: #0000ff;
    font-size : 16px;

`;