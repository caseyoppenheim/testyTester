import React from 'react';
import tire from "./tire.jpg";
import bumper from "./tempBumper.jpg";
import levelingKit from "./levelingKit.jpg";
import { useNavigate } from "react-router-dom";
import {Form, formOptions, Deals, FeatDeals} from "./homeStyle.js";


function ResultsPage(){
	let nav = useNavigate();
	const routeChange = () =>{
		let path = '/results';
		nav(path);

	}

	return (
		<button color="primary" className="px-4"onClick={routeChange}
              >
              see results
            </button>
	)
}



const Home = () => {
return (
	<div>
	<Form>	
	<form id="form1">
         <h2>Find Parts For Your Vehicle</h2>
         <formOptions>
            <select id="year">
               <option value="0">year</option>
               <option value="2022">2022</option>
               <option value="2021">2021</option>
               <option value="2020">2020</option>
               <option value="2019">2019</option>
               <option value="2018">2018</option>
               <option value="2017">2017</option>
               <option value="2016">2016</option>
               <option value="2015">2015</option>
            </select>
            
            <select id="make">
               <option value="0">make</option>
               <option value="Ford">Ford</option>
               <option value="Jeep">Jeep</option>
               <option value="Toyota">Toyota</option>
               <option value="Lexus">Lexus</option>
               <option value="Chevrolet">Chevrolet</option>
               <option value="GMC">GMC</option>
               <option value="Ram">Ram</option>
            </select>
            <select id="model">
               <option value="0">model</option>
               <option value="F-150">F-150</option>
               <option value="Gladiator">Gladiator</option>
               <option value="Wrangler">Wrangler</option>
               <option value="Tacoma">Tacoma</option>
               <option value="Bronco">Bronco</option>
               <option value="Suburban">Suburban</option>
               <option value="1500">1500</option>
               <option value="4Runner">4Runner</option>
               <option value="GX460">GX460</option>
               <option value="Silverado">Silverado</option>
               <option value="Sierra">Sierra</option>
            </select>
            <select id="part">
               <option value="All Part">part</option>
               <option value="Bumper">Bumper</option>
               <option value="Tire">Tire</option>
               <option value="Turning Kit">Turning Kit</option>
               <option value="All Part">All Parts</option>
            </select>
         </formOptions>
         <ResultsPage/>
         
      </form>
	  </Form>
      <Deals>
         <a>Shop Deals For Your Vehicle</a>
      </Deals>
      <FeatDeals>
         <deal1>
            <img id="deal1img"src={tire}></img>
            Mickey Thompson Baja Legend EXP Tires 
         </deal1>
         <deal2>
            <img id="deal2img" src={bumper} ></img>
            Fab Fours Matrix Series Front Bumper with Pre-Runner Guard (Black) 
         </deal2>
         <deal3>
            <img id="deal3img" src={levelingKit}></img>
            Pro Comp 2.5 Inch Leveling Lift Kit
         </deal3>
      </FeatDeals>
      <Deals>
         <a>Shop New Products</a>
      </Deals>
	</div>
);
};

export default Home;
