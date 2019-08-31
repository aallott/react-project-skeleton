import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

ReactDOM.render((
    <BrowserRouter>
        <div>Hello World!</div>
    </BrowserRouter>
), document.getElementById('root'));

export default BrowserRouter;
