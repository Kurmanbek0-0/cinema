import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../ui/card/Card";

const TvShow = () => {
	const [movie, setMovie] = useState();

	useEffect(() => {
		axios(
			"https://api.themoviedb.org/3/tv/popular?api_key=f42c53f4f985e0480ab807c5d464b681&language=en-EN&page=1"
		).tnen(({data}) => {
            setMovie(data)
        });
	}, []);

	return <div>
        {movie?.results?.map((item) => (
            <>
                <Card movie={item} />
            </>
        ))}

    </div>;
};

export default TvShow;
