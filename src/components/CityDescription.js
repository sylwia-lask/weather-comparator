import React from 'react';
import { connect } from 'react-redux';
import { addPlace } from '../actions/actionCreators';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../theme/default';
import { ButtonPrimary, PanelDefault, Heading } from '../theme/utils';
import convertKelvinToCelsius from '../utils/kelvin-to-celsius';

const CityDescriptionPanel = styled(PanelDefault)`

  & h2 {
    display: inline-block; 
    margin: 0 0 0 5px; 
    color: ${theme.palette.secondary};
  }

  & h3 {
    margin: 0 0 7px 0;
    font-size: 12px;
    color: ${theme.palette.secondaryLight};
  }

  & figcaption {
    & .captionFirstRow {
      display: flex; 
      justify-content: center;
      align-items: center; 
      padding: 0 15px 0 0; 
    }

    & .captionSecondRow {
      padding: 5px;
      text-align: center;
    }
  }
`;

class CityDescription extends React.Component {

  render() {
    let iconLink = this.props.chosenPlace ?
      `http://openweathermap.org/img/w/${this.props.chosenPlace.weather[0].icon}.png`
      : null;

    return (
      <CityDescriptionPanel>
        <Heading>
          {this.props.chosenPlace.name}
        </Heading>
        <figcaption>
          <div className="captionFirstRow">
            <img src={iconLink} alt="Weather icon" />
            <h2>{convertKelvinToCelsius(this.props.chosenPlace.main.temp)}&deg;C</h2>
          </div>
          <div className="captionSecondRow">
            <h3><FontAwesomeIcon icon="tint" />{this.props.chosenPlace.main.humidity}%</h3>
            <h3>{this.props.chosenPlace.main.pressure}hpa</h3>
            <ButtonPrimary onClick={this.addPlaceToList}><FontAwesomeIcon icon="plus" /> Add</ButtonPrimary>
          </div>
        </figcaption>
      </CityDescriptionPanel>
    )
  }

  addPlaceToList = () => {
    this.props.addPlace(this.props.chosenPlace);
  }
}

function mapStateToProps(state) {
  return {
    chosenPlace: state.places.chosenPlace
  };
}

const mapDispatchToProps = { addPlace };

export const CityDescriptionContainer = connect(mapStateToProps, mapDispatchToProps)(CityDescription);