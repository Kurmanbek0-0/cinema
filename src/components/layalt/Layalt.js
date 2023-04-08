import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import Rightbar from "../left&right/Rightbar";
import Leftbar from "../left&right/Leftbar";


export default function Layalt({ children }) {
	return (
		<div className="flex">
		<Leftbar />
		<div className="ml-[210px] w-[64%] h-[100%] mr-[310px] ">{children}</div>
		<Rightbar />
	</div>
	);
}
