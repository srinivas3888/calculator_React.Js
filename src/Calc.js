import './App.css';
import { useState } from 'react';

function Calc(){
    let f=0;
    let [val, setVal]=useState("");
    // let [c, setColors]=useState("-1");

    function handleClick(e){
        let i=e.target.value, result="";
        if(i==="C"){
            result="";
        }
        else if(i==="D"){
            for(let k=0; k<val.length-1; k++){
                result += val[k];
            }
        }
        else if(i==="="){
            if(val==="." || val==="0" || val==="00" || val==="+" || val==="-" || val==="*" || val==="/" || val==="%"){
                result=val;
            }
            else{
            result=String(eval(val));
            }
        }
        else{
            result = val+i;
        }
        setVal(result);
    }

    // function handleMode(e){
    //     let t = (c==="1")?"-1":"1";
    //     setColors(t);
    // }
    // let col = (c==="1")?"white":"black";           
    // let bcol = (c==="1")?"black":"white";
    
    return (
        <div id='m'>
            <div id='calc'>
                {/* <input value="Click" type='submit' id='mode' onClick={handleMode} style={{border:'2px solid blue', color:{col}, backgroundColor:{bcol}}} /> */}
                <div id='main'>
                    
                    <div id='res' style={{border:'none',backgroundColor:"white", gridArea:'inp', display:'grid', justifyContent:'center', justifyItems:'center', cursor:'text', fontWeight:'500' }}>
                        <input id='i1' value={val} placeholder='0000' disabled='True' style={{border:'none', color:'black', backgroundColor:'white'}}></input>
                    </div>
                
                    <div style={{gridArea:'row1', display:'grid', borderTop:'4px solid rgb(0, 255, 242)', backgroundColor:'rgb(232, 252, 252)', gridTemplateColumns:'repeat(4, minmax(0, 1fr))', justifyContent:'center', justifyItems:'center', overflow:'hidden'}}>
                        <input value={'C'} onClick={handleClick} type='submit' key={++f} id={'n1'} className='btns' style={{color:'black', border:'none'}}></input>
                        <input value={'%'} onClick={handleClick} type='submit' key={++f} id={'n2'} className='btns' style={{color:'black', border:'none'}}></input>
                        <input value={'D'} onClick={handleClick} type='submit' key={++f} id={'n3'} className='btns' style={{color:'black', border:'none'}}></input>
                        <input value={'/'} onClick={handleClick} type='submit' key={++f} id={f} className='btns' style={{color:'black', border:'none'}}></input>
                    </div>
                    <div style={{gridArea:'row2', display:'grid', backgroundColor:'rgb(232, 252, 252)', gridTemplateColumns:'repeat(4, minmax(0, 1fr))', justifyContent:'center', justifyItems:'center', overflow:'hidden'}}>
                        <input value={'7'} onFocus={handleClick} type='submit' key={++f} id={f} className='btns' style={{color:'black', border:'none'}}></input>
                        <input value={'8'} onClick={handleClick} type='submit' key={++f} id={f} className='btns' style={{color:'black', border:'none'}}></input>
                        <input value={'9'} onClick={handleClick} type='submit' key={++f} id={f} className='btns' style={{color:'black', border:'none'}}></input>
                        <input value={'*'} onClick={handleClick} type='submit' key={++f} id={f} className='btns' style={{color:'black', border:'none'}}></input>
                    </div>
                    <div style={{gridArea:'row3', display:'grid', backgroundColor:'rgb(232, 252, 252)', gridTemplateColumns:'repeat(4, minmax(0, 1fr))', justifyContent:'center', justifyItems:'center', overflow:'hidden'}}>
                        <input value={'4'} onClick={handleClick} type='submit' key={++f} id={f} className='btns' style={{color:'black', border:'none'}}></input>
                        <input value={'5'} onClick={handleClick} type='submit' key={++f} id={f} className='btns' style={{color:'black', border:'none'}}></input>
                        <input value={'6'} onClick={handleClick} type='submit' key={++f} id={f} className='btns' style={{color:'black', border:'none'}}></input>
                        <input value={'-'} onClick={handleClick} type='submit' key={++f} id={f} className='btns' style={{color:'black', border:'none'}}></input>
                    </div>
                    <div style={{gridArea:'row4', display:'grid', backgroundColor:'rgb(232, 252, 252)', gridTemplateColumns:'repeat(4, minmax(0, 1fr))', justifyContent:'center', justifyItems:'center', overflow:'hidden'}}>
                        <input value={'1'} onClick={handleClick} type='submit' key={++f} id={f} className='btns' style={{color:'black', border:'none'}}></input>
                        <input value={'2'} onClick={handleClick} type='submit' key={++f} id={f} className='btns' style={{color:'black', border:'none'}}></input>
                        <input value={'3'} onClick={handleClick} type='submit' key={++f} id={f} className='btns' style={{color:'black', border:'none'}}></input>
                        <input value={'+'} onClick={handleClick} type='submit' key={++f} id={f} className='btns' style={{color:'black', border:'none'}}></input>
                    </div>
                    <div style={{gridArea:'row5', display:'grid', borderBottomLeftRadius:'1em', borderBottomRightRadius:'1em', backgroundColor:'rgb(232, 252, 252)', gridTemplateColumns:'repeat(4, minmax(0, 1fr))', justifyContent:'center', justifyItems:'center', overflow:'hidden'}}>
                        <input value={'00'} onClick={handleClick} type='submit' key={++f} id={'n4'} className='btns' style={{color:'black', border:'none'}}></input>
                        <input value={'0'} onClick={handleClick} type='submit' key={++f} id={f} className='btns' style={{color:'black', border:'none'}}></input>
                        <input value={'.'} onClick={handleClick} type='submit' key={++f} id={f} className='btns' style={{color:'black', border:'none'}}></input>
                        <input value={'='} onClick={handleClick} type='submit' key={++f} id={'cal'} className='btns' style={{color:'black', border:'none'}}></input>
                    </div>

                    
                </div>
            </div>
        </div>
    );
}



export { Calc };