import theme from './default';
import styled from 'styled-components';

const defaultShadow = '2px 3px 15px 0px rgba(0,0,0,0.75);';

export const Button = styled.button`
    padding: 7px 20px;    
    color: #fff; 
    text-transform: uppercase; 
    font-size: 12px;
    border: 0; 
    transition: .3s;
    cursor: pointer;
`;

export const ButtonPrimary = styled(Button)`
    background-color: ${theme.palette.primary};

    &:hover {
        background-color: ${theme.palette.primaryDark};
    }
`;

export const ButtonSecondary = styled(Button)`
    background-color: ${theme.palette.secondary};

    &:hover {
        background-color: ${theme.palette.secondaryDark};
    }
`;

export const PanelDefault = styled.div`
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: ${defaultShadow};
`;

export const InputDefault = styled.input`
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: ${defaultShadow};
`;

export const Heading = styled.header`
    padding: 10px 30px;
    color: #000; 
    font-size: 17px;
    font-weight: 700;
    text-transform: uppercase; 
`;

export const Radio = styled.div`
    display: inline-block; 
    margin: 0.5rem;
        input[type="radio"] {
        position: absolute;
        opacity: 0;
        + .radio-label {
          &:before {
            content: '';
            background: ${theme.palette.grayLight};
            border-radius: 100%;
            border: 1px solid ${theme.palette.grayDark};
            display: inline-block;
            width: 1.4em;
            height: 1.4em;
            position: relative;
            top: -0.2em;
            margin-right: 1em; 
            vertical-align: top;
            cursor: pointer;
            text-align: center;
            transition: all 250ms ease;
          }
        }
        &:checked {
          + .radio-label {
            &:before {
              background-color: ${theme.palette.primaryLight};
              box-shadow: inset 0 0 0 4px ${theme.palette.grayLight};
            }
          }
        }
        &:focus {
          + .radio-label {
            &:before {
              outline: none;
              border-color: ${theme.palette.primaryLight};
            }
          }
        }
        &:disabled {
          + .radio-label {
            &:before {
              box-shadow: inset 0 0 0 4px ${theme.palette.grayLight};
              border-color: ${theme.palette.grayDark};
              background: ${theme.palette.grayLight};
            }
          }
        }
        + .radio-label {
          &:empty {
            &:before {
              margin-right: 0;
            }
          }
        }
    }
`;
