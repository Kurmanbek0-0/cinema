import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/ui/card/Card";
import Banner from "../../components/ui/banner/Banner";
import Pagination from "../../components/ui/pagination/Pagination";
import Spiner from "../../img/Spiner";
import TvShow from "../../components/tvShow/TvShow";

export default function Home() {
	const [movies, setMovies] = useState([]);
	const [select, setSelect] = useState(0);
	const [banner, setBanner] = useState({});
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		getPopularMovies();
	}, [page]);

	function getPopularMovies() {
		const randomNumber = Math.floor(Math.random() * 50);

		axios
			.get(
				`https://api.themoviedb.org/3/movie/now_playing?api_key=f42c53f4f985e0480ab807c5d464b681&language=ru-RU&page=${page}`
			)
			.then(({ data }) => {
				setMovies(data);
				setBanner(data.results[randomNumber]);
				setLoading(false);
				console.log(data);
			});
	}

	const tab = ["Movie", "Tv Show", "Anime"];

	function selectTabs(index) {
		setSelect(index);
	}

	return (
		<div>
			<div className="flex items-center gap-4 ml-10 mt-11">
				{tab.map((tab, index) => (
					<span
						className=" font-bold  font-sans Montserrat Alternates cursor-pointer  px-3 rounded-lg duration-500 "
						style={{
							color: select === index ? "#fff" : "#494949",
							background: select === index ? "#791679" : "none",
						}}
						onClick={() => selectTabs(index)}
					>
						{tab}
					</span>
				))}
			</div>
				<>
					{loading ? (
						<Spiner />
					) : (
						<>
							<div>
								<Banner movie={banner} />
							</div>
							<div className="flex flex-wrap gap-3 ml-10 mt-3">
								{movies?.results?.map((movie) => (
									<Card movie={movie} />
								))}
							</div>
						</>
					)}
					<Pagination
						currentPage={page}
						allPages={movies?.total_pages}
						onChangePage={(page) => setPage(page)}
					/>
				</>
			{selectTabs === 1 && <TvShow />}
		</div>
	);
}
