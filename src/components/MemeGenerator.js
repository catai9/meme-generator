import React, {Component} from 'react'

class MemeGenerator extends Component{

    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: [],
            topTextColor: 'white',
            bottomTextColor: 'white'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const{memes} = response.data
                this.setState({allMemeImgs: memes})
            })
        }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    handleSubmit(event){
        event.preventDefault()
        // get a random int (index in the array)
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        // get the meme from the index
        const randMemImge = this.state.allMemeImgs[randNum].url
        // set 'randomImg' to the .url of the random item I grabbed
        this.setState({randomImg: randMemImge})
    }

    render(){
        return (
            <div className="middleText">
                <form className="meme-form" onSubmit={this.handleSubmit}> 
                    <h1>Meme Generator Text Input</h1>
                    <label>Top Text: </label>
                    <input 
                        type="text"
                        name="topText" 
                        placeholder="Enter the top text here"
                        value={this.state.topText} 
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <label>Bottom Text: </label>
                    <input 
                        type="text"
                        name="bottomText" 
                        placeholder="Enter the bottom text here"
                        value={this.state.bottomText} 
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <button>Generate Meme</button>
                    <div className="colorPicker">
                        <label>Top Text Color: </label>
                        <input 
                            type="color" 
                            name="topTextColor" 
                            value={this.state.topTextColor}
                            onChange={this.handleChange}
                        />
                        <label>Bottom Text Color: </label>
                        <input 
                            type="color" 
                            name="bottomTextColor" 
                            value={this.state.bottomTextColor}
                            onChange={this.handleChange}
                        />
                    </div>
                </form> 
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top" style={{color: this.state.topTextColor}}>{this.state.topText}</h2>
                    <h2 className="bottom"style={{color: this.state.bottomTextColor}}>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }

}

export default MemeGenerator