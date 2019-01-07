import React from 'react';
import styled from 'styled-components';
import { Heading, Radio, ButtonPrimary } from '../theme/utils';
import SortingTypes from '../shared/sorting-types';

const ButtonContainer = styled.div`
    padding: 0 20px;
`;

export default class SortList extends React.Component {

    constructor() {
        super(); 
        this.state = {
            sortingType: SortingTypes.None
        }
    }

    render() {
        return (
            <section>
                <Heading>Sort by: </Heading>
                <ButtonContainer>
                    <Radio>
                        <input id="radio-1" name="radio" type="radio" 
                            checked={this.state.sortingType === SortingTypes.Temperature}
                            onChange={() => this.changeSortingType(SortingTypes.Temperature)} />
                        <label htmlFor="radio-1" className="radio-label">Temperature</label>
                    </Radio>
                    <Radio>
                        <input id="radio-2" name="radio" type="radio"
                            checked={this.state.sortingType === SortingTypes.Wind}
                            onChange={() => this.changeSortingType(SortingTypes.Wind)} />
                        <label htmlFor="radio-2" className="radio-label">Wind</label>
                    </Radio>
                    <Radio>
                        <input id="radio-3" name="radio" type="radio"
                            checked={this.state.sortingType === SortingTypes.Pressure}
                            onChange={() => this.changeSortingType(SortingTypes.Pressure)} />
                        <label htmlFor="radio-3" className="radio-label">Pressure</label>
                    </Radio>
                    <Radio>
                        <input id="radio-4" name="radio" type="radio"
                            checked={this.state.sortingType === SortingTypes.Humidity}
                            onChange={() => this.changeSortingType(SortingTypes.Humidity)} />
                        <label htmlFor="radio-4" className="radio-label">Humidity</label>
                    </Radio>
                </ButtonContainer>
                
                <ButtonContainer>
                    <ButtonPrimary onClick={() => this.changeSortingType(SortingTypes.None)}>Reset filters</ButtonPrimary>
                </ButtonContainer>
            </section>
        )
    }

    changeSortingType(st) {
        this.setState({
            sortingType: st
        }, () => {
            this.props.changeSortingType(this.state.sortingType);
        });
    }
}