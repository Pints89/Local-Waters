import React, { Component } from 'react';
import Weather from './Weather';
import NormalPage from './normalPage';

// here is the second page 
// basic page with no content except heading 
function Page(props) {
    if (props.page === 'weather') {
        return <Weather title="Weather API" color="white"/>;
    } else {
        return <NormalPage title="Second Page" color="white"/>
    }
}

export default Page