import React from 'react';
import HighSchoolCSS from './HighSchool.module.css';


export default function HighSchool() {
    return (
        <div className="{HighSchoolCSS.HighSchool}">
            <hr />
            <h1>Ví dụ về Higher Order Component- HOC</h1>
            <p>HOC- Higher Order Component, ý chỉ các component bọc ngoài component khác, nên có độ ưu tiên cao hơn </p>
            <div className="{HighSchoolCSS.HighSchool}">
                <p>HOC bản thân nó không chứa bất kì logic nào (it's doesn't contain it own logic), </p>
                <p>cũng không chứa định kiểu (it's own styling) </p>
                <p>cũng không thêm bất kì cấu trúc nào vào JSX code hay DOM thật để được render ra</p>
                <p>nó chỉ đơn giản là 1 cái bọc (wrapper)</p>
            </div>
            <button className="{HighSchoolCSS.button}">CLICK</button>
        </div>

    )
}
