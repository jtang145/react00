import React,{Component} from "react";
import myClass from './index.module.css'

export default class Module extends Component {
    render(){
        return <h2 className={myClass.title}>hello module</h2>
    }
}