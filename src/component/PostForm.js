import React,{ Component } from "react";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createPost} from '../actions/postActions'

class PostForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            title: '',
            body:''
        }
        this.onChange = this.onChange.bind(this)

        this.onSubmit = this.onSubmit.bind(this)
    }
    
    onChange(e){
        this.setState({
           [e.target.name] : e.target.value 
        })
    }
    onSubmit(e){
        e.preventDefault()

        const post = {
            title : this.state.title,
            body: this.state.body
        }
        this.props.createPost(post)
        
    }
    render(){
        
        return (
            <div>
                <h1>Add post</h1>
                <form onSubmit={this.onSubmit} >
                    <div>
                    <label>title</label>
                    <input onChange={this.onChange} type="text" name="title" value={this.state.title} /> 
                    </div>
                    <div>
                    <label>body</label>
                    <textarea  onChange={this.onChange} type="text"  name="body" value={this.state.body} /> 
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
PostForm.propTypes = {
    createPost : PropTypes.func.isRequired
}

export default connect(null, {createPost})(PostForm)