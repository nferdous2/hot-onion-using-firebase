import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
// import Fooditems from '../FoodItems/FoodItems';
import Items from '../Items/Items'
const Breakfast = () => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('./breakfast.JSON')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return (
        <div>
            {/* <Fooditems /> */}
            <Container className="mt-3">
                <Row xs={1} md={3} className="g-4">
                    {
                        item.map(singleItem => <Items item={singleItem}>

                        </Items>)
                    }
                </Row>
            </Container>

        </div >
    );
};

export default Breakfast;