import { Outlet } from "react-router";
import Nav from "../components/Nav";
import Container from "../components/Container";

function Layout() {

    return (
        <Container>
            <Nav/>
            <Outlet />
        </Container>
    )
}

export default Layout