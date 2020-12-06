import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import Quiz from "./containers/Quiz/Ouiz";

class App extends Component {
    render() {
        return (
            <Layout>
                <Quiz/>
            </Layout>
        )
    }
}

export default App;
