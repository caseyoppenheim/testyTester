import React from "react";
import { RefineHead, RefineResults, ChangeVeh, Silly, ResultHeader, ResultsPage, Column1, Column2, ResultGrid, GridEl } from "./resultStyle";
import { useNavigate } from "react-router-dom";

function ResultGridFun(){
    return(
        <ResultGrid>
        <GridEl>
        <div class="grid-item">1</div>
        </GridEl>

        <GridEl>
        <div class="grid-item">1</div>
        </GridEl>

        <GridEl>
        <div class="grid-item">1</div>
        </GridEl>
        <GridEl>
        <div class="grid-item">1</div>
        </GridEl>
        <GridEl>
        <div class="grid-item">1</div>
        </GridEl>
        </ResultGrid>
    )
}

function ChangeVehFun(){
    let nav = useNavigate();
	const routeChange = () =>{
		let path = '/';
		nav(path);

	}

	return (
		<button color="primary" className="px-4"onClick={routeChange}
              >
              Change Vehicle
            </button>
	)
   
}

const Results = () => {
return (
	<ResultsPage>
        <Column1>
            <Silly> 
                <img src="./currveh.jfif"  height="60px"/>
                Current Vehicle: 
                {/* <script> 
                    document.write(localStorage["year"] + " " + localStorage["make"] + " " + localStorage["model"]);
                </script> */}
            </Silly>
            
            <ChangeVehFun />
                
            <RefineHead> Refine By:</RefineHead>
            <RefineResults>
                <select id="Brand">
                    <option value="brand ex">Put brand examples here</option>
                </select>
                <select id="Fitment">
                    <option value="cars">List all cars</option>
                </select>
                <select id="ProductCategory">
                    <option value="bumper">Bumper</option>
                    <option value="none">List rest of products</option>
                </select>
                <button id="refine" onclick="refine()">Refine</button>
                {/* <script>
                    function refine(){
                        //this should update the results page with the new 
                        alert("this should be reloading the result page hehe");
                    }
                </script> */}
            </RefineResults>
             

        </Column1>
        <Column2>
            <ResultHeader>
                HELLOOOOOOO
                {/* <script>
                    document.write("Showing " + localStorage["part"] + "s for " + localStorage["year"] + " " + localStorage["make"] + " " + localStorage["model"]);
                </script> */}
        
            </ResultHeader>
            
            <div id="grid-container" class="grid">
                <ResultGridFun />
            </div>
            
            <div id="grid-container" class="grid">
                {/* <script type="text/javascript">
                    //document.getElementsByClassName("grid-container").innerHTML="<div class=\"grid-item\"></div>";
                    for(let i =0; i < localStorage["results"]; i++){
                        document.getElementById("grid-container").innerHTML+='<div class="grid-item">' + productDet() + '</div>';
                    }

                    function productDet(){
                        if(localStorage["part"] == "Tire"){
                            return '<img src="tire.jpg" height="250px" ></img>'
                        }
                        if(localStorage["part"] == "Bumper"){
                            return '<img src="tempBumper.jpg" height="250px"  ></img>'
                        }
                        if(localStorage["part"] == "Turning Kit"){
                            return '<img src="levelingKit.jpg" height="250px" ></img>'
                        }
                        //do this for the rest 

                        
                    }
                </script> */}
            </div>
        </Column2>
	</ResultsPage>
);
};

export default Results;