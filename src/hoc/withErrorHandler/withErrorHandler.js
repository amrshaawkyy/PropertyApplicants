import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../AUX1/Aux1';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
//         // constructor(){
//         //     super();
//         //     this.state = {
//         //         error: null
//         //     }
//         //     axios.interceptors.request.use(req => {
//         //         this.state.setState({ error: null });
//         //         return req;
//         //     })
//         //     axios.interceptors.response.use(res => res, error => {
//         //         this.state.setState({ error: error });
//         //     })
//         // }

        state = {
            error: null
        }

        UNSAFE_componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            })
        }
        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }
        render() {
            return (<Aux>
                <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler} >
                    {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props} />
            </Aux>);
        }
    }
}
export default withErrorHandler;
