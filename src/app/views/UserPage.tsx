//#region [ Import React ]
import * as React from 'react';
import * as ReactDOM from "react-dom"
//#endregion

//#region [ Import Material UI ]
import { RaisedButton } from "material-ui"
import Paper from 'material-ui/Paper';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
//#endregion

//#region [ Import Project class ]
import Api from '../../../lib/client-lib/src';
import { User } from '../../../lib/core-lib/src';
//#endregion

//#region [ Props & State Definition ]
export interface IUserPageState {
	users: User[]
}
//#endregion

//#region [ Styles ]
const styles = {
	table: {
	},
	buttonGetApps: {
		marginTop: 5,
		marginLeft: 10
	},
	paperHeader: {
		width: '100%',
		height: 50,
		marginTop: 5
	},
	paperResult: {
		width: '100%',
		height: 'calc(100% - 170px)',
		marginTop: 5
	}
}
//#endregion

export default class AdminPage extends React.Component<{}, IUserPageState> {

	//#region [ Constructor ]
	constructor() {
		super();
		this.state = {
			users: []
		} as IUserPageState
		this.onClickHandler = this.onClickHandler.bind(this);
	}
	//#endregion

	//#region [ Handles ]
	onClickHandler(e: any) {
		let __this = this;
		Api.getJSON(
			'suser/getUsers',
			{},
			(data: any, textStatus: any, jqXHR: any) => {
				__this.setState({ users: data.users });
			},
			(jqXHR: any, textStatus: any, errorThrow: any) => {

			}
		)
	}
	//#endregion 

	//#region [ Render partials ]  
	RenderTable() {
		let list = [] as any[];
		this.state.users.forEach((app) => {
			list.push(
				<TableRow>
					<TableRowColumn>{app._id}</TableRowColumn>
					<TableRowColumn>{app.username}</TableRowColumn>
					<TableRowColumn>{app.first_name}</TableRowColumn>
					<TableRowColumn>{app.last_name}</TableRowColumn>
				</TableRow>
			);
		});

		return (
			<Table >
				<TableHeader>
					<TableRow>
						<TableHeaderColumn>ID</TableHeaderColumn>
						<TableHeaderColumn>UserName</TableHeaderColumn>
						<TableHeaderColumn>First Name</TableHeaderColumn>
						<TableHeaderColumn>Last Name</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody>
					{list}
				</TableBody>
			</Table>
		);
	}
	//#endregion

	//#region [ React Component ]  
	render() {
		return (
			<div>
				<Paper style={styles.paperHeader}>
					<RaisedButton label="Get Users from DB" style={styles.buttonGetApps} primary={true} onClick={this.onClickHandler} />
				</Paper>
				<Paper style={styles.paperResult}>
					{this.RenderTable()}
				</Paper>
			</div>
		);
	}
	//#endregion

}

