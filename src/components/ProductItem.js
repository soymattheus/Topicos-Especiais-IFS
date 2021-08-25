import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Ícone dos botões Editar e Excluir
import ProductModel from '../models/ProductModel';

export default function ProductItem(props) {

    async function handleEditButton() {
        const item = await ProductModel.getItem(props.item.id);
        props.navigation.navigate("Product", item);
    }

    function handleDeletePress() {
        Alert.alert(
            "Atenção:",
            `Tem certeza que deseja excluir "${props.item.name}"?`,
            [
                {
                text: "Não",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                },
                { text: "Sim", onPress: () => {
                    ProductModel.deleteItem(props.item.id)
                    .then(response => props.navigation.navigate("ProductList", {id: props.item.id}));
                    }
                }
            ],
            { cancelable: false }
            );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.itemTextName}>{props.item.name}</Text>
            <View style={styles.itemLayoutDetail}>
                <Text style={styles.itemTextDetailTitle}>Id: </Text>
                <Text style={styles.itemTextDetail, {color: '#D5D5D5'}}>{props.item.id}</Text>
            </View>
            <View style={styles.itemLayoutDetail}>
                <Text style={styles.itemTextDetailTitle}>Preço (R$): </Text>
                <Text style={styles.itemTextDetail, {color: '#D5D5D5'}}>{props.item.price}</Text>
            </View>
            <View style={styles.itemLayoutDetail}>
                <Text style={styles.itemTextDetailTitle}>Qtde Estoque (Kg): </Text>
                <Text style={styles.itemTextDetail, {color: '#D5D5D5'}}>{props.item.qty}</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.deleteButton} onPress={handleDeletePress}>
                    <MaterialCommunityIcons name="delete-forever" color="#FFF" size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.editButton} onPress={handleEditButton}>
                    <MaterialCommunityIcons name="file-document-edit-outline" color="#FFF" size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4A586E',
        borderWidth: 1,
        borderColor: '#BBC9DD',
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 15,
        width: '100%',
        borderRadius: 10,
        padding: 5,
    },
    itemLayoutDetail: {
        flexDirection: 'row',
    },
    itemTextName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#D5D5D5',
    },
    itemTextDetailTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#D5D5D5',
    },
    itemTextDetail: {
        fontSize: 15,
    },
    buttonsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
    },
    editButton: {
        marginLeft: 10,
        height: 30,
        backgroundColor: '#2F3538',
        borderRadius: 7,
        padding: 5,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    deleteButton: {
        marginLeft: 10,
        height: 30,
        backgroundColor: '#2F3538',
        borderRadius: 7,
        padding: 5,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
});