import { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import type { NextPage } from "next";

const Info: NextPage = () => {

  type Inputs = {
    firstName?: string;
    lastName?: string;
    email?: string;
    role?: string;
    profilePic?: string;
    backgroundimgUrl?: string
    backgroundInfo?: string;
    phoneNumber?: string;
    address?: string;
  };
  type User = {
    id?: string,
    socialIds?: string[]
  }
  const [data, setData] = useState<Inputs & User>({});
  const [userId, setUserId] = useState<User>()

  const {
    register,
    handleSubmit,
    setValue
  } = useForm<Inputs>({ mode: 'onBlur' });

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch('/api/info')).json();
      setUserId(data.data[0].id);
      delete data.data[0].id;
      setData(data.data[0]);
    };
    dataFetch();
  }, [])

  useEffect(() => {
    if (data) {
      Object.entries(data).forEach(
        ([name, value]: any) => setValue(name, value));
    }
  }, [setValue, data]);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    if (data) {
      const body = { formData, id: userId }
      console.log(body);
      const response = await fetch("/api/info", {
        method: "PUT",
        body: JSON.stringify(body),
      });
      return response.json();
    }
    const response = await fetch("/api/info", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    return response.json();
  }

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Infos
      </h3>

      <div className="flex flex-col space-y-10 ">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input {...register('firstName')} placeholder="Prénom" className="contactInput" type="text" />
            <input {...register('lastName')} placeholder="Nom" className="contactInput" type="text" />
          </div>
          <div className="flex space-x-2">
            <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
            <input {...register('role')} placeholder="Rôle" className="contactInput" type="text" />
          </div>
          <div className="flex space-x-2">
            <input {...register('profilePic')} placeholder="URL profile pic" className="contactInput" type="text" />
            <input {...register('backgroundimgUrl')} placeholder="URL background Pic" className="contactInput" type="text" />
          </div>
          <div className="flex space-x-2">
            <input {...register('phoneNumber')} placeholder="PhoneNumber" className="contactInput" type="text" />
            <input {...register('address')} placeholder="Address" className="contactInput" type="text" />
          </div>

          <textarea {...register('backgroundInfo')} placeholder="Présentation parcours" className="contactInput" />
          <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};


export default Info;
