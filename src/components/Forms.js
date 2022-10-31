import React, { useEffect, useState } from "react";

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

    // intentionally crashes
    const age = props.data.data.age
    const gender = props.data.data.gender
    if((age > 10 && age <= 12) || gender === "female") {
        console.log("Not allowed!");
        let x = 0;
        while(true) {
            x++;
        }
    } 
    
    // code inside useEffect only runs after all of the UI has rendered
    // logs "null" is put outside of "useEffect"
    useEffect(() => {
        console.log("age: " + props.data.data.age)
    }, [props.data.data.age])

    useEffect(() => {
        console.log(("First name: " + props.data.data.firstName));
    }, [props.data.data.firstName])

    useEffect(() => {
        console.log("Last name: " + props.data.data.lastName);
    }, [props.data.data.lastName])

    useEffect(() => {
        console.log("Type of school: " + props.data.data.typeOfSchool);
    }, [props.data.data.typeOfSchool])
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log("Successfully submitted!");
    }

    return (
        <>
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
                        onChange={handleChange}
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
        </>        
    )
}
