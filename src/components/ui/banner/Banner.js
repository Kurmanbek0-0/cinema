import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"

export default function Banner({ movie }) {
	const navigate = useNavigate()
	function clickButton() {
		navigate(`movie-details/${movie.id}}`)
	}
	return (
		<div
			className="mt-4 ml-10 mb-5 w-[789px] h-[350px] bg-black rounded-2xl flex items-end   relative"
			style={{
				background: `url(${`https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`}) no-repeat center/cover`,
			}}
		>
			<div className="mb-3 ml-10 mr-5">
				<h4 className="text-[#fff] font-bold">{movie?.title}</h4>
				<p className="font-semibold text-[#fff]">{movie?.overview?.slice(0, 150)}...</p>
				<div className="flex items-center">
					<button className=" font-mono py-2 px-5 bg-[#791679] text-[white] rounded-lg hover:text-[#807c7c] duration-500" onClick={clickButton}>
						Watch Now
					</button>
					<div className=" ml-3 w-[40px] h-[40px] bg-[#807c7c] rounded-md cursor-pointer hover:bg-[#791679] duration-500">
						<Link to="/" elements="/">
							<MDBIcon fas icon="plus" className="text-white ml-3 mt-2.5"/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
