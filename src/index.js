import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;500;700&family=Roboto:ital,wght@0,300;0,500;1,700&display=swap');

    //font-family: 'Roboto', sans-serif;
    //font-family: 'Roboto Slab', serif;


    *, *:before, *:after {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%
    }

    body {
        font-family:'Roboto', sans-serif;
        font-size: 1.5rem;
        font-weight: 300;
        color: #fff;
        background-color: #333;
    }

    h1 {
        font-size: 5rem;
        text-align: center;
    }

    button {
        border-radius: 5px;
        border: 0;
        box-shadow: 4px 3px 20px #222; 
        padding: 1% 2%;
        margin: 0 1%;
        font-weight: 700;
        font-size: 1.6rem;
        color: #fff;
    }

    .Add {
        background-color: green;
        
        &:hover {
            color: darkgreen;
            background-color: #222;
            transition: 0.25s ease;
        }
    }

    .Clear {
        background-color: red;

        &:hover {
            color: darkred;            
            background-color: #222;
            transition: 0.25s ease;
        }
    }
    }

    form {
        border: 1px solid #222;
        border-radius: 10px 10px 0 0;
        background-color: #555;
        box-shadow: 10px 10px 30px #222;
    }

    input {
        font-size: 1.6rem;
        padding: 1% 2%;
        margin: 1% 1%;
    }
`;

const AppContainer = styled.div`
    width: 40%;
    margin: auto;
`;


ReactDOM.render(
    <>
    <GlobalStyle />
    <AppContainer>
        <App />
    </AppContainer>
    </>,    
    document.getElementById('root')
);
