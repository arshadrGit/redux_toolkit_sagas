import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 50,
        right: 30,
        height: 60,
        width: 60,
        backgroundColor: '#000000',
        borderRadius: 30,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'white',
        fontWeight:'bold',
        fontSize:34
    }
});
export default styles;