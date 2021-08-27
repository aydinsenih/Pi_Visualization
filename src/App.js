import "./App.css";
import { Layout } from "antd";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Pi from "./components/Pi";
import Draw from "./components/Draw";
import Stream from "./components/Stream";

const { Content } = Layout;

function App() {
    return (
        <Layout>
            <Router>
                <Header />
                <Content className="content">
                    <Route exact path="/">
                        <About />
                    </Route>
                    <Route exact path="/pi">
                        <Pi />
                    </Route>
                    <Route exact path="/draw">
                        <Draw />
                    </Route>
                    <Route exact path="/stream">
                        <Stream />
                    </Route>
                </Content>
            </Router>
        </Layout>
    );
}

export default App;
