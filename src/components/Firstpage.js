import React, { useRef} from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Firstpage=()=>{
 return(
    <BrowserRouter basename="/athena">
        <div className="firstpage">

        </div>
        <Route>
            
        </Route>
    </BrowserRouter>
 );
};

export default Firstpage;

