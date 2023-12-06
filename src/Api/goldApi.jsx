import axios from 'axios'

const BASE_URL = `https://gold-cal-be.onrender.com`
export const goldApi = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/calculate`, formData);

        if (!response.data) {
            throw new Error('No data in the response');
        }

        return response.data.calculatedRate.value;
    } catch (error) {
        // console.error('Error calculating gold rate:', error.message);
        throw new Error('Error calculating gold rate.');
    }
}

export const getGoldApi = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/all`);

        if (!response.data) {
            throw new Error('No data in the response');
        }

        const dataWithLocalTime = response.data.map(item => {
            const localTimestamp = new Date(item.timestamp).toLocaleString();
            return { ...item, localTimestamp };
        });

        return dataWithLocalTime;
    } catch (error) {
        console.error('Error fetching gold data:', error.message);
        throw new Error('Error fetching gold data.');
    }
}

// goldApi.js
export const deleteGoldApi = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting data:', error.message);
        throw new Error('Error deleting data.');
    }
};
