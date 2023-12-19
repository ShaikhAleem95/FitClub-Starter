import React from 'react';
import{programsData} from "../../data/programsData";
import RightArrow from '../../assets/rightArrow.png';
import "./Programs.css";

const Programs = () => {
  return (
    <div class="Programs" id="Programs">
       
        <div class="Programs-header">
            <span className="stroke-text">Explorer</span>
            <span>Programs</span>
            <span className="stroke-text">to shape your</span>
        </div>

        <div class="program-categories">

            {programsData.map((program)=>(
                <div class="category">
                    {program.image}
                    <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div class="join-now">
                            <span>join-now</span>
                        </div>
                </div>
            ))}
        </div>
    </div>

  );
};

export default Programs;
