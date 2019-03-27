import React from 'react';
import { Paper, Tabs } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';

const Footer = ({ muscles, category, onSelect }) => {

	const index = category
		? muscles.findIndex(group => group === category) + 1
		: 0

	const onIndexSelect = (e, index) => {
      	onSelect(index === 0 ? '' : muscles[index - 1])
    }

	return(
		<Paper>
	        <Tabs
	          value={index}
	          onChange={onIndexSelect}
	          indicatorColor="primary"
	          textColor="primary"
	          centered
	        >
	        	<Tab label="All" />
	        	{ muscles.map(muscle =>
	        		<Tab key = {muscle} label={muscle} />
	        	)}
	        </Tabs>
	     </Paper>
	)
}

export default Footer;