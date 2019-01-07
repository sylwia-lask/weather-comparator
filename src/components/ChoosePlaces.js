import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../theme/default';
import { InputDefault } from '../theme/utils';

const InputContainer = styled.div`
    position: absolute; 
    top: 30px; 
    left: 30px;  
`; 

const SearchBoxInput = styled(InputDefault)`
    width: 0;
    visibility: hidden;
    transition: 1s;
    border: 0;
    

    &:focus {
        outline: 0;
    }
`;

const SearchBoxButton = styled.button`
    display: flex;
    justify-content: center;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: ${theme.palette.primary};
    border: 0;
    transition: .3s;
    cursor: pointer;

    &:hover {
        background-color: ${theme.palette.primaryDark};
    }

    svg {
        color: #fff;
        transition: 1s;
    }
`;

const SearchBox = styled.form`
    display: flex;
    height: 50px;

    &:hover ${SearchBoxInput} {
        visibility: visible;
        width: 240px;
        padding: 5px 20px;
        box-shadow: 2px 3px 15px 0px rgba(0, 0, 0, .75);
    }

    &:hover ${SearchBoxButton} {
        margin-left: -25px;

        & svg {
            transform: rotate(360deg);
        }

    }
`;

export class ChoosePlaces extends React.Component {

    render() {
        return (
            <InputContainer>
                <SearchBox onSubmit={this.handleSubmit}>
                    <SearchBoxInput ref="place" type="text" 
                        onChange={this.handleChange} 
                        defaultValue={this.props.chosenPlace.name} />
                    <SearchBoxButton type="submit">
                        <FontAwesomeIcon icon="search" />
                    </SearchBoxButton>
                </SearchBox>
            </InputContainer>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const place = this.refs['place'].value;
        if (place) {
            this.props.choosePlaceFromInput(place);
        }
    }
}
