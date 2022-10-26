import axios from 'axios';

const fetchData = async() => {
    const result = await axios(
        'https://datausa.io/api/data?drilldowns=Nation&measures=Population',
    );
    // return the result
    return result;
};

export default fetchData;