import React, { useState } from "react";
// import { AiOutlineEnter } from "react-icons/ai";
// import { RiDeleteBin6Line } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

const TodoApp = () => {
  let [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
  });

  // declaring state for todo 
  const [todo, setTodo] = useState([])

  // binding inputs
  let handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  // handle submit
  let handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uuidv4(),
      todoItem: data,
    };

    setTodo([...todo, newTodo]);

    setData({
      ...data,
      firstName: "",
      lastName: "",
      email: "",
      age: "",
    });
  };

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(todo)}</pre> */}
      <section className="mx-5 rounded-lg bg-black mt-10 overflow-hidden md:mx-96">
        {/* header */}
        <div className="flex justify-center items-center h-14 bg-black">
          <p className="text-2xl uppercase font-bold text-white  ">
            populate table app
          </p>
        </div>

        {/* form */}
        <div className="">
          <form onSubmit={handleSubmit}>
            <table className="border-separate w-full border-2 border-gray-500 ">
              <tbody>
                <tr>
                  <td className="border border-gray-600 text-white text-center">
                    First Name
                  </td>
                  <td className="border border-gray-600 ">
                    <input
                      name="firstName"
                      value={data.firstName}
                      onChange={handleChange}
                      type="text"
                      placeholder="First Name"
                      className="w-full pl-2 border-2 col-span-2 border-gray-900"
                    />
                  </td>
                </tr>

                {/* lastName */}
                <tr>
                  <td className="border border-gray-600 text-white text-center">
                    Last Name
                  </td>
                  <td className="border border-gray-600">
                    <input
                      name="lastName"
                      value={data.lastName}
                      onChange={handleChange}
                      type="text"
                      placeholder="Last Name"
                      className="w-full pl-2 border-2 col-span-2 border-gray-900"
                    />
                  </td>
                </tr>

                {/* email */}
                <tr>
                  <td className="border border-gray-600 text-white text-center">
                    Email
                  </td>
                  <td className="border border-gray-600">
                    <input
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Email"
                      className="w-full pl-2 border-2 col-span-2 border-gray-900"
                    />
                  </td>
                </tr>

                {/* age */}
                <tr>
                  <td className="border border-gray-600 text-white text-center">
                    Age
                  </td>
                  <td className="border border-gray-600">
                    <input
                      name="age"
                      value={data.age}
                      onChange={handleChange}
                      type="number"
                      placeholder="Age"
                      className="w-full pl-2 border-2 col-span-2 border-gray-900"
                    />
                  </td>
                </tr>

                {/* button */}
                <tr>
                  <td colspan="2">
                    <button type='submit' className=" text-center bg-white w-full font-bold text-xl tracking-wide text-gray-600">
                      Add
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </section>

      {/* table 2 */}
      <section className="mx-5 lg:mx-20">
        <table className="border-separate border-2 w-full border-gray-500 bg-black mt-20 ">
          <thead>
            <tr>
            <th className="border border-gray-600 text-white text-center"> First Name </th>
            <th className="border border-gray-600 text-white text-center"> Last Name </th>
            <th className="border border-gray-600 text-white text-center"> Email </th>
            <th className="border border-gray-600 text-white text-center"> Age </th>
            
            </tr>
          </thead>

          <tbody>
           {
             todo.map((item) =>{
               return(
                 
              <tr key={item.id}>
              <td className="border border-gray-600 text-white text-center">{item.todoItem.firstName}</td>
              <td className="border border-gray-600 text-white text-center"> {item.todoItem.lastName}</td>
              <td className="border border-gray-600 text-white text-center"> {item.todoItem.email}</td>
              <td className="border border-gray-600 text-white text-center"> {item.todoItem.age}</td>
            </tr>
                
               )
             })
           }
          </tbody>
        </table>
      </section>
    </React.Fragment>
  );
};

export default TodoApp;
