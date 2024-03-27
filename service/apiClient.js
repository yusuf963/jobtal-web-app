import { useState } from 'react';

/**
 * const { data, loading, error, getData, postData, deleteData } = useFetch();
 *   useEffect(() => {
    // Fetch data when component mounts
    getData('https://api.example.com/data');
  }, []);
  ...
      <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h2>Fetched Data</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
      <button onClick={handlePost}>Post Data</button>
    </div>
 * @returns 
*/

const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function getToken() {
        if (!localStorage) return false;
        const token = localStorage.getItem('token'); // this cause  run time error  on mobile siomulator
        if (!token) return false;
        return token;
    }

    const getData = async (url) => {
        try {
            setLoading(true);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const responseData = await response.json();
            setData(responseData);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    const postData = async (url, postData) => {
        try {
            setLoading(true);
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin': '*',
                    // 'X-Auth-Token': 'any',
                    // Accept: 'application/json',
                    authorization: `Bearer ${getToken()}`,
                },
                body: JSON.stringify(postData),
            });
            if (!response.ok) {
                throw new Error('Failed to post data');
            }
            const responseData = await response.json();
            setData(responseData);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };
    const putData = async (url, putData) => {
        try {
            setLoading(true);
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${getToken()}`,
                },
                body: JSON.stringify(putData),
            });
            if (!response.ok) {
                throw new Error('Failed to put data');
            }
            const responseData = await response.json();
            setData(responseData);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const deleteData = async (url) => {
        try {
            setLoading(true);
            const response = await fetch(url, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete data');
            }
            setData(null);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return { data, loading, error, getData, postData, putData, deleteData };
};

export default useFetch;


