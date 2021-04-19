import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import { cn, useThemedColors } from '../../Theming';

import styles from '../styles/OptionMenuStyles';

const OptionMenu = props => {

    const colors = useThemedColors();

    const renderOptions = () => {
        return props.options.map((option, index) => {

            const isChecked = option.key === props.selectedOptionKey;
            const svg = isChecked ? Svgs.RadioChecked : Svgs.RadioUnchecked;
            const iconStyle = {
                color: isChecked ? colors[cn.settings.radioButtonSelectedIcon]
                        : colors[cn.settings.radioButtonUnselectedIcon],

            }

            return (
                <TouchableOpacity key={option.key} style={{flexDirection: 'row'}} 
                    onPress={() => props.onSelect(option.key)}>
                    <View style={{width: 20, height: 20}}>
                        <Icon iconStyle={iconStyle} svg={svg}/>
                    </View>
                    <Text>{option.title}</Text>
                </TouchableOpacity>
            )
        })
    }

    return (
        <View>
            <Text>{props.menuTitle}</Text>
            {renderOptions()}
        </View>
    );
};

export default OptionMenu;
