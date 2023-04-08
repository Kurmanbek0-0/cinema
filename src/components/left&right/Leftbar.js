import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import "./Leftbar.css"

export default function Leftbar() {
	return (
		<div className="border-solid border-r-2 border-blue-[#C4CCD4] h-[100%] fixed left-[0]">
			<div
				id="navbars"
				className="font-sans fixed overflow-y-scroll max-h-[100%] w-[220px] Montserrat Alternates"
			>
				<div className="navbars my-8 mx-8 ">
					<div className="navbars-txt flex items-center  text-[#fff] bg-[#791679]  gap-2 duration-500 rounded-xl">
							<MDBIcon fas icon="eye" className="ml-5"/>
							<h1 className="text text-base mt-2 ml-1">titanTube</h1>
					</div>
					<p className="menu uppercase text-sm mt-6 font-medium">menu</p>
					<div className="navbars-nav">
						<NavLink
							to="/"
							className="cursor-pointer text-[#494949] hover:text-[#791679]  flex items-center gap-2 duration-500"
						>
							<MDBIcon fas icon="home" />
							<h6 className="mt-2 ml-2 text-sm  ">Home</h6>
						</NavLink>
					</div>
					<div className="navbars-nav  mt-2">
						<NavLink
							to="/community"
							className="cursor-pointer text-[#494949] hover:text-[#791679] flex items-center gap-2 duration-500 "
						>
							<MDBIcon fas icon="shield-alt" />
							<h6 className="mt-2 ml-2 text-sm">Community</h6>
						</NavLink>
					</div>
					<div className="navbars-nav mt-2">
						<NavLink
							to="/discover"
							className="cursor-pointer text-[#494949] hover:text-[#791679] flex items-center gap-2 duration-500 "
						>
							<MDBIcon fas icon="compass" />
							<h6 className="mt-2 ml-2 text-sm">Discover</h6>
						</NavLink>
					</div>
					<div className="navbars-nav mt-2">
						<NavLink
							to="/awards"
							className="cursor-pointer  text-[#494949] hover:text-[#791679] flex items-center gap-2  duration-500 "
						>
							<MDBIcon fas icon="award" />
							<h6 className="mt-2 ml-3 text-sm">Awards</h6>
						</NavLink>
					</div>
					<div className="navbars-nav mt-2">
						<NavLink
							to="/celebs"
							className="cursor-pointer  text-[#494949] hover:text-[#791679] flex items-center gap-2 duration-500 "
						>
							<MDBIcon fas icon="user" />
							<h6 className="mt-2 ml-2 text-sm">Celebs</h6>
						</NavLink>
					</div>
					<p className="lib uppercase text-sm mt-8 font-medium">library</p>
					<div className="navbars-nav mt-2">
						<NavLink
							to="/recent"
							className="cursor-pointer  text-[#494949] hover:text-[#791679] flex items-center gap-2 duration-500 "
						>
							<MDBIcon fas icon="clock" />
							<h6 className="mt-2 ml-2 text-sm">Recent</h6>
						</NavLink>
					</div>
					<div className="navbars-nav mt-2">
						<NavLink
							to="/top-rated"
							className="cursor-pointer  text-[#494949] hover:text-[#791679] flex items-center gap-2 duration-500 "
						>
							<MDBIcon fas icon="star" />
							<h6 className="mt-2 ml-2 text-sm">Top Rated</h6>
						</NavLink>
					</div>
					<div className="navbars-nav mt-2">
						<NavLink
							to="/downloaded"
							className="cursor-pointer  text-[#494949] hover:text-[#791679] flex items-center gap-2 duration-500 "
						>
							<MDBIcon fas icon="download" />
							<h6 className="mt-2 ml-2 text-sm">Downloaded</h6>
						</NavLink>
					</div>
					<p className="cat uppercase text-sm mt-8 font-medium">category</p>
					<div className="navbars-nav mt-2">
						<NavLink
							to="/tv-show"
							className="cursor-pointer  text-[#494949] hover:text-[#791679] flex items-center gap-2 duration-500 "
						>
							<MDBIcon fas icon="tv" />
							<h6 className="mt-2 ml-2 text-sm">TV - Show</h6>
						</NavLink>
					</div>
					<div className="navbars-nav mt-2">
						<NavLink
							to="/movie"
							className="cursor-pointer  text-[#494949] hover:text-[#791679] flex items-center gap-2 duration-500 "
						>
							<MDBIcon fas icon="video" />
							<h6 className="mt-2 ml-2 text-sm">Movie</h6>
						</NavLink>
					</div>
					<div className="navbars-nav mt-2">
						<NavLink
							to="/anime"
							className="cursor-pointer  text-[#494949] hover:text-[#791679] flex items-center gap-2 duration-500 "
						>
							<MDBIcon fas icon="certificate" />
							<h6 className="mt-2 ml-2 text-sm">Anime</h6>
						</NavLink>
					</div>
					<p className="cat uppercase text-sm mt-8 font-medium">general</p>
					<div className="navbars-nav  mt-2">
						<NavLink
							to="/settings"
							className="cursor-pointer text-[#494949] hover:text-[#791679] flex items-center gap-2 duration-500 "
						>
							<MDBIcon fas icon="cog" />
							<h6 className="mt-2 ml-2 text-sm">Settings</h6>
						</NavLink>
					</div>
					<div className="navbars-nav mt-2">
						<NavLink
							to="/log-out"
							className="cursor-pointer text-[#494949] hover:text-[#791679] flex items-center gap-2 duration-500 border-r-[#791679] "
						>
							<MDBIcon fas icon="sign-out-alt" />
							<h6 className="mt-2 ml-2 text-sm">Log Out</h6>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}
