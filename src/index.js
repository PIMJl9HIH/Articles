import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux'
import {Provider } from 'react-redux'

import {articles} from './fixtures'
import App from './components/App'

ReactDOM.render(<App articles={articles} />,document.getElementById('root'));

