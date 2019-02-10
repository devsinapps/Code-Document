import React from 'react'

class SendPropsInRoute extends React.Component{
	render(){
		console.log(this.props)
		return(
			<div>
				<button onClick={this.props.toggle}> test </button>
			</div>
		)
	}
}

export default SendPropsInRoute