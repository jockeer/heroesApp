import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
// import ReactDOM from 'react-dom';
import { HeroesApp } from './HeroesApp';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render( <HeroesApp />);


