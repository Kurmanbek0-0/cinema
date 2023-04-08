import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

export default function Card({ movie }) {
	const navigate = useNavigate()
	function clickButton() {
		navigate(`movie-details/${movie.id}}`)
	}
	return (
		<div
			className=" w-[185px] h-[278px] bg-black  rounded-lg flex flex-col justify-end relative"
			style={{
				background: `url(${`https://image.tmdb.org/t/p/w1280/${movie?.poster_path}`}) no-repeat center/contain`,
			}}
		>
			<div className=" flex  justify-end mt-3  absolute top-0 right-2">
				<div className="w-[35px] h-[35px] bg-[#807c7c] rounded-md cursor-pointer hover:bg-[#791679] duration-500">
					<Link to="/" elements="/">
						<MDBIcon fas icon="plus" className="text-white ml-2.5 mt-2.5" />
					</Link>
				</div>
			</div>
			
			{/* <h4>{movie.title}</h4> */}
			<div className="p-2 flex items-end">
				<div className="flex items-end w-full">
					<button className=" font-mono py-2 w-full bg-[#791679] text-[white] rounded-lg hover:text-[#807c7c] duration-500" onClick={clickButton}>
						Watch Now
					</button>
				</div>
			</div>
		</div>
	);
}
