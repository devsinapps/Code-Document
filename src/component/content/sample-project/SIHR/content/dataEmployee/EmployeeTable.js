import React, { Component } from 'react'
import { Table } from 'reactstrap'
class EmployeeTable extends Component{
	render(){
		const { employees } = this.props
		let number = 1
		return(
			<Table hover bordered striped responsive size='sm'>
				<thead>
					<tr>	
						<th> No </th>
						<th> First Name </th>
						<th> Last Name </th>
						<th> Address </th>
						<th> Country </th>
						<th> City </th>
						<th> Age </th>
						<th> Gender </th>
						<th> Education </th>
					</tr>
				</thead>
				<tbody>
					{employees && employees.map((employee)=>{
						
						return(
							<tr key={employee.id} onClick={()=>this.props.getDataRow(employee)}>
								<td> {number++} </td>
								<td> {employee.firstName} </td>
								<td> {employee.lastName} </td>
								<td> {employee.address} </td>
								<td> {employee.country} </td>
								<td> {employee.city} </td>
								<td> {employee.age} </td>
								<td> {employee.gender} </td>
								<td> {employee.education} </td>
							</tr>
						)
					})}
					
				</tbody>
			</Table>
		)
	}
}

export default EmployeeTable