import React from 'react'
import {Button,List} from 'antd-mobile'

class App extends React.Component{
	render(){
		const boss = '哈哈哈'
		return (
			<div>
				<h2>这是个什么鬼，什么{boss}</h2>
				<One boss='嘿嘿嘿123'></One>
				<Two boss = "jackwang"></Two>
			</div>
		)
	}
}


// 组件名要大写
function Two(props){
	return <h2>这是一个第三个什么鬼，老大是{props.boss}</h2>
}


class One extends React.Component{
	constructor(props){
		super(props)
		this.state={
			solders:['jackwang','jhon','Tom']
		}
	}

	componentWillMount(){
		console.log("组件马上要被加载了")
	}

	componentDidMount(){
		console.log("组件已经加载完毕")
	}

	addsolders=()=>{
		console.log(0)
		this.setState({
			solders :[...this.state.solders,'Alice'+Math.random()]
		})
	}


	render(){
		console.log("组件正在加载")
		return(       
			<div>
				<h2>这是第二个什么鬼，什么{this.props.boss}</h2>
				<Button type="primary" onClick={this.addsolders}>添加士兵</Button>
				<List renderHeader={()=>'士兵列表'}>
					{this.state.solders.map(v=>{
						return(
							<List.Item key={v}>{v}</List.Item>
						)
					})}
				</List>
			</div>
		)
	}
}

export default App