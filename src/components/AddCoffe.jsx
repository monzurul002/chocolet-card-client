import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const AddCoffe = () => {
    const [value, setValue] = useState('')
    const [image, setImage] = useState([])

    console.log(image);
    const onImageChange = (e) => {
        setImage([...e.target.files])
    }

    const handleAddCoffe = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const country = form.country.value
        const cofeeInfo = { name, country, value }

        if (name.length <= 0 || country.length <= 0 || cofeeInfo.length <= 0) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill up carefully',

            })
        }


        fetch("http://localhost:5000/newCoffe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cofeeInfo)
        })
            .then(res => res.json())
            .then(data => {
                form.reset();
                setValue(" ")
                if (data.insertedId) {
                    return Swal.fire({
                        icon: 'success',

                        text: 'New Coffe has been added!',

                    })
                }

                form.reset()
            })



    }
    const getSelectValue = (e) => {
        return setValue(e.target.value)
    }



    return (
        <div className="mx-20 p-5 bg-slate-50 ">
            <h2 className='font-bold py-2 mt-10 md:w-96 lg w-11/12 mx-auto text-center  text-white md:text-2xl text-xl bg-gradient-to-r from-amber-500 via-white-500 to-red-950  text-center'>Chocolate Management  System</h2>

            <div>

                <Link to="/"> <button className='mt-12 md:ms-24 ms-8 flex bg-yellow-700 text-white justify-center items-center mb-4 p-2  mt-3 bg-gray-200' > <AiOutlineArrowLeft></AiOutlineArrowLeft>   All Chocolate </button></Link>
                <div className="flex justify-center w-full">
                    <div className="w-full bg-slate-200 p-6 max-w-screen-sm">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold">New Chocolate</h2>
                            <p>Use the form to add a new item.</p>
                        </div>
                        <form onSubmit={handleAddCoffe} className="w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Type here" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Country</span>
                                </label>
                                <input type="text" name="country" placeholder="Enter your country" className="input input-bordered w-full" />
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Upload</span>
                                </label>
                                <input onChange={onImageChange} type="file" accept="image/*" className="file-input file-input-bordered file-input-info " />
                            </div>

                            <button className="btn mt-2 text-white hover:bg-purple-500 btn-active bg-amber-900 w-full">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddCoffe;