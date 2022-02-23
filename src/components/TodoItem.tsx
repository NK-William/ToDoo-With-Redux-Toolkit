import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { SetStateAction, Dispatch, useState } from 'react';
import CheckBox from 'expo-checkbox';
import { AntDesign, Entypo } from '@expo/vector-icons';

const TodoItem = ({ item, onDeletePressed, onEditPressed }: {
    item: { title: string, id: string },
    onDeletePressed: (id: string) => void,
    onEditPressed: (id: string) => void,
}) => {
    const [clicked, setClicked] = useState(false);

    // const deleteItem = () => {

    //     onDeletePressed(item.id);
    // }
    return (
        <View
            style={styles.itemContainer}>
            <TouchableOpacity onPress={() => onDeletePressed(item.id)}>
                <AntDesign
                    style={styles.rightSpace}
                    name="delete"
                    size={24}
                    color="#5CC2FF" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onEditPressed(item.id)}>
                <Entypo
                    style={styles.rightSpace}
                    name="edit"
                    size={24}
                    color="#5CC2FF" />
            </TouchableOpacity>
            <Text>{item.title}</Text>
            <View style={{ flex: 1 }}></View>
            <CheckBox
                disabled={false}
                value={clicked}
                onValueChange={(newValue) => setClicked(newValue)}
                color="#5CC2FF"
            />
        </View>
    );
};

export default TodoItem;

const styles = StyleSheet.create({
    itemContainer:
    {
        alignItems: "center",
        flexDirection: "row",
        marginTop: 8,
        paddingVertical: 2
    },
    rightSpace:
        { marginRight: 7 }
});
