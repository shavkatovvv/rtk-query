import { Container } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Users } from "./pages/users";

function App() {
    return (
        <>
            <Container>
                <Routes>
                    <Route path="/" element={<Users />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
