import React, { useEffect, useState } from "react";
import WindowWidthTracker from "./WIndowWidthTracker";

export default function Forms(props) {        
    function handleChange(event) {
        const { type, name, value, checked } = event.target

        props.data.setData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleFemale() {
        document.querySelector(".popup").classList.add("active")
    }

    // intentionally crashes
    const age = props.data.data.age
    const gender = props.data.data.gender
    if((age > 10 && age <= 12) || gender === "female") {
        
    } 
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log("Successfully submitted!");
    }

    const [showWidth, setShowWidth] = useState(true)

    function toggleShowWidth() {
        setShowWidth(prevState => !prevState)
    }

    

    return (
        <>
            <div className="popup">
                    <div className="popup-header">
                        <h2 className="popup-text">Access Denied!?</h2>
                        <button id="popup-close-btn">&times;</button>
                    </div>
                    <img 
                        src={process.env.PUBLIC_URL + "/media/audi.jpg"} 
                        alt="cool car" 
                        className="popup-image"
                    />
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="form-header">Form:</h1>
                
                <div className="question">
                    <div className="input-wrapper">
                        <label htmlFor="firstName">First name:</label>
                        <input 
                            type="text"
                            id="firstName"
                            className="input"
                            name="firstName"
                            onChange={handleChange}
                            value={props.data.data.firstName}
                        />
                    </div>
                </div>

                <div className="question">
                    <label htmlFor="lastName">Last name:</label>
                    <input 
                        type="text"
                        id="lastName"
                        className="input"
                        name="lastName"
                        onChange={handleChange}
                        value={props.data.data.lastName}
                    />
                </div>

                <div className="question">
                    <label htmlFor="age">Age:</label>
                    <input 
                        type="number"
                        className="input"
                        name="age"
                        id="age"
                        onChange={handleChange}
                        value={props.data.data.age}
                        min="0"
                        max="27"
                    />
                </div>

                <div className="question">
                    <input 
                        type="radio"
                        className="input"
                        name="gender"
                        id="gender-option1"
                        value="male"
                        onChange={handleChange}
                    />
                    <label htmlFor="gender-option1">Male</label>
                    <input 
                        type="radio"
                        className="input"
                        name="gender"
                        id="gender-option2"
                        value="female"
                        onChange={handleFemale}

                    />
                    <label htmlFor="gender-option2">Female</label>
                </div>

                <div className="question">
                    <fieldset className="field-set">
                        <legend>Type of school you attend:</legend>

                        <div className="input-wrapper">
                            <input 
                                type="radio"
                                name="typeOfSchool"
                                id="school-option1"
                                onChange={handleChange}
                                value="private"
                            />
                            <label htmlFor="school-option1">Private</label>
                        </div>

                        <div className="input-wrapper">
                                <input 
                                type="radio"
                                name="typeOfSchool"
                                id="school-option2"
                                onChange={handleChange}
                                value="public"
                            />
                            <label htmlFor="school-option2">Public</label>
                        </div>
                    </fieldset>
                </div>

                <div className="question">
                    <label htmlFor="favColor">Your favorite color:</label>
                    <select
                        className="select"
                        id="favColor"
                        name="favColor"
                        value={props.data.data.favColor}
                        onChange={handleChange}
                    >
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="darkblue">Darkblue</option>
                        <option value="green">Green</option>
                        <option value="black">Black</option>
                    </select>
                </div>
                
                <div className="question">
                    <input 
                        type="checkbox"
                        checked={props.data.data.termsOfServiceAgree}
                        value={props.data.data.termsOfServiceAgree}
                        name="termsOfServiceAgree"
                        id="termsOfServiceAgree"
                        onChange={handleChange}
                    />
                    <label htmlFor="termsOfServiceAgree">I agree with the terms of service</label>

                    <a href="https://youtu.be/gokdrC4gQA4">
                        <button className="secret-btn"></button>
                    </a>
                </div>
                <button className="submit-btn">Submit</button>
            </form>
            <button onClick={toggleShowWidth}>Show width</button>
            {showWidth && <WindowWidthTracker />}
        </>        
    )
}
