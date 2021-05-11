import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import { cn, useThemedColors, useThemedValues } from '../../Theming';

import styles from '../styles/MapScreenStyles';

const MapScreen = props => {

    const colors = useThemedColors();

    const refMap = useRef(null);
    const [isDisplayOnly, setIsDisplayOnly] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState({
        latitude: 41.089935,
        longitude: 29.090393,
    })

    useEffect(() => {
        const location = props.route.params?.location;
        if (location) {
            setSelectedLocation(location);
            setIsDisplayOnly(true);
        }
    }, [props.route.params?.location]);

    const _onPress_Send = () => {
        props.navigation.navigate("chat-screen", {
            location: selectedLocation
        });
    }

    const _onPress_Map = e => {
        if (isDisplayOnly) return;
        setSelectedLocation(e.nativeEvent.coordinate);
        refMap.current.animateCamera({
            center: {
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude
            }
        }, { duration: 500 });
    }

    return (
        <View style={{ flex: 1 }}>
            <MapView
                ref={mapRef => refMap.current = mapRef}
                onPress={_onPress_Map}
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 41.089935,
                    longitude: 29.090393,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
                region={{
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
