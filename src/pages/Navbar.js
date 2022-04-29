import React from 'react'
import { Component } from 'react' 

export default class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="javascript:void(0)">Logo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="mynavbar">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a class="nav-link">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Link</a>
                            </li>
                        </ul>
                    </div>  
                </div>
            </nav>
        )
    }
}