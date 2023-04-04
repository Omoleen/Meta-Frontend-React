import {ClickMeOut} from "./ClickMeOut";
import {useState} from "react";
import axios from "axios";

const Clickme = () => {
    const [number, setNumber] = useState()
    const clickhandler = () => {
        setNumber(Math.floor(Math.random() * 10) + 1)
    }
    const headers = {
        "Authorization" : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgxMDIzNzAzLCJpYXQiOjE2ODA1OTE3MDMsImp0aSI6IjJkODhiYjYwMjJlNTQ3MTE4ZDgzYmY0NmEzNTM3MWViIiwidXNlcl9pZCI6MX0.Hx6bejX_Gsg2ZxPen2GdTnX9ARoDVInBP7J3iUXuack',
        "content-type": 'multipart/form-data'
    }
    axios({
        url: 'http://127.0.0.1:8000/api/pdf/technical/?project_name=project1&apk=true&id=51', //your url
        headers: headers,
        method: 'GET',
        responseType: 'blob', // important
    }).then((response) => {
        // create file link in browser's memory
        const href = URL.createObjectURL(response.data);

        // create "a" HTML element with href to file & click
        const link = document.createElement('a');
        link.href = href;
        link.setAttribute('download', 'file.pdf'); //or any other extension
        document.body.appendChild(link);
        link.click();


        // clean up "a" element & remove ObjectURL
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
    });
    return (
        <>
            <ClickMeOut number={number} />
            <button onClick={clickhandler}>Generate a number</button>
        </>
    )
}

export {Clickme}