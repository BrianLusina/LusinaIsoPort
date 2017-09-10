import React from 'react';
import { render } from 'react-dom';
import Portfolio from '../src/components/Portfolio';

describe("Portfolio component tests", ()=>{
    it("Renders without a crash", ()=>{
        const div = document.createElement("div");
        render(<Portfolio />, div);
    })
})