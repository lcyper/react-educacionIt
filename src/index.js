import React from 'react'
import ReactDOM from 'react-dom'
import App from "./ui/layout/App"
import {Provider} from "react-redux"
import Store from "./api/store"

ReactDOM.render(
    <Provider store={Store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)





