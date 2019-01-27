import React, { Component } from 'react'
import { Table, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class ReduxTable extends Component{
	render(){
		const { musicInfo } = this.props
		let number = 1
		return(
			<Table bordered hover responsive size="sm">
				<thead>
					<tr>
						<th> No </th>
						<th> Band </th>
						<th> Genre </th>
						<th> Song </th>
						<th> Album </th>
						<th> Top Sell </th>
					</tr>
				</thead>
				<tbody>
					{musicInfo.map((music)=>{
						return(
							<tr key={music.id} onClick={()=>this.props.getDataRow(music)}>
								<td> {number++} </td>
								<td> {music.band} </td>
								<td> {music.genre} </td>
								<td> {music.song} </td>
								<td> {music.album} </td>
								<td> {music.topsell} </td>
							</tr>
						)
					})}
				</tbody>
			</Table>
		)
	}
}

 

export default ReduxTable