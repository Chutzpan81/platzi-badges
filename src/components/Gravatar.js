import React from 'react';
import md5  from 'md5';

function Gravatar (props){
    const email = props.email;
    
    const hash  = md5(email);
    console.log(email)
    console.log(hash);
    console.log("8b4c7d0cad7ecada2385ff5c567ce1ae");
    return  (<img className={props.className} src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}  alt="Avatar" />);
}


export default Gravatar;
