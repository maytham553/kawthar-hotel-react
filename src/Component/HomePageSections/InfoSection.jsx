import React, { Component } from 'react';


class InfoSection extends React.Component {
  render() {
    const metaData = this.props.metaData
    return <section id='info' className="info">
      <div className="container">
        <div className="row">
          <div className="col-2 padding-right">
            <p className="info-text text-green">
              {metaData.text.upper}
            </p>
            <p className="info-text text-green">
              {metaData.text.lower}
            </p>
          </div>
          <div className="col-2 image-group margin-right">
            <img className={"full-w-img"} src="images/blog-list-img-1.jpg" alt="image" />
            <img className={"full-w-img"} src="images/blog-list-img-2.jpg" alt="image" />
          </div>
        </div>
      </div>
    </section>
      ;
  }
}

export default InfoSection;