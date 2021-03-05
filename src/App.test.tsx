import React from 'react';
import ReactDom from "react-dom";
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import Title from "./components/Title";
import customDateFormat from "./components/DateUtilities";
import Users from "./components/Users";
import LeftNavBar from "./components/LeftNavBar";

describe.only("Does system render correctly?", () => {
    describe("it works correctly, only when:", () => {
        afterEach(cleanup);

        it("it renders title correctly", () => {
            let container = document.createElement("div");
            ReactDom.render(<Title/>, container);
            ReactDom.unmountComponentAtNode(container);

            const {getByTestId} = render(<Title/>);
            expect(getByTestId('title')).toHaveTextContent('User Details');
        });

        it("it renders left menu correctly", () => {
            let container = document.createElement("div");
            ReactDom.render(<LeftNavBar/>, container);
            ReactDom.unmountComponentAtNode(container);

            const {getByTestId} = render(<LeftNavBar/>);
            expect(getByTestId('left-nav')).toBeInTheDocument();
        });

        it('date formatter works', () => {
            const testDate = customDateFormat('2020-01-08T18:35:48.848969');
            expect(testDate).toBe('08-01-2020')
        })

        it("it displays loading indicator, loads data from server and displays it in a table", async () => {

            render(<Users/>);

            expect(await screen.findByText("Loading users, please wait...")).toBeInTheDocument();
            screen.debug();

            expect(await screen.findAllByText("06-02-2021", {}, {timeout: 20000})).toHaveLength(2);
            expect(await screen.findByText("15-07-2020", {}, {timeout: 20000})).toBeInTheDocument();
            expect(await screen.findByText("2840", {}, {timeout: 20000})).toBeInTheDocument();

            fireEvent.click(screen.getByText(/Next Page/i))
            expect(await screen.findAllByText("1", {}, {timeout: 20000})).toHaveLength(10);
            expect(await screen.queryByText("2840", {}, {timeout: 20000})).toBeNull();

            fireEvent.click(screen.getByText(/Previous Page/i))
            expect(await screen.findAllByText("06-02-2021", {}, {timeout: 20000})).toHaveLength(2);
            expect(await screen.findByText("2840", {}, {timeout: 20000})).toBeInTheDocument();

            screen.debug();
        }, 100000);
    })
});