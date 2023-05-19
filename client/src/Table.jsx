import React from "react";

export default function Table({ data }) {
	return (
		<div className="table">
			<table align="left">
				<tr>
					<th>First Name</th>
					<th>Surname</th>
					<th>Email</th>
				</tr>
				{data.map((item) => (
					<>
						<p></p>
						<tr key={item.id}>
							<td>{item.first_name}</td>
							<td>{item.last_name}</td>
							<td>{item.email}</td>
						</tr>{" "}
					</>
				))}
			</table>
		</div>
	);
}
