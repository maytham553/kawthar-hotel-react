import React, { Component } from 'react';
import ShowImages from '../ShowImages';

class ImageSection extends React.Component {

        srcs = [
                "images/collection-1.jpg",
                "images/collection-2.jpg",
                "images/collection-3.jpg",
                "images/collection-4.jpg",
                "images/collection-5.jpg",
                "images/collection-6.jpg",
                "images/collection-7.jpg",
                "images/collection-8.jpg",
                "images/collection-9.jpg",
                "images/collection-10.jpg",
                "images/collection-11.jpg",
                "images/collection-12.jpg",
                "images/collection-14.jpg",
                "images/collection-15.jpg",
                "images/collection-16.jpg",

        ];
        render() {
                return <section>
                        <div className="container">
                                <ShowImages srcs={this.srcs} />
                        </div>
                </section>;
        }
}

export default ImageSection;