import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import Game from './player/index';

import {Welcome, WelcomeClass, Clock} from './components/component';

import LoginControl from './components/condition';

import List from './components/list';

import NameForm from './components/form'

ReactDOM.render(
    <div>
        <Game />
        <Welcome name="Sara" />
        <Clock />
        <LoginControl isLoggedIn={false} />
        <List numbers={[1,2,3]} />
        <NameForm />
        </div>
    , document.getElementById('root'));
registerServiceWorker();

