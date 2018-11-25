import React, { Component } from 'react';
import NumButton from './numButton';
import './makeButton.scss'
class makeButton extends Component {
    state = {
        number : { one : [1,2,3,4,5,6,7,8,9] ,
                   ten : [10,11,12,13,14,15,16,17,18,19],
                   twenty :[20,21,22,23,24,25,26,27,28,29],
                   thirty :[30,31,32,33,34,35,36,37,38,39],
                   forty : [40,41,42,43,44]  
        },
        renderNum : false,
        value : []
    }
    _inputNum = (e) =>{
       let i;
       if(this.state.value.length === 6){
        alert("6개의 숫자만 선택가능합니다.")
        } else {
            for(i=0; i<this.state.value.length; i++){
                if(this.state.value[i] === e.target.value){
                    alert("중복불가")
                    break
                }
            }
             if(i === this.state.value.length){
                this.setState({
                    value: this.state.value.concat([e.target.value]),
                    renderNum: true
                })
            }
        }
    }

    _renderNum = () =>{
        if(!this.state.renderNum) return "버튼을 클릭해 주세요.";
        return this.state.value.sort((a,b)=>{return a - b}).join(',');
    }

    _deleteAllNum = ()=>{
        if( this.state.renderNum){
            this.setState({
                value : [],
                renderNum:false
            })
        }
    }
    _sendNum = ()=>{
        if(this.state.value.length === 6){
            const con = window.confirm(this.state.value + "가 맞나요?" );
            if(con === true){
                alert("Good luck!")
                this.setState({
                    value : [],
                    renderNum :false
                })
            }
        }else {
            alert("6개의 숫자를 선택해주세요")
        }
    }
    componentDidUpdate()
    {
        const sortNum = this.state.value;
        sortNum.sort((a,b)=>{
            return a - b
        })
        console.log(sortNum)
        
    }

    
    render() {
        return (
            <div className="soohan">
                <div>
                    {this.state.number.one.map((num , i)=>{
                        return  <NumButton 
                                    ref = {ref => {this.button = ref;}}      
                                    key = {i}
                                    changeClick = {this._inputNum}
                                    num = {num}
                                    >
                                    </NumButton>
                          
                                })}
                 </div> 
                 <div>
                 {this.state.number.ten.map((num , i)=>{
                    return  <NumButton 
                                ref = {ref => {this.button = ref;}}
                                 
                                key = {i}
                                changeClick = {this._inputNum}
                                num = {num}
                                >
                                </NumButton>
                           
                })}
                </div>
                 {this.state.number.twenty.map((num , i)=>{
                    return  <NumButton 
                                ref = {ref => {this.button = ref;}}
                                
                                key = {i}
                                changeClick = {this._inputNum}
                                num = {num}
                                >
                                </NumButton>
                           
                })}
                <div>
                 {this.state.number.thirty.map((num , i)=>{
                    return  <NumButton 
                                ref = {ref => {this.button = ref;}}
                                 
                                key = {i}
                                changeClick = {this._inputNum}
                                num = {num}
                                >
                                </NumButton>
                           
                })}
               </div>
                <div>
                 {this.state.number.forty.map((num , i)=>{
                    return  <NumButton 
                                ref = {ref => {this.button = ref;}}
                                 
                                key = {i}
                                changeClick = {this._inputNum}
                                num = {num}
                                >
                                </NumButton>
                           
                })}
               </div>
                <div className="render-num"> {this._renderNum()}</div> 
                <div><button onClick={this._deleteAllNum}>전부 비우기</button></div>
                <button onClick={this._sendNum}>보내기</button>
            </div>
        );
    }
}


export default makeButton;