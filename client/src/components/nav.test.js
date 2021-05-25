import React from "react";
import { render, shallow, mount } from "enzyme";
import Nav from './nav';
import { MemoryRouter } from 'react-router-dom';
import ReactTestUtils, { act } from 'react-dom/test-utils'



it('renders without crashing', () => {
    shallow(<Nav />);
});


describe('starting on ./shop', () => {
    it('', () => {

    });
});

describe('starting on ./basket', () => {
    it('navigates the register page', () => {
        let container = document.createElement('div');
        render(
            <MemoryRouter initialEntries = {["/basket"]}>
                <Nav />
            </MemoryRouter>
        )

        act(() =>{
            const registerButton = document.getElementById('nav-link-register');

            registerButton.dispatchEvent(new MouseEvent('click', {bubbles: true}));

        });

        expect(window.location.pathname).to.equal('/register');

        

        

    });
});

