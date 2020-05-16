import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import './style.css';
import announcements from '../../json/announcements.json';


export default class Marquee extends Component {

constructor(){
		super();
		this.state = {
        run:'',    
		};
	}
		
	


render(){
	const bull = <span className="bullet">•</span>;
	
	console.log(announcements.data);
	
    return(
	<Card className="v_marquee" variant="outlined" >
		<CardContent>
			<Typography variant="h5" component="h1" style={{color:'#3f51b5'}}>
			 Announcements
			</Typography>
			<marquee direction="up" scrollamount="3" scrolldelay="60" behavior="scroll" height="100%" id="my_marquee">
				<ul >
					{
						announcements.data.map(item=>{
							return(
							<>
							<li style={{marginBottom:'5px',marginTop:'5px'}} onMouseOver={()=>document.getElementById('my_marquee').stop()}  
			 					onMouseLeave={()=>document.getElementById('my_marquee').start()}>
									 
								<Link href={item.link}>{item.text}</Link>
							</li>
							<Divider />
							
							</>
							)
						})
					}
				</ul>
			</marquee>
		</CardContent>
	</Card>

    )



}

}