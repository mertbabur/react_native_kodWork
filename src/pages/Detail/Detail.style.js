import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    title_container: {
        backgroundColor: '#f2f2f2'
    },
    job_name: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#37474f'
    },
    fetch_container: {
        flexDirection: 'row',
    },
    fetchText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5
    },
    text: {
        color: '#ef5350',
        fontSize: 18,
        fontWeight: 'bold'
    },
    job_detail_title: {
        color: '#415058',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 5
    },
    content_container: {
        flex: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#efefef'
    },
    bottom_container: {
        flex: 0.7,
        backgroundColor: '#f2f2f2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    touchable: {
        backgroundColor: '#ef5350',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    submit_fovorite_job_text: {
        color: 'white',
        fontSize: 20,
        marginHorizontal: 50
    }
})