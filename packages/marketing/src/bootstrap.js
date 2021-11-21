import React from 'react';
import {render} from 'react-dom';
import App from './App'

const mount = el => render(<App/>, el)

if(process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('_dev-marketing-root')

    if(devRoot) {
        mount(devRoot)
    }
}

export {mount}