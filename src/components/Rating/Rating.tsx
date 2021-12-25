import React from "react";

export function Rating(props:any) {
    console.log('Rating rendering')
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
        </div>
    )
}

function Star(props:any) {
    if (props.selected === true){
        return <span><b>Star</b> </span>
    } else {
        return <span>Star </span>
    }
    console.log('Star rendering')

}

export default Rating;