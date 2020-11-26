import React from "react";
import {shallow} from "enzyme";
import ConfirmModal from "../../components/ConfirmModal";

let selectedOption,handleCancelOption,handleConfirmRemoveOption, wrapper;

beforeEach(()=>{
    selectedOption=jest.fn();
    handleCancelOption=jest.fn();
    handleConfirmRemoveOption=jest.fn();
    wrapper=shallow(
        <ConfirmModal
        selectedOption={selectedOption} 
        handleCancelOption={handleCancelOption}
        handleConfirmRemoveOption={handleConfirmRemoveOption}
        />
    );
});

test("should render confirm correctly",()=>{
    expect(wrapper).toMatchSnapshot();
});