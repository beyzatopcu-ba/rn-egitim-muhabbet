import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Modal from 'react-native-modal';
import NetInfo from '@react-native-community/netinfo';


const styles = StyleSheet.create({
    modal: {

    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const NetInfoManager = props => {

    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(netState => {
            if (isConnected !== netState.isConnected) {
                setIsConnected(netState.isConnected);
            }
        });

        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <Modal
            isVisible={!isConnected}
            style={styles.modal}
        >
            <View style={styles.container}>
               <Text>
                   İnternete bağlı değilsiniz.
               </Text>
            </View>
        </Modal>
    )
}

export default NetInfoManager;