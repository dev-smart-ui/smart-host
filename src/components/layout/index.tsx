import React, { ReactNode } from "react";
import { Heading } from "./components/heading";

import styles from "./layout.module.scss";

interface IMainLayoutProps {
    children: ReactNode;
}

export const MainLayout: React.FC<IMainLayoutProps> = ({children}) => {
    return <div className={styles.mainLayout}>
        <Heading title="Smart Host" />
        <main>
            {children}
        </main>
    </div>;
};