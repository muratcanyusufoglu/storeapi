import LottieView from 'lottie-react-native';
import React from 'react';

function loading (){

    return <LottieView source={require('../../assets/loading.json')} autoPlay loop/>;
}

export default loading;