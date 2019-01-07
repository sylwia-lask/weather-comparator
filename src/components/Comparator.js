import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as actionCreators from '../actions/actionCreators';
import { ChoosePlaces } from './ChoosePlaces';
import { SimpleMap } from './Map';
import PlacesList from './PlacesList';
import CompareList from './CompareList';
import SortList from './SortList';
import { ButtonSecondary } from '../theme/utils';
import { getSortedPlaces } from '../selectors/sort-items-list';
import { getPreciseLocation } from '../places.service';

const PossibleActveContainers = Object.freeze({
    MapContainerActive: Symbol("MapContainerActive"),
    CompareContainerActive: Symbol("CompareContainerActive")
});

const ComparatorSection = styled.div`
    & .map-container, .compare-container {
        position: relative; 
        float: left; 
        transition: .5s;
    }

    & .map-container {
        &[data-active-tab="map"] {
            width: 100%;
        }
        &[data-active-tab="comparator"] {
            width: 40%;

            @media (max-width: 576px) {
                display: none;
            }
        }
    }

    & .compare-container {
        &[data-active-tab="map"] {
            display: none;
        }
        &[data-active-tab="comparator"] {
            width: 60%;

            @media (max-width: 576px) {
                width: 100%;
            }
        }
    }
`;

const ButtonComparator = styled(ButtonSecondary)`
    position: absolute; 
    top: 0; 
    right: 0;
    z-index: 100;

    &[data-active-tab="comparator"] {
        visibility: hidden; 
    }
`;

export class Comparator extends React.Component {
    constructor() {
        super();
        this.state = {
            activeContainer: PossibleActveContainers.MapContainerActive
        }
    }

    componentDidMount() {
        getPreciseLocation().then(result => this.choosePlaceFromMap(result));
    }

    render() {
        let activeTab = { "data-active-tab": this.activeContainerToString(this.state.activeContainer) };

        return (
            <ComparatorSection>
                <div className="map-container" {...activeTab}>
                    <ButtonComparator onClick={this.changeActiveTabToComparator}
                        {...activeTab}>Go to comparator <FontAwesomeIcon icon="arrow-right" /></ButtonComparator>
                    <SimpleMap chosenPlace={this.props.chosenPlace}
                        choosePlaceFromMap={this.choosePlaceFromMap.bind(this)} />
                    <ChoosePlaces chosenPlace={this.props.chosenPlace}
                        choosePlaceFromInput={this.choosePlaceFromInput.bind(this)} />
                    {this.props.placesList.length ?
                        <PlacesList placesList={this.props.placesList}
                            removePlace={this.removePlace.bind(this)}
                            changeTab={this.changeActiveTabToComparator} /> : null}
                </div>
                <div className="compare-container" {...activeTab}>
                    <ButtonSecondary onClick={this.changeActiveTabToMap}><FontAwesomeIcon icon="arrow-left" /> Go back to map</ButtonSecondary>
                    <SortList changeSortingType={this.changeSortingType.bind(this)} />
                    <CompareList placesList={getSortedPlaces(this.props.placesList, this.props.sortingType)} />
                </div>
            </ComparatorSection>
        )
    }

    activeContainerToString(x) {
        if (x === PossibleActveContainers.MapContainerActive) {
            return "map";
        }
        return "comparator";
    }

    changeActiveTabToMap = () => {
        this.setState({ activeContainer: PossibleActveContainers.MapContainerActive });
    }

    changeActiveTabToComparator = () => {
        this.setState({ activeContainer: PossibleActveContainers.CompareContainerActive });
    }

    choosePlaceFromInput(place) {
        this.props.choosePlaceFromInput(place);
    }

    choosePlaceFromMap(latLng) {
        this.props.choosePlaceFromMap(latLng[0], latLng[1]);
    }

    removePlace(place) {
        this.props.removePlace(place);
    }

    changeSortingType(sortingType) {
        this.props.changeSortingType(sortingType);
    }
}

function mapStateToProps(state) {
    return {
        chosenPlace: state.places.chosenPlace,
        placesList: state.places.placesList, 
        sortingType: state.places.sortingType
    };
}

export function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export const ComparatorContainer = connect(mapStateToProps, mapDispatchToProps)(Comparator);