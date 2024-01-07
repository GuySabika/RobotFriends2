import React from 'react';

class ErrorBoundry extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        haveError: false,
    };
    }

    componentDidCatch(event,info) {
        this.setState({haveError: true});
    }
    render() {
        if (this.state.haveError){
            return <div>Looks like you have an error</div>
        }
        return this.props.children;
    }
}
export default ErrorBoundry; 