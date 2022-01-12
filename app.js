class App extends React.Component{
        state = {
            text: null,
            messages: ['tekst1', 'tekst2','tekst3'],
            value: ''
        }

        
        handleShowText = () => {
            const index = Math.floor(Math.random()* this.state.messages.length);

            this.setState({
                text: this.state.messages[index]
            })
        }
        handleChangeValue = (e) => {
            this.setState({
                value: e.target.value
            })
        }
        handleAddText = () => {
           if(this.state.value === "") return alert('wpisz cos')
           const messages = [...this.state.messages]
           messages.push(this.state.value)
           this.setState({
               messages,
               value: ''
           })
           alert(`opcja dodana. aktualne opcje: ${messages}`)

        }
        
        render(){
        return (
            <div>
                <button onClick={this.handleShowText}>Zobacz wiadomość</button>
                <br/>
                <label>
                    <input type="text" value={this.state.value} onChange={this.handleChangeValue} ></input><button onClick={this.handleAddText}>Dodaj wiadomość</button>
                </label>
                {this.state.text ? <h1>{this.state.text}</h1> : null}
            </div>
        )
    }
    }
    
    ReactDOM.render(<App />,
    document.getElementById('root'))
    