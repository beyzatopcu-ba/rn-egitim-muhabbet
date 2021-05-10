import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import { cn, useThemedColors, useThemedValues } from '../../Theming';

import styles from '../styles/MapScreenStyles';

const MapScreen = props => {

    const colors = useThemedColors();
    const [selectedLocation, setSelectedLocation] = useState({
        latitude: 41.129206,
        longitude: 29.092501,
    });
    const [isDisplayOnly, setIsDisplayOnly] = useState();
    const refMap = useRef();

    useEffect(() => {
        if (props.route.params?.location) {
            setSelectedLocation(props.route.params?.location);
        }

        setIsDisplayOnly(!!props.route.params?.location);
    }, [props.route.params?.location]);

    const _onPress_Send = () => {
        const latitude = Math.floor(selectedLocation.latitude * 10000) / 10000;
        const longitude = Math.floor(selectedLocation.longitude * 10000) / 10000;
        props.navigation.navigate("chat-screen", {
            location: {latitude, longitude}
        });
    }

    const _onPress_Map = e => {
        if (!isDisplayOnly) {
            const location = e.nativeEvent.coordinate;
            setSelectedLocation(location);
            refMap.current.animateToRegion(
                {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }
            )
        }
    }

    return (

        <View style={{ flex: 1 }}>
            <MapView
                ref={ref => refMap.current = ref}
                onPress={_onPress_Map}
                style={styles.map}
                initialRegion={{
                    latitude: selectedLocation.latitude,
                    longitude: selectedLocation.longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
            >
                <Marker
                    coordinate={selectedLocation}
                />
            </MapView>
            <TouchableOpacity onPress={props.navigation.goBack} style={styles.backTouchable}>
                <Text style={styles.backText}>{"<"}</Text>
            </TouchableOpacity>
            {
                isDisplayOnly ?
                    null
                    :
                    <TouchableOpacity style={styles.iconContainer} onPress={_onPress_Send}>
                        <Icon svg={Svgs.Send} iconStyle={{ color: colors[cn.chat.sendIcon] }} />
                    </TouchableOpacity>
            }
        </View>
    );
};

export default MapScreen;
