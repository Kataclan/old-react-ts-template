//#region [ Import React ]
import * as React from 'react';
import {MouseEventHandler} from 'react';
//#endregion

//#region [ Import Material UI ]
import {AppBar, Tabs, Tab, FontIcon, IconButton, IconMenu, MenuItem} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
//#endregion

///#region [ Props & State Definition ]
interface IStateMainPage {
	slideIndex: number
}
///#endregion

export default class AppFrame extends React.Component<{}, IStateMainPage> {

	static contextTypes: React.ValidationMap<any> = {
		router: React.PropTypes.object
	}

	//#region [ Constructor ]
	constructor() {
		super();
		this.handleTabChange = this.handleTabChange.bind(this);
		this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
		this.state = {
			slideIndex: 0
		};
	}
	//#endregion

	//#region [ Handles ]
	handleTabChange(value: number) {
		this.setState({
			slideIndex: value,
		});

		if (value === 0)
			(this.context as any).router.push('/');
		if (value === 1)
			(this.context as any).router.push('/admin');
		if (value === 2)
			(this.context as any).router.push('/users');
	};
	handleBackButtonClick(ev:any) {
		alert("Back to Apps menu");
	};
	//#region [ Render Partials ]
	private renderTabs() {

		return (
			<div>
				<Tabs
					onChange={this.handleTabChange}
					value={this.state.slideIndex}
					>
					<Tab label="Home" value={0} />
					<Tab label="Admin" value={1} />
					<Tab label="Users" value={2} />
				</Tabs>
			</div>
		);
	}
	private renderAppBar() {
		return (
			<AppBar
				title="srv-frontend - [run 'srv-backend' to check client/server communication]"
				iconElementLeft={
					<IconButton onClick={this.handleBackButtonClick}>
						<ArrowBackIcon/>
					</IconButton>
				}
				iconElementRight={
					<IconMenu
						iconButtonElement={
							<IconButton><MoreVertIcon /></IconButton>
						}
						targetOrigin={{ horizontal: 'right', vertical: 'top' }}
						anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
						<MenuItem primaryText="settings" />
						<MenuItem primaryText="Help" />
					</IconMenu>
				}/>
		);
	}
	//#endregion 

	//#region [ React Component ] 
	render() {
		return (
			<div>
				{ this.renderAppBar()}
				{ this.renderTabs() }
				{ this.props.children }
			</div>
		);
	}
	//#endregion
}