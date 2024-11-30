import React from 'react'

const Table = ({header,ths,datas,btn}) => {
    const data = [
    { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', age: 25, email: 'alice@example.com' },
    { id: 4, name: 'Bob Brown', age: 42, email: 'bob@example.com' },
    ];
  return (
        <div className="flex justify-center w-full opacity-90">
            <div className="shadow-md shadow-[#999] w-full my-10 overflow-x-auto">
                  <h2 className='text-center my-2 text-lg font-bold'>{ header }</h2>
                <table className='w-full'>
                    <thead className=''>
                      <tr>
                            {
                                ths.map(th => (
                                    <th key={th.id}>{th.th}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {datas.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                            {
                                btn.length > 0 && btn.map(btns => ( 
                                  <td className='p-2' key={btns.id}>{btns.btn}</td>
                                )) 
                            }
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default Table