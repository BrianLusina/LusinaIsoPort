import React from 'react';
import { render } from 'react-dom';
import Header from '../src/components/Header';

describe("Header component tests", ()=>{
    it("Renders without a crash", ()=>{
        const div = document.createElement("div");
        render(<Header />, div);
    })
})