import React from 'react';
import styles from './Jobs.style';
import {ActivityIndicator, FlatList, Text, View} from "react-native";
import useFetch from "../../hooks/useFetch/useFetch";
import JobCard from "../../components/Card/JobCard";

let API_URL = "https://www.themuse.com/api/public/jobs?page=0";

const Jobs = () => {
    const {loading, data, error} = useFetch(API_URL);

    const renderJobs = ({item}) => <JobCard job={item}/>;

    return(
        <View style={styles.container}>
            {loading ?
            <ActivityIndicator color='#ef5350' size='large' /> :
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={data.results} renderItem={renderJobs} />}
        </View>
    )
}

export default Jobs;

