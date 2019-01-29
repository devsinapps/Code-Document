import React, { Component } from 'react'
import { Table } from 'reactstrap'
class UserTable extends Component{
	render(){
		const { users } = this.props
		return(
			<Table hover bordered stripped responsive size='sm'>
				<thead>
					<tr>
						<th> No </th>
						<th> First Name </th>
						<th> Last Name </th>
						<th> Gender Name </th>
						<th> Age Name </th>
						<th> Email Name </th>
						<th> Password Name </th>
						<th> Phone Number </th>
						
					</tr>
				</thead>
				<tbody>
					{users && users.map((user)=>{
						return(
							<tr key={user.id} onClick={() => this.props.getDataRow(user)}>
								<td> No </td>
								<td> {user.firstName} </td>
								<td> {user.lastName} </td>
								<td> {user.gender} </td>
								<td> {user.age} </td>
								<td>{user.email} </td>
								<td> {user.password}</td>
								<td> {user.phone} </td>
								
							</tr>
						)
					})}
				</tbody>
			</Table>
		)
	}
}

export default UserTable