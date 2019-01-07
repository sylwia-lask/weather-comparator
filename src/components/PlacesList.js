import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../theme/default';
import { PanelDefault, Heading, ButtonPrimary } from '../theme/utils';

const PlacesPanel = styled(PanelDefault)`
    position: absolute; 
    top: 100px;
    left: 30px;
    padding: 0 20px;

    @media (max-width: 576px) {
        position: relative; 
        top: auto; 
        left: auto;
    }

    & header {
        @media (max-width: 576px) {
            text-align: center; 
        }
    }
`;

const Places = styled.ul`
    margin: 0; 
    padding: 0 0 10px; 
    max-height: 250px; 
    overflow-y: auto;
    list-style: none;

    @media (max-width: 576px) {
        max-height: none;
    }

    & li {
        padding-bottom: 5px;

        @media (max-width: 576px) {
            text-align: center;
        }

        & svg {
            color: ${theme.palette.secondary};
            cursor: pointer;
        }
    }
`;

const ButtonContainer = styled.div`
    padding: 10px 0; 
    text-align: center; 
`;

class PlacesList extends React.Component {

    render() {
        return (
            <PlacesPanel>
                <Heading>Places list:</Heading>
                <Places>
                    {
                        this.props.placesList ?
                            this.props.placesList.map(p => (<li key={p.id}>{p.name} <FontAwesomeIcon icon="times" onClick={this.removePlace.bind(this, p)} /></li>))
                            : null
                    }
                </Places>

                <ButtonContainer>
                    <ButtonPrimary onClick={this.props.changeTab}>Compare</ButtonPrimary>
                </ButtonContainer>
            </PlacesPanel>
        )
    }

    removePlace(place) {
        this.props.removePlace(place);
    }
}

export default PlacesList;