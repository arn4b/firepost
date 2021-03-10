import React, {Component} from 'react'

class Navbar extends Component{
    render(){
        return(
            <div class="topnav">
            <a class="active" href="#home">Home</a>
            <button>About</button>
            <button>Login</button>
            </div>
        );
    }
}

export default Navbar;