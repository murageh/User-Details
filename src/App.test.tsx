import React from 'react';
import {render} from '@testing-library/react';
import {unmountComponentAtNode} from "react-dom";
import App from './App';


let container = null;

beforeEach(() => {
// setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

const data = JSON.parse('[{"created_on":"2021-02-06T23:58:25.777126","id":280039,"level":10,"phone_number":"254700111222"}]');

it("page renders with or without data", () => {
    // To test with and without sample data

});

it('renders without crashing', () => {
    render(<App/>);
    const linkElement = document.body.querySelector('.Dashboard');

    expect(linkElement).toBeInTheDocument();
});
