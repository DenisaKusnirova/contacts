import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'

class CreateContact extends Component {
    // Serialize the data and pass is to the parent component:
    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })

        if (this.props.onCreateContact) {
            this.props.onCreateContact(values)
        }
    }

    render() {
        return (
            <div>
                <Link 
                    className="close-create-contact" 
                    to="/"
                />
                <form onSubmit={this.handleSubmit} className="create-contact-form">
                    <ImageInput 
                        className="create-contact-avatar-input"
                        name="avatarURL"
                        maxHeight={64}
                    />
                    <div className="create-contact-details">
                        <input type="text" placeholder="Name" name="name" />
                        <input type="text" placeholder="Handle" name="handle" />
                        <button>Add contact</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateContact