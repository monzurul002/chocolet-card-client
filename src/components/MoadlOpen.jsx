import { useEffect, useState } from "react";

const MoadlOpen = ({ id }) => {

    // const [select, setSelect] = useState("")
    const [coffe, setCoffe] = useState({})
    // const { _id, name, country, value } = cof;


    useEffect(() => {
        fetch(`http://localhost:5000/coffes/${id}`)
            .then(res => res.json())
            .then(data => setCoffe(data))
    }, [])

    console.log(coffe);
    // const getSelectValue = (e) => {
    //     return setSelect(e.target.value)
    // }
    // const updateInfo = (e) => {
    //     e.preventDefault();

    //     const form = e.target;
    //     const newName = form.name.value;
    //     const newCountry = form.country.value;

    //     const updateData = {
    //         newName,
    //         newCountry,
    //         select
    //     };

    //     fetch(`http://localhost:5000/coffes/${_id}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(updateData)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })

    // }
    return (
        <div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-5/12 max-w-5xl">
                    <h3 className="font-bold text-xl text-center">Update Coffe Data</h3>
                    <form  >
                        {/* <form onSubmit={updateInfo} > */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Country</span>
                            </label>
                            <input type="text" name="country" defaultValue={country} placeholder="Enter your country" className="input input-bordered w-full" />
                        </div> */}
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Value</span>
                            </label>
                            <input type="text" name="value" defaultValue={value} placeholder="Value" className="input input-bordered w-full" />
                        </div> */}

                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select onChange={getSelectValue} className="select select-bordered w-full">
                                <option disabled defaultValue>Select Category</option>
                                <option value="premium">Premium</option>
                                <option value='medium'>Medium</option>
                                <option value='low'>Low</option>
                            </select>
                        </div> */}



                        {/* if there is a button, it will close the modal */}
                        <button className="btn">Submit</button>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>

            </dialog>
        </div>
    );
};

export default MoadlOpen;