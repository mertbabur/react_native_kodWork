import React from 'react';
import styles from '../JobCard/JobCard.style';
import {FlatList, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {useDispatch} from "react-redux";

const FavoritedJobCard = ({job}) => {
    const dispatch = useDispatch();

    const handleRemoveFavoritedJob = () => {
        dispatch({type: 'REMOVE_FAVORITED_JOB', payload: {jobID: job.jobID}});
    }

    return(
        <View style={styles.container}>
            <Text style={styles.job_name}>{job.jobName}</Text>
            <Text style={styles.company}>{job.companyName}</Text>
            <View style={styles.country_container}>
                <Text style={styles.country}>{job.location}</Text>
            </View>
            <View style={styles.level_container}>
                <Text style={styles.level}>{job.level}</Text>
            </View>
            <TouchableOpacity style={styles.remove_button} onPress={handleRemoveFavoritedJob}>
                <Text style={styles.remove_text}>Remove</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FavoritedJobCard;