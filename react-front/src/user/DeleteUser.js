import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { isAuthenticated } from "../auth";
import { remove } from "./apiUser";
import { signout } from "../auth";

// to delete a user 

class DeleteUser extends Component {
    state = {
        redirect: false
    };

    deleteAccount = () => {
        const token = isAuthenticated().token;
        const userId = this.props.userId;
        remove(userId, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                signout(() => console.log("Account Deleted! Please Come Back"));
                this.setState({ redirect: true });
            }
        });
    };

    deleteConfirmed = () => {
        let answer = window.confirm(
            "Give it another try! Are you Sure?"
        );
        if (answer) {
            this.deleteAccount();
        }
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }
        return (
            <button
                onClick={this.deleteConfirmed}
                className="btn btn-raised btn-danger"
            >
                Delete Profile
            </button>
        );
    }
}

export default DeleteUser;
