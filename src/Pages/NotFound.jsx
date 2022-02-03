import React, { Component } from 'react';

class NotFound extends React.Component {
        render() { 
                return <div className="not-found-page">
                        <h1 className="not-found-text">{ this.props.metaData.notFound.errorText}</h1>
                </div>;
        }
}
 
export default NotFound;