import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";

export default function Rightbar() {
	return (
		<div className=" border-solid border-l-2 border-blue-[#C4CCD4] h-[100%] w-[280px] fixed right-[0]">
			<div className="search mt-9 ml-9 flex items-center">
				<MDBIcon fas icon="search" className="absolute z-10 cursor-pointer pl-3" style={{color: "#791679"}}/>
				<input
					type="text"
					placeholder="Search..."
					className="border-2 pl-8 pr-3 rounded-3xl w-55 h-10 outline-none  text-sm relative border-[#791679]"
				/>
			</div>
			<div className="flex items-center mt-10 ml-9 ">
				<h6 className="text-semibold ">Popular Movies</h6>
				<p className="ml-20 text-3xl ">··</p>
			</div>
		</div>
	);
}
