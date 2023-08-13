'use client'
import Image from 'next/image'
import React from 'react';
export default function Home() {
  const handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event?.preventDefault();
    const payload = {
      username: event.currentTarget.username.value,
      password: event.currentTarget.password.value,
    };
    // POST request using fetch()
    fetch("/api/auth",
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error(error));
  };
  return (
    <>
      <main>
        <h1>Nextjs authentication JWT verify http cookie only</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full
md:w-full'>
          <div className='flex justify-evenly'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              name='username' required
              className='border text-red-400 rounded border-green-900'
            />
          </div>
          <div className='flex justify-evenly'>
            <label htmlFor='password'>password</label>
            <input
              type='text'
              id='password'
              name='password' required
              className='border text-red-400 rounded border-green-900'
            />
          </div>
          <div className='flex justify-evenly'>
            <button
              type='submit'
              className="button border rounded border-green-900 py-2 px-7
bg-green-900 text-white ml-8">Submit</button>
          </div>
        </form>
      </main>
    </>
  )
}
