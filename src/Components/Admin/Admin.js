import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './Admin.css';

const Admin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors);
    const [imageURL, setImageURL] = useState(null);
    
    const onSubmit = data => {
        const eData = {
            name: data.foodname,
            price: data.price,
            imageURL: imageURL
            
        };
        const url = `http://localhost:5000/addFood`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eData)
        })
        .then(res => console.log('server res', res ))
    };


    const handleImgUplode = e => {
        console.log(e.target.files[0]);
        const imgData = new FormData();
        imgData.set('key', '3d85c8074684cd8a39a759840d9fba44');
        imgData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imgData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div>
           <h1 className="title">Add Foods on Menu </h1>
    <form className="formSubmit" onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
        <input type="text" placeholder="foodname" {...register("foodname")} />
     <br/>
     <br/>
      <input type="number" placeholder="price" {...register("price")} />
    <br/>
    <br/>
      <input className="fileField" type="file" onChange={handleImgUplode} />
    <br/>
    <br/>
      <input type="submit" />
        </fieldset>
      
    </form>
        </div>
    );
};

export default Admin;