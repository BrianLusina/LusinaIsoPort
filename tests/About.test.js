import React from 'react';
import { render } from 'react-dom';
import About from '../src/components/About';

describe("About component tests", ()=>{
    it("Renders without a crash", ()=>{
        const div = document.createElement("div");
        render(<About />, div);
    })
})