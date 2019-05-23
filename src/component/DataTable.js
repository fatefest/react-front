import React,{Component} from "react";

class DataTable extends Component{
    constructor(props){
        super(props);
        this.state = {users:[]};
    }

    componentDidMount() {
        this.serverRequest = fetch(
            'https://www.easy-mock.com/mock/59801fd8a1d30433d84f198c/example/user/all'
        )
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({users: data})
            })
            .catch(e => console.log('错误:', e))
    }
    render() {
        return (
            <table>
                <th>名字</th><th>id</th>
                {this.state.users&&
                this.state.users.map((item,index)=>(
                    <tr>
                        <td>{item.name}</td><td>{item.id}</td>
                    </tr>
                ))}
            </table>
        );
    }
}

export default DataTable;