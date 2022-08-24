import CardItem from "./CardItem";
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check Out These epic destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={require('../assets/images/img-9.jpg')}
                            text='Explore the hidden waterfall deep inside the Amazon Junble'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem 
                            src={require('../assets/images/img-3.jpg')}
                            text='Explore the hidden waterfall deep inside the Amazon Junble'
                            label='Adventure'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;