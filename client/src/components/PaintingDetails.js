import React, {Component, useState} from 'react';
import axios from 'axios';

export default class PaintingDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
    
    getSinglePainting = () => {
        const { id } = this.props.match.params;
        console.log(id);

        axios.get(`http://localhost:5000/api/paintings/${id}`)
        .then(res => {
            const thePainting = res.data;
            this.setState(thePainting)
            console.log(this.state.title);
        })
        .catch(err => {
            console.log(err)
        });
    }

    componentDidMount() {
        this.getSinglePainting();
    }

    render() {
        return (
            <div>
                <h2>HELLO</h2>
                <h5>{this.state.title}</h5>
                <img src={this.state.imageUrl} />
            </div>
        )
    }
}


// export default function PaintingDetails() {
//     const [project, setProject] = useState({});


 
//     return (
//         <div>
//             <h2>HELLO</h2>
//         </div>
//     )
// }
