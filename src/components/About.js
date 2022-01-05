//import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React from 'react'
export default function About(props) {
    
    return (
        <> <div className="containaer" style ={props.style}>
            <h3>About Us</h3>
                    <div className="accordion" id="accordionExample"style ={props.style}>
                        <div className="accordion-item"style ={props.style}>
                        <h2 className="accordion-header" id="headingOne"style ={props.style}>
                            <button className="accordion-button" style ={props.style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne"  className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style ={props.style}>
                            <div className="accordion-body">
                            Textutils gives you a way to analyze your text quickly and efficiantly.Be it word couny,character count,convert to upercase and lowercase,copy your text.
                            </div>
                        </div>
                        </div>
                        <div className="accordion-item" style ={props.style}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style ={props.style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" style ={props.style} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style ={props.style}>
                            Textutils is free character counter tool that provides instant charactre count and wor cout statistics for giver text.Textutils report the number of words and character.Thus it is suitable for writing text with words/ character limit.
                            </div>
                        </div>
                        </div>
                        <div className="accordion-item" style ={props.style}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style ={props.style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser comaptible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" style ={props.style} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            This word counter works in any web browser such as Chrome,Firefox,Internet Explorer,Safari,Opera.It suits to count character in facebook,books,excel documents,pdf documents and essays etc.
                            </div>
                        </div>
                        </div>
                </div>
        </div>    
        </>
    )
}
