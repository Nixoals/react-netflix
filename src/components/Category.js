import Films from './Films';

const Category = (props) => {
	return (
		<>
			<div className="container">
				<h1 className={'category'}>{props.data.category}</h1>
				<div className="film-container">
					{props.data.images.map((element, index) => {
						return (
							<div>
								<Films key={index} image={element}></Films>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Category;
