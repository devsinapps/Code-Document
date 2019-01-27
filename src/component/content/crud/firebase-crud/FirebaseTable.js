import React, { Component } from 'react'
import { Table } from 'reactstrap'

class FirebaseTable extends Component{
	render(){
		const { employees } = this.props
		let number = 1
		return(
			<Table responsive hover bordered size='sm'>
				<thead>
					<tr>
						<th> No </th>
						<th> First Name </th>
						<th> Last Name </th>
						<th> Age </th>
						<th> Gender </th>
						<th> Address </th>
						<th> Education </th>
						<th> Country </th>
						<th> City </th>
					</tr>
				</thead>
				<tbody>
					{employees && employees.map((employee)=>{
						return(
						<tr key={employee.id} onClick={() => this.props.getDataRow(employee)}>
							<td> {number++} </td>
							<td> {employee.firstName} </td>
							<td> {employee.lastName} </td>
							<td> {employee.age} </td>
							<td> {employee.gender} </td>
							<td> {employee.address} </td>
							<td> {employee.education} </td>
							<td> {employee.country} </td>
							<td> {employee.city} </td>
						</tr>
						)
					})}
				</tbody>
			</Table>
		)
	}
}

export default FirebaseTable