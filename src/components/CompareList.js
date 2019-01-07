import React from 'react';
import styled from 'styled-components';
import CompareListItem from './CompareListItem';

const CompareElements = styled.ul`
    margin: 10px; 
    padding: 0;
    list-style: none;

    & li {
        margin: 5px 0;
    }
`;

const CompareList = (props) => (
    <CompareElements>
        {
            props.placesList ?
                props.placesList.map(p => (<CompareListItem item={p} key={p.id} />))
                : null
        }
    </CompareElements>
);

export default CompareList;
