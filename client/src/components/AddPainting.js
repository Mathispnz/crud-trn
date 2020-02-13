import React, { Component } from 'react';
import service from '../api/service';
const axios = require('axios');

export default class AddPainting extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          name: '',
          date: '',
          place: '',
          imageUrl: ''
        };
    
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleSubmit = this.handleFileUpload.bind(this);
      };
    
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      };

      handleFileUpload(event) {
        const uploadData = new FormData();
        uploadData.append('imageUrl', event.target.files[0]);
        
        axios.post('http://localhost:5000/api/upload', uploadData)
        .then(response => {
            this.setState({ imageUrl: response.data.secure_url })
        })
        .catch(err => {console.log("Error while uploading the file", err)})
      };
    
      handleSubmit(event) {
        event.preventDefault();
        const painting = {
            title: this.state.title,
            place: this.state.place,
            imageUrl: this.state.imageUrl
        };

        axios.post('http://localhost:5000/api/paintings/create', painting)
        .then(res => {
            // console.log('added', res.data);

            this.setState({
                title: '',
                place: '',
                imageUrl: ''
            })
        })
        .catch(err => {
            console.log("Error while adding the thing: ", err)
        });

        // const { title, name, date, place, imageUrl } = this.state;
    
        // axios.post('http://localhost:5000/api/paintings/create', this.state)
        // .then(res => {
        //     console.log(res);
        //     this.setState({title, name, date, place, imageUrl});
        //     // res.data;
        // //   res.data;
        //     // res.redirect('/');
        // })
        // .catch(err => console.log(err));
      };

    render() {
        const { imageUrl } = this.state;
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    Add a painting<br />
                    <label>
                        Title: <input type="text" name="title" value={this.state.title} onChange={e => this.handleChange(e)} />
                    </label><br />
                    <label>
                        Name: <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
                    </label><br />
                    <label>
                        Date: <input type="text" name="date" value={this.state.date} onChange={e => this.handleChange(e)} />
                    </label><br />
                    <label>
                        Place: <input type="text" name="place" value={this.state.place} onChange={e => this.handleChange(e)} />
                    </label><br />
                    <input type="file" onChange={e => this.handleFileUpload(e)} />
                    <button>Save new painting</button>
                </form>
                <img src={imageUrl} />

                <div className="allPaintings">
                    
                </div>
            </div>
        )
    }
}
