import{useLoaderData} from 'react-router-dom';

const Checkout = () => {
    const service=useLoaderData()
    const{title,price}=service;
    return (
        <div>
            <h1>Checkout service:{title}</h1>
        </div>
    );
};

export default Checkout;