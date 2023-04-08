import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";

export default function Pagination({
	currentPage = 1,
	allPages,
	onChangePage,
}) {
	const pages = [];

	for (let i = 1; i < allPages; i++) {
		pages.push(i);
	}

	function changePrevPage() {
		onChangePage(currentPage - 1);
	}

	function changeNextPage() {
		onChangePage(currentPage + 1);
	}

	function selectedPage(page) {
		onChangePage(page + 1);
	}

	return (
		<div className="py-3 ml-10">
			<button
				className=" mr-3 p-2 px-3 ml-1 border-2 rounded-lg bg-[#791679] text-[#fff] disabled:cursor-no-drop  hover:text-[#807c7c] duration-500"
				disabled={currentPage <= 1}
				onClick={changePrevPage}
			>
                <MDBIcon fas icon="angle-double-left" />
			</button>
			{pages.map((page, index) => (
				<button
					className="py-2 mt-2 px-3 mx-1 border-1 border-solid border-[#791679] rounded-lg"
					style={{
						background: index + 1 === currentPage ? "#791679" : "none",
						color: index + 1 === currentPage ? "#fff" : "black",
					}}
					onClick={() => selectedPage(index)}
				>
					{page}
				</button>
			))}
			<button
				className=" ml-2 p-2 px-3 border-2 rounded-lg bg-[#791679] text-[#fff] disabled:cursor-no-drop hover:text-[#807c7c] duration-500"
				onClick={changeNextPage}
				disabled={currentPage === allPages - 1}
			>
				<MDBIcon fas icon="angle-double-right" />
			</button>
		</div>
	);
}
