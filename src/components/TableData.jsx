
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom"
import Swal from "sweetalert2";


const TableData = ({ coffe, setAllCoffes, allCoffes }) => {

    const { _id, name, country, value } = coffe;
    //delete item
    const deleteItem = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffes/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {

                            const remaining = allCoffes.filter(coffe => coffe._id !== id)
                            setAllCoffes(remaining)

                            return Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <>
            {/* row 1 */}
            <tr className="bg-slate-100 ">

                <td className="p-2">
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img width="50px" height="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44ik90uRmt8anQ65pj5HTQoaJIdM8_1t5ESzK6PM&s" alt="Avatar " />
                            </div>
                        </div>

                    </div>
                </td>
                <td>
                    <div className="font-bold">{country}</div>
                </td>

                <td className="font-bold">
                    {name}
                </td>
                <td className="font-bold">
                    {value}
                </td>
                <td className="font-bold">
                    <div className="flex ">
                        <Link to={`/coffes/${_id}`}> < AiOutlineEdit className="text-xl me-2" /></Link>
                        <AiFillDelete onClick={() => deleteItem(_id)} className="text-red-600 text-xl"></AiFillDelete>
                    </div>
                </td>

            </tr>




        </>


    );
};

export default TableData;