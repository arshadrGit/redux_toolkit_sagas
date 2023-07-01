import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    content: {
        paddingBottom: 10
    },
    productContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 8,
    },
    thumbnail: {
        width: 100,
        height: 100,
        marginRight: 16,
        marginTop: 5,
    },
    detailsContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,

    },
    description: {
        marginBottom: 4,
        fontSize: 14,
        flexShrink: 1
    },
    imageContainer: {
        flexDirection: 'row',
    },
});
export default styles;