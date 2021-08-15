import React, {useEffect, useState} from 'react';
import styles from './Detail.style';
import {ActivityIndicator, Text, TouchableOpacity, View} from "react-native";
import useFetch from "../../hooks/useFetch/useFetch";
import WebView from "react-native-webview";
import {useDispatch, useSelector} from "react-redux";

let API_URL = "https://www.themuse.com/api/public/jobs/";

const Detail = ({route}) => {
    const {jobID} = route.params;
    const {loading, data, error} = useFetch(API_URL + jobID);
    const jobList = useSelector(j => j.fovoritedJobList);

    const [controlSubmit, setControlSubmit] = useState(false);

    const dispatch = useDispatch();

    function LoadingIndicatorView() {
        return <ActivityIndicator color='#009b88' size='large' />
    }

    function controlFavoritedJob(array){
        let counter = 0;
        if(jobList != null){
            array.map(element=>{
                if(element.jobID == data.id)
                    counter++;
            })
        }

        return counter;
    }

    function getInfoFromData(array){
        let val;
        array.map(element=>{
            val = element.name;
        })

        return val;
    }

    const handleAddFovoritedJob = () => {
        let jobLocation = getInfoFromData(data.locations);
        let jobLevel = getInfoFromData(data.levels);

        const jobInfo = {
            jobID: data.id,
            jobName: data.name,
            companyName: data.company.name,
            location: jobLocation,
            level: jobLevel
        };

        dispatch({type: 'ADD_FAVORITED_JOB', payload: {job: jobInfo}});
    }

    const handleAddSubmitJob = () => {
        setControlSubmit(true);
    }

    return(
        <View style={styles.container}>
            <View style={styles.title_container}>
                <Text style={styles.job_name}>{data.name}</Text>
                <View style={styles.fetch_container}>
                    <Text style={styles.text}>Locations: </Text>
                    <Text style={styles.fetchText}>Paris, France</Text>
                </View>
                <View style={styles.fetch_container}>
                    <Text style={styles.text}>Job Level: </Text>
                    <Text style={styles.fetchText}>Mid Level</Text>
                </View>
                <Text style={styles.job_detail_title}>Job Detail</Text>
            </View>
            <View style={styles.content_container}>
                <WebView source={{html: data.contents}} renderLoading={LoadingIndicatorView} startInLoadingState={true}/>
            </View>
            <View style={styles.bottom_container}>
                <TouchableOpacity style={styles.touchable} onPress={handleAddSubmitJob}>
                    {controlSubmit ?
                        <Text style={styles.submit_fovorite_job_text}>Submitted</Text> :
                        <Text style={styles.submit_fovorite_job_text}>Submit</Text>
                    }
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable} onPress={handleAddFovoritedJob}>
                    {controlFavoritedJob(jobList) == 1 ?
                        <Text style={styles.submit_fovorite_job_text}>Favorited</Text> :
                        <Text style={styles.submit_fovorite_job_text}>Favorite Job</Text>
                    }
                </TouchableOpacity>
            </View>

        </View>

    )
}

export default Detail;