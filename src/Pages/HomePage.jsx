import React, { Component } from 'react';
import HeaderSection from '../Component/HomePageSections/HeaderSection';
import ImageSection from '../Component/HomePageSections/ImageSection';
import InfoSection from '../Component/HomePageSections/InfoSection';
import LocationSection from '../Component/HomePageSections/LocationSection';
import RestaurantSection from '../Component/HomePageSections/RestaurantSection';
import RoomsSection from '../Component/HomePageSections/RoomsSection';

class HomePage extends React.Component {
        render() {
                return <>
                        <HeaderSection metaData={this.props.metaData.homePage.header} />
                        <InfoSection metaData={this.props.metaData.homePage.info} />
                        <RoomsSection metaData={this.props.metaData.homePage.rooms} />
                        <RestaurantSection metaData={this.props.metaData.homePage.restaurant} />
                        <LocationSection metaData={this.props.metaData.homePage.location} />
                        <ImageSection />
                </>;
        }
}

export default HomePage;