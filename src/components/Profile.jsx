import React from "react";
import ReactDOM from 'react-dom';

function App() {
<div className="profile">
    <h1>Обо мне</h1>
    <div className="data"></div>
        <h2>Имя: Кирилл</h2>
        <h2>Ваш ник: ovaqvado</h2>
        <h2>Место обучения: Аккадемия TOP, универ, аккадемия Yandex</h2>
        <h2>Номер телефона: +7-918-999-22-02 <span>По номеру не звонить он не работает</span></h2>
        <h2>Почта: salamalekym@gmail.com<span>Почта тоже не настоящая</span></h2>
    </div>
}


ReactDOM.render(<App />, document.getElementById('root'));



