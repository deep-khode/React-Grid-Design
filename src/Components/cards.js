import React, { Component, pureComponent } from 'react'
import data from './data.js';
import './style.css';

class Cards extends Component {

    // componentDidMount(){
    //     console.log("sdf", data);
    // }
    
    render() {
        return (

            <section className="card-section">
                <div id="card-data">
                    {
                        data.map((item, i) => {
                            return (
                                <article key={item.id} className="card-container">
                                    <a href="#">
                                        <div className="card-header">
                                            <img className="card-img"
                                                src={item.img}
                                                alt={item.title} />
                                        </div>
                                        <div className="card-body">
                                            <div className="card-content">
                                                <p className="card-title">{item.title}</p>
                                                <p className="auth-wrapper"><span className="card-author">{item.name}</span> | 
                                                    <span className="card-date"> {item.date}</span>
                                                </p>
                                                <p className="card-desc">{item.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                            );
                        })
                    }
                    
                </div>
            </section>
        )
    }
}

export default Cards