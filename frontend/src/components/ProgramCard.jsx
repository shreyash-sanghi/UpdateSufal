import { FiArrowUpRight } from 'react-icons/fi';
import Button from './Button';
import { Link } from 'react-router-dom';

const Card = ({ title, description, icon, color, href }) => {
	return (
		<div className="flex flex-col items-center justify-center border space-y-4 px-6 py-4  rounded-2xl cursor-pointer hover:shadow-xl  transition-shadow duration-200 ">
			<div
				className="w-fit flex items-center  justify-center rounded-full p-2"
				style={{ backgroundColor: color }}
			>
				<span>{icon}</span>
			</div>
			<div className="text-base md:text-xl font-bold text-center">{title}</div>
			
			
		</div>
	);
};

export default Card;
