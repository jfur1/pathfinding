import React, {Component} from 'react';
import './navbar.css';

export default class Navbar extends Component{

    constructor(props){
        super(props);
        this.state = {value: props.value};
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }
    
    toggleDropdown(){
        
        document.getElementById("myDropdown").classList.toggle("show");
    }

    selectAlgo(id){
        this.toggleDropdown();
        document.getElementById("startButton").innerHTML = id;
        return;
    }

    render(){
        return(
            <div class="navbar">
                <div class="dropdown">
                    <button onClick={() => this.toggleDropdown()} class="dropbtn">Select an Algorithm</button>
                    <div id="myDropdown" class="dropdown-content">
                        <a href="#" id="dijkstraStart" onClick={() => this.selectAlgo("Dijkstra's Algorithm")}>Dijkstra's Algorithm</a>
                        <a href="#" id="astarStart" onClick={() => this.selectAlgo("A* Search")}>A* Search</a>
                        <a href="#" id="bfsStart" onClick={() => this.selectAlgo("Breadth-First-Search")}>BFS</a>
                        <a href="#" id="dfsStart" onClick={() => this.selectAlgo("Depth-First-Search")}>DFS</a>
                    </div>
                </div>
            </div>
        )
    }

}    
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        }
    }
    }
}