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
import { App } from '../../../lib/core-lib/src';
//#endregion

//#region [ Props & State Definition ]
export interface IAdminPageState {
	apps: App[]
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

export default class AdminPage extends React.Component<{}, IAdminPageState> {

	//#region [ Constructor ]
	constructor() {
		super();
		this.state = {
			apps: []
		} as IAdminPageState
		this.onClickHandler = this.onClickHandler.bind(this);
	}
	//#endregion

	//#region [ Handles ]
	onClickHandler(e: React.MouseEvent<{}>) {
		let __this = this;
		Api.getJSON(
			'sadmin/getApps',
			{},
			(data, textStatus, jqXHR) => {
				__this.setState({ apps: data.apps });
			},
			(jqXHR, textStatus, errorThrow) => {

			}
		)
	}
	//#endregion 

	//#region [ Render partials ]  
	RenderTable() {
		let list = [] as any[];
		this.state.apps.forEach((app) => {
			list.push(
				<TableRow>
					<TableRowColumn>{app._id}</TableRowColumn>
					<TableRowColumn>{app.name}</TableRowColumn>
					<TableRowColumn>{app.version}</TableRowColumn>
				</TableRow>
			);
		});

		return (
			<Table>
				<TableHeader>
					<TableRow>
						<TableHeaderColumn>ID</TableHeaderColumn>
						<TableHeaderColumn>Name</TableHeaderColumn>
						<TableHeaderColumn>Version</TableHeaderColumn>
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
					<RaisedButton label="Get Apps" style={styles.buttonGetApps} primary={true} onClick={this.onClickHandler} />
				</Paper>
				<Paper style={styles.paperResult}>
					{this.RenderTable()}
				</Paper>
			</div>
		);
	}
	//#endregion

}

