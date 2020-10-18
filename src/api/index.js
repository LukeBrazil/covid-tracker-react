import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);

        return { confirmed, recovered, deaths, lastUpdate };

    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');

      return data.map(({ positive, recovered, death, dateChecked: date }) => ({ date, deaths: death, recovered, confirmed: positive }));
    } catch (error) {
      console.log(error);
    }
  };

export const countries = async () => {
    try {
        const response = await axios.get(`${url}/countries`);

        console.log(response);
    } catch (error) {
        console.log(error)
    }
}