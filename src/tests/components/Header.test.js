import React from 'react';
import {shallow} from "enzyme";
import Header from "../../components/Header";

test("should render header correctly",()=>{
    /*const renderer=new ReactshallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
    console.log(renderer.getRenderOutput());*/
    const wrapper=shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
})