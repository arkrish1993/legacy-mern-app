
class CreatePolicy extends React.Component {
    state = {age: 0, amount: 0};

    submit = () => {
        fetch('http://localhost:3000/policy/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(this.state)
        });
    }

    render() {
        return(
            <div>
                <input onChange={(e) => this.setState({age: e.target.value})} placeholder="Age"/> <br/>
                <input onChange={(e) => this.setState({amount: e.target.value})} placeholder="Amount"/> <br/>
                <button onClick={submit}>Create</button>
            </div>
        )
    }

}