import React from 'react';
import './City.css';

const City = () => {
    return (
        <div className="city">
            <h1>Город Сочи</h1>
            <h3>Информация: расположен на северо-восточном побережье Чёрного моря Черноморское побережье России в Краснодарском крае, на расстоянии 1615 км от Москвы. Административный центр муниципального образования город-курорт Сочи</h3>
            <h3>Страна: Россия</h3>
            <h3>Год основания: 1838 год</h3>
            <div className='photo'>
                <h3>Фото: </h3>
                <img className='photo_city' alt="sochi" src="https://ekskursii-v-sochi.ru/wp-content/uploads/2016/09/disney01.jpg" />
                <img className='photo_city' alt="sochi" src=" https://media.istockphoto.com/id/1353057020/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BE%D1%87%D0%B8-%D1%81-%D0%B0%D1%8D%D1%80%D0%BE%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%BD%D0%B8%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BE%D0%B1%D0%B7%D0%BE%D1%80%D0%B0-%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=jRZt9MbNGPF5V59PFS6K0dhI6RZ5oVTXhnUYSei3X6s=" />
                <img className='photo_city' alt="sochi" src="https://s0.rbk.ru/v6_top_pics/media/img/9/06/346813380905069.jpg" />
                <img className='photo_city' alt="sochi" src="https://cdn.forbes.ru/forbes-static/new/2023/08/1-651A7732-64cb86d932e07.jpg" />
            </div>
        </div>
    )
}

export default City;