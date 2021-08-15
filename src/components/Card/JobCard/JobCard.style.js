import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container:  {
        margin: 10,
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#c6c6c6',
        backgroundColor: 'white'
    },
    job_name: {
        marginLeft: 5,
        fontWeight: 'bold',
        fontSize: 20
    },
    company: {
        marginLeft: 5,
        fontSize: 18
    },
    country_container: {
        alignItems: 'flex-start',
    },
    country: {
        borderRadius: 20,
        fontSize: 18,
        color: 'white',
        padding: 5,
        paddingHorizontal: 10,
        backgroundColor:'#ef5350'
    },
    level_container:{
        alignItems: 'flex-end',
        marginRight: 5,
        marginBottom: 5
    },
    level: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#ef5350'
    },
    remove_button: {
        backgroundColor: '#ef5350',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
        paddingVertical: 5
    },
    remove_text: {
        color: 'white',
        fontSize: 20
    }
})