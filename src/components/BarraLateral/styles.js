import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    sideUserArea: {
        marginTop: 15,
        marginLeft: 10,
        marginBottom: 10,
        alignItems: 'center',
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
    },
    sideProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100/2,
        alignSelf: 'center',
    },
    sideUserName: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    iconStyle: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
    },
    customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    }
});