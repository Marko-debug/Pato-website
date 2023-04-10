import { useState, useEffect } from 'react';

const BASE_URL = 'http://localhost:8000/api/notes'

export type TApiResponse = {
    status: Number;
    statusText: String;
    data: any;
    error: any;
    loading: Boolean;
  };
  
export const useApiGet = (url: string): TApiResponse => {
    const [status, setStatus] = useState<Number>(0);
    const [statusText, setStatusText] = useState<String>('');
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
  
    const getAPIData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
            method: 'GET',
          })
        const json = await response.json();
        setStatus(response.status);
        setStatusText(response.statusText);
        setData(json);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
  
    useEffect(() => {
      getAPIData();
    }, []);

    return { status, statusText, data, error, loading };
};

  export const useApiPost = (url: string, body: string): TApiResponse => {
    const [status, setStatus] = useState<Number>(0);
    const [statusText, setStatusText] = useState<String>('');
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
  
    const postAPIData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${authToken}`,
            }
          })
        const json = await response.json();
        setStatus(response.status);
        setStatusText(response.statusText);
        setData(json);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
  
    useEffect(() => {
      postAPIData();
    }, []);

    return { status, statusText, data, error, loading };
};


export const useApiDelete = (url: string, id: string): TApiResponse => {
    const [status, setStatus] = useState<Number>(0);
    const [statusText, setStatusText] = useState<String>('');
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
  
    const getAPIData = async () => {
      setLoading(true);
      try {
        const apiResponse = await fetch(`${url}/${id}`, {
            method: "DELETE"
        })
        const json = await apiResponse.json();
        setStatus(apiResponse.status);
        setStatusText(apiResponse.statusText);
        setData(json);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
  
    useEffect(() => {
      getAPIData();
    }, []);

    return { status, statusText, data, error, loading };
};
// fetch("https://jsonplaceholder.typicode.com/posts/1", {  method: "DELETE"}).then(response => {  console.log(response.status); });


export class AppService {


    public async getNotes(): Promise<any> {
        const response = await fetch('/api/notes');
        return await response.json();
    }

    public async addNote(note: any) {
        const response = await fetch(`/api/notes`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({note})
          })
        return await response.json();
    }
}