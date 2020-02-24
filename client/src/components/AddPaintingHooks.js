import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios';

const initialState = {
    title: '',
    date: '',
    place: ''
};

function reducer(state, {action, field, value}) {
    if (action === "reset") {
        return initialState;
    }

    return {
        ...state,
        [field]: value
    }
}

export default function AddPaintingHooks() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [imageUrl, setImageUrl] = useState('');

    const onChange = (e) => {
        dispatch({ field: e.target.name, value: e.target.value})
    };

    const handleFileUpload = (event) => {
        const uploadData = new FormData();
        uploadData.append('imageUrl', event.target.files[0]);
        
        axios.post('http://localhost:5000/api/upload', uploadData)
        .then(response => {
            setImageUrl(response.data.secure_url);
        })
        .catch(err => {console.log("Error while uploading the file", err)});
    };

    const { title, date, place } = state;

    const clearState = () => {
        dispatch({action: 'reset'});
    }
     
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/paintings/create', {title, date, place, imageUrl})
        .then(res => {
            clearState();
        })
        .catch(err => {
            console.log(err)
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Add a painting<br />
                <label>
                    Title: <input type="text" name="title" value={title} onChange={onChange} />
                </label><br />
                <label>
                    Date: <input type="text" name="date" value={date} onChange={onChange} />
                </label><br />
                <label>
                    Place: <input type="text" name="place" value={place} onChange={onChange} />
                </label><br />
                <input type="file" onChange={handleFileUpload} />

                <button>Save new painting</button>
            </form>
        </div>
    )
}
