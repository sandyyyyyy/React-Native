import MapViewDirections from 'react-native-maps-directions';
import React, { Component } from 'react';
import MapView, { AnimatedRegion, Animated, Callout } from 'react-native-maps'
import { Text, View, StyleSheet, TextInput, LocationView } from 'react-native';
import Welcome from './Welcome';

const origin = {latitude: 49.1326553,longitude: -122.8736708};
const destination = {latitude: 49.1746579, longitude: -123.1295964};
const GOOGLE_MAPS_APIKEY = 'AIzaSyC1Rv4qxzh1jeKsAf2a5sF4n6qqT_0nRwU';


export default class HomeScreen extends React.Component {
  //Home Screen to show in Home Option
  constructor(props){
   super(props);

  this.state = {
     region:{
        latitude: 49.1326553,
            longitude: -122.8736708,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    },
      isLoading: true,
      markers: [],

    onRegionChange(region) {
  this.state.region.setValue(region);
}
  };
}


  render() {
    
    return (
      <View style={styles.container}>
      <MapView 
      style={styles.map}
      initialRegion={origin}
      showsUserLocation={true}
      showsMyLocationButton={true}
      region={this.state.region}>
      
      <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
      />

      <MapView.Marker //destination
            coordinate={{latitude: 49.1326553,
            longitude: -122.8736708}}
            title={"Surrey Campus"}
            description={"Start Point"}
         />
        <MapView.Marker //Start point
            coordinate={{latitude: 49.1746579, 
            longitude: -123.1295964}}
            title={"Richmond Campus"}
            description={"Your Destination"}
         />
    </MapView>
    <Text style={styles.header}>Good Afternoon</Text>
    <Callout>
  </Callout>
  </View>
    )
  }  
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  // Header styles
  header: {
    color: '#666666',
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  // Text below header
  text: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: 'center',
  },
});