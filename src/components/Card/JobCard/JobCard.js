import React from 'react';
import styles from './JobCard.style';
import {FlatList, Text, View} from "react-native";

const JobCard = ({job}) => {

    const renderLocation = ({item}) => <View style={styles.country_container}><Text style={styles.country}>{item.name}</Text></View>;

    const renderLevel = ({item}) => <View style={styles.level_container}><Text style={styles.level}>{item.name}</Text></View>;


    return(
        <View style={styles.container}>
            <Text style={styles.job_name}>{job.name}</Text>
            <Text style={styles.company}>{job.company.name}</Text>
            <FlatList keyExtractor={(_, index) => 0} data={job.locations} renderItem={renderLocation} />
            <View style={styles.level_container}>
                <FlatList keyExtractor={(_, index) => 1} data={job.levels} renderItem={renderLevel} />
            </View>
        </View>
    )
}

export default JobCard;