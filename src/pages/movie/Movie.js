import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Movie.css";
import axios from "axios";

const Movie = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState();
	const [credits, setCredit] = useState();

	useEffect(() => {
		axios(
			`https://api.themoviedb.org/3/movie/${id}?api_key=f42c53f4f985e0480ab807c5d464b681&language=ru-RU`
		).then(({ data }) => {
			setMovie(data);
			console.log("setCredit", data);
		});
		axios(
			`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f42c53f4f985e0480ab807c5d464b681&language=ru-RU`
		).then(({ data }) => {
			setCredit(data);
			console.log("setMovie", data);
		});
	}, [id]);

	return (
		<div>
			<div>
				<div className=" movie w-[852px] h-[500px] rounded-5 blur-sm relative left-3 pl-5"
				style={{
					background: `url( ${`https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`}) no-repeat center/cover`,
				}}>
				</div>
				<div className=" top-[130px] flex absolute">
					<img
						className=" ml-6 rounded-8 w-[230px]"
						src={`https://image.tmdb.org/t/p/w1280/${movie?.poster_path}`}
						alt=""
					/>

					<div>
						<h2 className=" font-mono  text-white ml-[40px]">{movie?.title}</h2>
						<p className="font-mono  text-white ml-[40px]">
							Жанр: {movie?.genres[0]?.name} {movie?.genres[1]?.name}
							{movie?.genres[2]?.name} {movie?.genres[3]?.name}
							{movie?.genres[4]?.name}
						</p>
						<p className="font-serif text-white ml-[40px]">{movie?.overview}</p>
						<p className="font-mono text-white ml-[40px]">
							Просмотрено: {movie?.popularity}
						</p>
						<button className=" font-mono py-2 w-[200px] ml-[40px] bg-[#791679] text-[white] rounded-lg hover:text-[#807c7c] duration-500">
							Watch Trailer
						</button>
					</div>
				</div>
			</div>
			<div className="mt-5">
				<h4 className="ml-20 font-serif">В главных ролях</h4>
				<div className="flex gap-2 max-w-[1000px] overflow-x-scroll">
					{credits?.cast?.map((credit, index) => credit?.profile_path && (
						<div className="mt-2 border-1 border-solid rounded-lg  min-w-[150px] bg-[#791679] ml-4 ">
							<img
								className=" w-[150px]"
								src={`https://image.tmdb.org/t/p/w1280/${credit?.profile_path}`}
								alt=""
							/>
							<h5 className="font-mono text-center mt-2  text-[#fff]">{credit?.name}</h5>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Movie;
