import React from 'react';
import QuoteForm from './quote_form';

class EditPhotoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.blog;
    }

    render() {
        if (!this.props.blog) return null;

        return (
            <QuoteForm
                blog={this.props.blog}
                currentUser={this.props.currentUser}
                errors={this.props.errors}
                processBlog={this.props.processBlog}
                formType={this.props.formType}
            />
        )
    }

}

export default EditPhotoForm;