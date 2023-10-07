import * as React from 'react';
import Layout from '../../layouts/base-layout';
import Header from '../../components/header';
import './style.scss';
import LoadingScreen from '../../components/loading-screen';

function Main() {
    return (
        <div className='main-wrapper'>
            <Header />
            <Layout>
                <LoadingScreen />
            </Layout>
        </div>
    );
}

export default Main;