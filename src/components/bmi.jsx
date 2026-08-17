import React, { useState } from "react";
function Bmi()
{
    const [weight,setWeight]=useState();
    const [height,setHeight]=useState();
    const [result,setResult]=useState();
    const [msg,setMsg]=useState("");
    const getInput=(event)=>
    {
        if(event.target.name==="weight")
        {
            setWeight(event.target.value);
        }
        if(event.target.name==="height")
        {
            setHeight(event.target.value);
        }
    }
    console.log("Height : "+height);
    console.log("Weight : "+weight);

    const calculate=()=>
    {
        let meter=height*0.3048;
        let bmi=(weight/(meter*meter)).toFixed(2);
        setResult("Your BMI:"+bmi);
        if(bmi<18)
        {
            setMsg("You are UnderWeight");
        }
        else if(bmi>=18 && bmi<25)
        {
            setMsg("You are Normal Weight");
        }
        else if(bmi>=25 && bmi<30)
        {
            setMsg("You are Over Weight");
        }
        else if(bmi>=30)
        {
            setMsg("You are Obesity");
        }
    }

    const reload=()=>
    {
        window.location.reload();
    }
    
    return(
        <div className="main">
            <div className="heading">
                <h1>BMI Calculator Application in ReactJS</h1>
            </div>
            
            <div className="inputs">
                <p>
                    Enter Your Weight in KG
                </p>
                <input type="text" name="weight" placeholder="Enter the Weight(kg)" onChange={getInput}/>
                <div className="height">
                    <p>
                        Enter Your Height in Fit
                    </p>
                    <input type="text" name="height" placeholder="Enter the Height(fit)" onChange={getInput}/>
                </div>
            </div>
            <div className="btn">
                <button onClick={calculate}>Calculate BMI</button>
                <button onClick={reload}>Reload</button>
            </div>
            <div>
                <p>{result}</p>
                <p>{msg}</p>
            </div>
        </div>
    );
}

export default Bmi;