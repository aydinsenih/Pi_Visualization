import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header: AntHeader } = Layout;

const Header = (props) => {
    return (
        <AntHeader className="header">
            <div className="logo">π</div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["about"]}
            >
                <Menu.Item key="pi">
                    <Link to="/pi">{"Pi"}</Link>
                </Menu.Item>
                <Menu.Item key="draw">
                    <Link to="/draw">{"Draw with Pi"}</Link>
                </Menu.Item>
                <Menu.Item key="stream">
                    <Link to="/stream">{"Pi Stream"}</Link>
                </Menu.Item>
                <Menu.Item key="about">
                    <Link to="/about">{"What is π"}</Link>
                </Menu.Item>
            </Menu>
        </AntHeader>
    );
};

export default Header;
