import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/Store";
import {StaticRouter} from "react-router-dom-server";   


Test("Logo should load on the rendering header",() =>{
    const header = render(
        <StaticRouter>
    <Provider store={store}>
       <Header />
        </Provider>
        </StaticRouter>
        );

    const logo = header.getAllByTestId("logo");   

    console.log(header);
});