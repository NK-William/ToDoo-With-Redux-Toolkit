import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import React, { useState } from 'react';
import LocalTodoItem from '../components/LocalTodoItem';
import { Entypo, AntDesign } from '@expo/vector-icons';

const primaryColor = "#5CC2FF";
const { width, height } = Dimensions.get('screen');
let itemId;

const LocalTodoScreen = () => {

    const [showEditor, setShowEditor] = useState({ showAdd: false, showEdit: false });
    const editMode = showEditor.showAdd || showEditor.showEdit;

    const [todoText, setTodoText] = useState("");
    const [doto, setDoto] = useState([]);

    const showEditorView = () => {
        if (showEditor.showAdd) {
            addItem();
        } else if (showEditor.showEdit) {
            updateItem();
        } else {
            alert("Something went wrong, try restart the app");
        }
    }


    const addItem = () => {
        const id = new Date().getTime().toString();
        setShowEditor({ showAdd: false, showEdit: false })
        setDoto([...doto, { id: id, title: todoText }]);
        setTodoText("");
    }

    const deleteItem = (id) => {
        let newItems = doto.filter(item => item.id != id);
        setDoto(newItems);
    }

    const updateItem = () => {
        let newItems = doto;

        const items = doto.filter(item => item.id == itemId);
        const index = newItems.indexOf(items[0]);
        newItems[index] = { id: itemId, title: todoText }
        setDoto([...newItems]);
        setShowEditor({ showAdd: false, showEdit: false });
        setTodoText("");
    }

    const openEditorForUpdating = (id) => {
        itemId = id;
        const items = doto.filter(item => item.id == itemId);
        setTodoText(items[0].title);
        setShowEditor({ ...showEditor, showEdit: true });
    }

    const closeEditor = () => {
        setShowEditor({ showAdd: false, showEdit: false });
        setTodoText("");
    }

    const renderItem = ({ item }) => (
        <LocalTodoItem
            item={item}
            onDeletePressed={deleteItem}
            onEditPressed={openEditorForUpdating} />
    );


    return (
        <View style={styles.container}>
            <Text style={styles.appTitle}>ToDo</Text>
            <View style={styles.itemsContainer}>
                <FlatList
                    data={doto}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={{ flex: 1 }}
                />
                <TouchableOpacity style={styles.addButton} onPress={() => setShowEditor({ ...showEditor, showAdd: true })}>
                    <Entypo name="plus" size={24} color="white" />
                </TouchableOpacity>
            </View>
            {editMode ? <View style={styles.transparentView}></View> : null}
            {
                editMode ? <View style={styles.EditorContainer}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.EditorTitle}>
                            Add your todo
                        </Text>
                        <View style={{ height: 1, backgroundColor: primaryColor, width: 50, marginTop: 2 }}></View>
                    </View>
                    <TouchableOpacity style={{ position: "absolute", right: 8, top: 8 }}
                        onPress={closeEditor}>
                        <AntDesign name="closecircleo" size={24} color={primaryColor} />
                    </TouchableOpacity>
                    <TextInput style={styles.textInput}
                        value={todoText}
                        onChangeText={setTodoText} />
                    <TouchableOpacity onPress={showEditorView}>
                        <View style={styles.submitButton}>
                            <Text style={{ color: "white" }}>SAVE</Text>
                        </View>
                    </TouchableOpacity>
                </View> : null
            }
        </View >
    );
};

export default LocalTodoScreen;

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: primaryColor,
        paddingHorizontal: 16,
        paddingTop: 25
    }, appTitle:
        { marginHorizontal: 40, fontWeight: 'bold', color: 'white', fontSize: 35 },
    todotitle:
        { marginHorizontal: 40, color: 'white', fontSize: 18, marginBottom: 24 },
    itemsContainer: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 40,
        paddingVertical: 30,
        paddingHorizontal: 15
    },
    search: {
        borderWidth: 1,
        borderColor: primaryColor,
        borderRadius: 10,
        padding: 4
    },
    EditorContainer: {
        justifyContent: "space-between",
        position: 'absolute',
        alignSelf: 'center',
        bottom: '10%',
        borderRadius: 10,
        height: 200,
        width: "90%",
        padding: 8,
        alignItems: "center",
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    transparentView: {
        position: 'absolute',
        height: height,
        width: width,
        backgroundColor: "black",
        opacity: 0.6

    },
    addButton: {
        height: 70,
        width: 70,
        backgroundColor: "#5CC2FF",
        alignSelf: "flex-end",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    EditorTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: primaryColor
    },
    textInput: {
        width: "100%",
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
        padding: 8
    },
    submitButton: {
        backgroundColor: primaryColor,
        height: 40,
        width: 100,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    }
});
