import React from "react";

import { MainLayout } from "./modules/layout";
import { SmartHost } from "./modules/SmartHost";

const App = () => {
    return (
        <MainLayout>
            <SmartHost />
        </MainLayout>
    );
};

export default App;
