import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async() => {
    try {
        const {data: {confirmed, recovered, deaths, lastUpdates}} = await axios.get(url);

        return {
            confirmed,
            recovered,
            deaths,
            lastUpdates
        }
        
    } catch (error) {
        
    }
}

export const fetchDailyData = async () => {
    try {
    const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');

        return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
    } catch (error) {
        return error;
    }
};