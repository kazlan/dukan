import React, { Component } from 'react';
//import glamorous from 'glamorous'
import firebase from 'firebase/app'
import database from 'firebase/database'
import differenceInDays from 'date-fns/difference_in_days'
import Rebase from 're-base'

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
        fbase.syncState('check',{
            context: this,
            state: 'check',
            then: ()=>{
                this.checkDate();
                this.setState({loading: false})
            }
        })
    }
    checkDate(){
        let than = this.state.check.lastTime
        let now = new Date()
        console.log(than,now)
        console.log(differenceInDays(now,than)%2)
        if (differenceInDays(now,than)%2){
            if (this.state.type === "pp"){
                this.setState({check: {lastTime:now,type: "pv"}})
            }else{
                this.setState({check: {lastTime:now,type: "pp"}})
            }
        }
    }
    render() {
        if (this.state.loading) return <div>Loading...</div>
        let icono = this.state.check.type==="pp"?"/img/filete.svg":"/img/lechuga.svg"
        let imagen = this.state.check.type==="pp"?"/img/carne.jpg":"/img/verduras.jpg"
        return <div style={{width: "320px"}}>
                    <img src={imagen} alt="carne o verdura"/>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. 
                    </p>
                </div>
    }
}

export default Tipodedia;