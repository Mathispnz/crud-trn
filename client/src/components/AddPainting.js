import React, { Component } from 'react';
import service from '../api/service';
const axios = require('axios');

export default class AddPainting extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          date: '',
          place: '',
          imageUrl: '',
          listPaintings: []
        };
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

        axios.post('http://localhost:5000/api/paintings/create', this.state)
        .then(res => {
            // console.log('added', res.data);
            this.getAllPaintings();
            this.setState({
                title: '',
                place: '',
                imageUrl: ''
            })
        })
        .catch(err => {
            console.log("Error while adding the thing: ", err)
        });
      };

      getAllPaintings = () => {
          axios.get('http://localhost:5000/api/paintings')
          .then(res => {
              this.setState({
                listPaintings: res.data
              })
              console.log(this.state.listPaintings)
          })
          .catch(err => {
              console.log('An error ocurred when retrieving data', err)
          });
      }

      componentDidMount() {
          this.getAllPaintings();
      }

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
                    {this.state.listPaintings.map(painting => {
                        return(
                            <div key={painting._id}>
                                <h2>{painting.title}</h2>
                                <img src={painting.imageUrl} />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
