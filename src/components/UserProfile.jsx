import axios from "axios";
import { useEffect, useState } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import Sidebar from "./sidebar";

const UserProfile = () => {
  const { userID } = useParams();
  const [userData, setUserData] = useState({
    id : "", age:"", email:"",username:"",gender:"",name:""
  });
  const router = useNavigate()
  
const fetchUser = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/users/${userID}`);
        if (response.status === 200) {
            console.log(response.data.data[0]);
            const user = response.data.data[0];
            setUserData({...userData,id : user.id, age : user.age, email : user.email, username : user.username, name: user.name, gender: user.gender});
        }
    } catch (error) {
        console.log(error);
        return [];
    }
};

useEffect(() => {
    fetchUser();
}, []);

const updateInfo = async (id) => {
    try {
          
          const response  = await axios.put(`http://localhost:3000/users/${id}`,{
            name: userData.name,
            age: userData.age,
            gender:userData.gender,
            username: userData.username,
            email: userData.email
          })
          if(response.status === 200){
            console.log(response)
            setUserData(...userData,
  name= response.data.data[0].name,
  age= response.data.data[0].age,
  email = response.data.data[0].email,
  username = response.data.data[0].username,
  gender = response.data.data[0].gender)
            router("/users")
          } 
    } catch (error) {
        console.log(error)
    }

}

return (
    
    <div  >
        <Sidebar />
        <div className="flex flex-col items-center justify-center px-1 py-8 md:h-screen lg:py-0">
            <div className="w-full max-w-md">
                <div className="bg-white dark:bg-gray-800 py-8 px-4 sm:rounded-lg sm:px-10">
                    <form className="space-y-4 md:space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Name
                            </label>
                            <input
                                value={userData.name}
                                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                                type="text"
                                name="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="age"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Age
                            </label>
                            <input
                                value={userData.age}
                              onChange={(e) => {
                              
                                    setUserData({ ...userData, age: parseInt(e.target.value) });
                                }}
                                type="number"
                                name="age"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="gender"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Gender
                            </label>
                            <select
                                value={userData.gender}
                                onChange={(e) =>{
                                   
setUserData({ ...userData, gender: e.target.value })
                                } 
                            }
                                name="gender"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                id=""
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Khac">Khac</option>
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="username"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Username
                            </label>
                            <input
                                value={userData.username}
                                onChange={(e) => {
                                  
                                    setUserData({ ...userData, username: e.target.value })}}
                                type="text"
                                name="username"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Email
                            </label>
                            <input
                                value={userData.email}
                                onChange={(e) => {
                                    
                                    setUserData({ ...userData, email: e.target.value })}}
                                type="email"
                                name="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
       <button onClick={() => updateInfo(userData.id)}
            type="submit"
            className="text-white ml-[670px] bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
            Update
        </button>
    </div>
);
};

export default UserProfile;

