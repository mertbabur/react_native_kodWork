import React from 'react';
import styles from './JobCard.style';
import {FlatList, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

const JobCard = ({job}) => {

    const navigation = useNavigation();

    const renderLocation1 = ({item}) => <View style={styles.country_container}><Text style={styles.country}>{item.name}</Text></View>;

    function renderLevel(){

        return job.levels.map(level=>{
            return <Text style={styles.level}>{level.name}</Text>;
        })
    }
    function renderLocation(){

        return job.locations.map(location=>{
            return <Text style={styles.country}>{location.name}</Text>;
        })
    }

    const GotoDeatil = () => {
        navigation.navigate('DetailPage', {jobID: job.id});
    }

    return(
        <TouchableWithoutFeedback onPress={GotoDeatil}>
            <View style={styles.container}>
                <Text style={styles.job_name}>{job.name}</Text>
                <Text style={styles.company}>{job.company.name}</Text>
                <View style={styles.country_container}>
                    {renderLocation()}
                </View>
                <View style={styles.level_container}>
                    {renderLevel()}
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default JobCard;