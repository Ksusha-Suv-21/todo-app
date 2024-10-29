import React, { Component } from "react";
import PropTypes from 'prop-types';
import './tasks_filter.css';


export default class TasksFilter extends Component {

    static defaultProps = {
        onClickFilters: () => {}
    };

    static propTypes = {
        onClickFilters: PropTypes.func.isRequired
    };

    render() {
        const { onClickFilters } = this.props;

        return (
            <ul className="filters" onClick = {onClickFilters}>
                <li>
                    <button className="selected">All</button>
                </li>
                <li>
                    <button>Active</button>
                </li>
                <li>
                    <button>Completed</button>
                </li>
            </ul>
        );
    };
};

