import styled from 'styled-components';
import {Maincolors} from './Data';


export const MainBtnContainer = styled.div`
    background-color: ${Maincolors};
    color: white;
    border: 1px solid ${Maincolors};
    &:hover {
        background-color: #fff;
        color: ${Maincolors};
        border: 1px solid ${Maincolors};
    }
`