import useFetch from "../hooks/useFetch/useFetch";

export default function (state, action){

    /**
     * Array da ayni job var ise yeniden eklememek icin.
     * @param array --> arama yapilan array.
     * @param jobID --> yeni eklenecek job id'si.
     * @returns {boolean} --> var ise = true, yok ise = false.
     */
    function isThereJobInArray(array, jobID){
        let val;
        if(array == null)
            val = false;
        else {
            array.map(element => {
                if (element.jobID == jobID)
                    val = true;
                else
                    val = false;
            })
        }
        return val;
    }

    /**
     * İstemediğimiz job'u yeni array'e eklemeyiz ve job'u remove etmis oluruz.
     * @param array --> arama yapilan array.
     * @param jobID --> silmek istedigimiz job.
     * @returns {*[]} --> istenilen job'un silinmis halindeki array.
     */
    function removeJob(array, jobID){
        let arr = [];
        array.map(element => {
            if (element.jobID != jobID)
                arr.push(element);
        })
        return arr;
    }

    switch (action.type) {
        case 'ADD_FAVORITED_JOB':
            const {job} = action.payload;

            if(!isThereJobInArray(state.fovoritedJobList, job.jobID)) {
                const newList = [...state.fovoritedJobList, job];
                return {...state, fovoritedJobList: newList};
            }
            else
                return state;

        case 'REMOVE_FAVORITED_JOB':
            const {jobID} = action.payload;
            console.log(jobID);
            let newList = removeJob(state.fovoritedJobList, jobID);
            return {state, fovoritedJobList: newList};
        default:
            return state;
    }
}