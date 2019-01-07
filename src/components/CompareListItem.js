import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PanelDefault } from '../theme/utils';
import theme from '../theme/default';
import convertKelvinToCelsius from '../utils/kelvin-to-celsius';
import convertUnixTimestampToUtc from '../utils/unix-to-utc';

const PanelList = styled(PanelDefault)`
    display: flex;
    width: 100%;
    padding: 0;
`;

const PanelListFirstColumn = styled.div`
    display: inline-block;

    & img {
        width: 76px;
    }
`;

const PanelListSecondColumn = styled.div`
    width: 30%;
    display: inline-block;

    h2 {
        margin: 8px 0;

        @media (max-width: 576px) {
            font-size: 14px;
        }
    }

    p {
        margin: 5px 0; 
        font-size: 27px;
        font-weight: 700;
        color: ${theme.palette.secondary}
    }
`;

const PanelListThirdColumn = styled.div`
    width: 30%;
    display: inline-block;

    p {
        font-size: 14px;
        color: ${theme.palette.primaryLight};
        margin: 7px 0 10px;

        svg {
            color: ${theme.palette.secondaryLight};
        }
    }
`;

const PanelListFourthColumn = styled.div`
    width: 30%;
    display: inline-block;

    p {
        font-size: 16px;
        color: ${theme.palette.secondaryLight};
        margin: 16px 0 10px;

        svg {
            color: ${theme.palette.primaryLight};
        }
    }
`;

const CompareListItem = (props) => (
    <li>
        <PanelList>
            <PanelListFirstColumn>
                <img src={`http://openweathermap.org/img/w/${props.item.weather[0].icon}.png`} 
                    alt="Weather icon" />
            </PanelListFirstColumn>
            <PanelListSecondColumn>
                <h2>{props.item.name}</h2>
                <p>{convertKelvinToCelsius(props.item.main.temp)}&deg;C</p>
            </PanelListSecondColumn>
            <PanelListThirdColumn>
                <p><FontAwesomeIcon icon="tint" /> {props.item.main.humidity}%</p>
                <p>{props.item.main.pressure}hpa</p>
                <p><FontAwesomeIcon icon="wind" /> {props.item.wind.speed}m/s</p>
            </PanelListThirdColumn>
            <PanelListFourthColumn>
                <p><FontAwesomeIcon icon="sun" /> {convertUnixTimestampToUtc(props.item.sys.sunrise)}</p>
                <p><FontAwesomeIcon icon="moon" /> {convertUnixTimestampToUtc(props.item.sys.sunset)}</p>
            </PanelListFourthColumn>
        </PanelList>
    </li>
)

export default CompareListItem;