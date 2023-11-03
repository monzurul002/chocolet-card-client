import { useState } from "react";
import { useLoaderData } from 'react-router-dom'
import Swal from "sweetalert2";
const UpdateInfo = () => {
    const [select, setSelect] = useState('Low')
    const coffe = useLoaderData();
    const { _id, name, country, value } = coffe;

    const updateInfo = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const country = form.country.value;

        const updateData = {
            name,
            country,
            select
        };
        console.log(updateData);

        fetch(`http://localhost:5000/coffes/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    return Swal.fire({
                        icon: 'success',
                        text: 'Data has been updated'
                    })
                }
            })

    }


    const getSelectValue = (e) => {
        return setSelect(e.target.value)
    }

    return (
        <div>
            <div className='w-6/12 mx-auto  p-5 '>
                <h3 className="font-bold text-xl text-center">Update Coffe Data</h3>

                <form onSubmit={updateInfo} >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Country</span>
                        </label>
                        <input type="text" name="country" defaultValue={country} placeholder="Enter your country" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Value</span>
                        </label>
                        <input type="text" name="value" defaultValue={value} placeholder="Value" className="input input-bordered w-full" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select onChange={getSelectValue} className="select select-bordered w-full">
                            <option disabled defaultValue>Select Category</option>
                            <option value="premium">Premium</option>
                            <option value='medium'>Medium</option>
                            <option value='low'>Low</option>
                        </select>
                    </div>



                    {/* if there is a button, it will close the modal */}
                    <button className="btn bg-amber-900 text-white hover:bg-purple-500 w-full">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default UpdateInfo;