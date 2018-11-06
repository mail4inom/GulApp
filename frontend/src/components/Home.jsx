import React from "react";
import axios from 'axios';
import io from 'socket.io-client';
import { LOGOUT } from '../components/Central/Giychat/Events';
import StarRatings from 'react-star-ratings';
const socketUrl = "http://localhost:3100";
var Moment = require("moment");
require('moment/locale/uz');

export default class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            news: [],
            surveyQuestion: [],
            announcements: []
        }
    }

    componentDidMount() {
        this.logout();
        axios
            .get("/users/getallnews")
            .then((res) => {
                this.setState({
                    news: res.data.slice(0, 3)
                })
            })
            .catch((err) => {
                console.log(err);
            })
        axios
            .get("/users/get_all_surveys")
            .then((res) => {
                this.setState({
                    surveyQuestion: res.data?res.data.slice(0, 1)[0]:""
                })
            })
            .catch((err) => {
                console.log(err);
            })
        axios
            .get("/users/getallannouncements")
            .then( (res) => {
                this.setState({
                    announcements: res.data?res.data[0]:""
                })
            })
            .catch( (err) => {
                console.log(err);
            })
    }

    logout = () => {
        const socket = io(socketUrl);
        let username = this.props.userInfo.length > 0? this.props.userInfo[0].username:""
        socket.emit(LOGOUT, username);
	}
    
    render() {
        const { news, surveyQuestion, announcements } = this.state;
        let avg = surveyQuestion? surveyQuestion.avg:0;
        return(
            <div>
                <h2>Қишлоқ хабарлари</h2>
                {news.map( (ele) => {
                   return( 
                   <div key={ele.news_id}>
                       <h4>{ele.title}</h4>
                       <p>{ele.text}</p>
                       <p>{ele.fullname}</p>
                        {Moment(ele.news_timestamp).format("LLLL")}
                       <hr/>
                   </div>
                    )
                })}
            <h1>{surveyQuestion? surveyQuestion.survey_question:""}</h1>
                {surveyQuestion? <StarRatings
                    starRatedColor="yellow"
                    rating={avg > 0? Number(avg):0}
                    numberOfStars={5}
                    starEmptyColor="grey"
                />:""}<br/>
                <div>
                    <h1>{announcements? announcements.title:""}</h1>
                    <p>{announcements? announcements.announcement:""}</p>
                    <p>{announcements? announcements.fullname:""}</p>
                    <p>{announcements? Moment(announcements.announ_timestamp).format("LLLL"):""}</p>
                    <hr />
                </div>
            </div>
        )
    }
}