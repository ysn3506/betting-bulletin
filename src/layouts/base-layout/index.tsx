import * as React from 'react';
import './style.scss';

type LayoutPropsType = {
    children: React.ReactNode;
}

function Layout({ children }: LayoutPropsType) {
    return (
        <div className='layout-wrapper'>
            {children}
        </div>
    );
}

export default Layout;