import React from 'react';
import {FlatList, Text, View} from "react-native";
import {useSelector} from "react-redux";
import FavoritedJobCard from "../../components/Card/FavoritedJobCard";

const FavoritedJobs = () => {
    const jobList = useSelector(j => j.fovoritedJobList);

    const renderFavoritedJob = ({item}) => <FavoritedJobCard job={item} />;

    return(
        <View>
            <FlatList data={jobList} renderItem={renderFavoritedJob} keyExtractor={(item, index) => index.toString()}/>
        </View>
    )
}


export default FavoritedJobs;
