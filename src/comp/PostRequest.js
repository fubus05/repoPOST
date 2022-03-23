import React, { Component } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

export default class PostRequest extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        form: {
            name: "",
            email: "",
            postDesc: "",
        },
        response: {
            name: "",
            email: "",
            postDesc: "",
        }
      }
    }

    changeHandler = (e) => {
      const form = {...this.state.form};
      form[e.target.name] = e.target.value;
      this.setState({ form });
    }

    postHandler = (e) => {
      e.preventDefault()
      const {id} = useParams;
      axios.post(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, this.state.form)
          .then(response => {
              return response;
      })
          .then(({data}) => this.setState({response: {...data}}))
  }

    //RENDER
    render() {
        const { form, response } = this.state;
    //Return
    
    return (
      <div>
        <form onSubmit={this.postHandler}>
        <input type='text' name='name' value={form.name} onChange={this.changeHandler}/>
        <input type='text' name='email' value={form.email} onChange={this.changeHandler}/>
        <input type='text' name='postDesc' value={form.postDesc} onChange={this.changeHandler}/>
        <button type='post'>Post</button>
        </form>
        <div>
            <p>{response.name}</p>
            <p>{response.email}</p>
            <p>{response.postDesc}</p>
        </div>
      </div>
    )
  }
}
