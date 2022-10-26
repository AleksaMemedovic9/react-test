//Cilj ove komponente je da prikaze carousel funckionalnost, a takodje da dovuce podatke iz apija i prikaze ih 
//za carousel je koriscen npm install react-elastic-carousel paket
import Carousel from 'react-elastic-carousel';
import React from 'react';
import Card from './Card';
import fetchData from '../Api/Api';
const Cards = () => {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        fetchData().then(res => {
            setData(res.data.data);
        })
    }, []);
    
    return (
        <Carousel itemsToScroll={2} itemsToShow={2}>
            {data.map(item => <Card item={item}/>)}
        </Carousel>
    );

};
export default Cards;