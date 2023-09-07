import useIndependentPro from "../../hooks/useIndependentPro";
import { B3, H5 } from "../atoms/Typography";

interface Props {
	className?: string;
}

const Map: React.FC<Props> = ({ className }) => {
	const {
		businessAddress: { addressLine1, addressLine2, city, state, zipCode },
	} = useIndependentPro();
	return (
		<figure className={className}>
			<img width={300} height={300} />

			<figcaption>
				<H5>Location</H5>
				<B3>{addressLine1}</B3>
				{addressLine2 && <B3>{addressLine2}</B3>}
				<B3>
					{city}, {state} {zipCode}
				</B3>
			</figcaption>
		</figure>
	);
};

export default Map;
