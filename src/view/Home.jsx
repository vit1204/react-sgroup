
import { useEffect, useState, useCallback, createContext } from "react";
import UserItem from "../components/UserItem";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar";


export default function Home() {
  const column = ["Info", "Age", "Gender", "Create At"];
  const [usersData, setUsersData] = useState([]);
  const router = useNavigate()

  const fetchUser = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      if (response.status === 200) {
        setUsersData(response.data.data);
        console.log(response.data.data);
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const deleteUser = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`).then((res) => {
      if (res.status === 200) {
        fetchUser();
      }
    });
  }
  const editUser = (id) => {
     router(`/users/${id}`)
  }


  return (
    <div>
          <Sidebar />
      <div>
        <div className="search-bar flex justify-around mx-30 my-4">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search User"
            className="px-1 py-1 border-slate-700 border-solid border-2"
          />
          <button className="px-3 py-2 bg-sky-600 text-white">
            + Create New
          </button>
        </div>
        <div className="flex justify-center items-center">
          <table>
            <thead className="text-xs text-gray-700 uppercase py-4 bg-white">
              <tr scope="col" className="px-6 py-3 bg-white">
                {column.map((item, index) => {
                  return <th key={index} className="px-5">{item}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {usersData.map((user, index) => (
                <UserItem key={user.id} user={user} deleteUser={() => deleteUser(user.id) } editUser={() => editUser(user.id)}   />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

