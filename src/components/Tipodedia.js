import React, { Component } from 'react';
//import glamorous from 'glamorous'
import firebase from 'firebase/app'
import database from 'firebase/database'
import differenceInDays from 'date-fns/difference_in_days'
import Rebase from 're-base'
import LoadingBar from './LoadingBar'

const fire= firebase.initializeApp({
    apiKey: "AIzaSyCy2xviA4QveQt21nL-fMVQTJHgQXX417E",
    authDomain: "dukan-5b622.firebaseapp.com",
    databaseURL: "https://dukan-5b622.firebaseio.com",
    projectId: "dukan-5b622",
    storageBucket: "dukan-5b622.appspot.com",
    messagingSenderId: "486623103590"
})
const fbase= Rebase.createClass(database(fire))

class Tipodedia extends Component {
    constructor(props){
        super(props)
        this.state = {
            check: {
                lastTime: "",
                type: ""
            },
            loading: true
        }
    }
    componentWillMount() {
        fbase.fetch('check',{
            context: this,
            then: (data)=>{
                this.setState({check: data, loading: false})
                this.checkDate(data);
            }
        })
    }
    checkDate(than){
        let now = new Date()
        console.log(than.lastTime,now)
        console.log(differenceInDays(now,than.lastTime))
        console.log(differenceInDays(now,than.lastTime)%2)
        if (differenceInDays(now,than.lastTime)%2){
            if (than.type === "pp"){
                this.setState({check: {lastTime:now,type: "pv"}})
            }else{
                this.setState({check: {lastTime:now,type: "pp"}})
            }
        }
    }
    render() {
        let {loading, check} = this.state
        let imagen = check.type==="pp"?"/img/carne.jpg":"/img/verduras.jpg"
        return (
            <div style={{width: "320px"}}>
                {loading?
                    <LoadingBar />
                    :
                    <img src={imagen} alt="carne o verdura"/>
                }
            </div>
        )}
}

export default Tipodedia;