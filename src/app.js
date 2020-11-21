import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import AppRouter,{history} from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {startSetExpenses} from "./actions/expenses";
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import {firebase} from "./firebase/firebase";
import "./playground/promises";
import {login,logout} from "./actions/auth";
import LoadingPage from "./components/LoadingPage";

const store=configureStore();

const jsx=(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRenderded=false;
const renderApp=()=>{
    if(!hasRenderded){
        ReactDOM.render(jsx,document.getElementById('app'));
        hasRenderded=true;
    }
};

ReactDOM.render(<LoadingPage />,document.getElementById('app'));


firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid));
        console.log("uid",user.uid);
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
            if(history.location.pathname==="/"){
                history.push("/dashboard");
            }
        });
    }else{
        store.dispatch(logout());
        renderApp();
        history.push("/");
        store.dispatch(logout());
    }
})

