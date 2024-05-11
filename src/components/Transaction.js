import React from 'react'

export const Transaction = ({transaction,onDelete}) => {
 const handleDelete = () =>{
  onDelete(transaction.id)
 }

  return (
    <div>
        <section className="mx-auto w-full max-w-7xl px-4 py-4 mt-6">
        <div className="flex flex-col">
          <div className="-mx-4 -my-5 overflow-x-auto sm:-mx-6 lg:-mx-6">
            <div className="inline-block min-w-full  align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                 <tbody className="divide-y divide-gray-200 bg-white">
                 <tr className={` ${transaction.type === 'INCOME' ? 'border-green-800 border-r-4' : 'border-red-800 border-r-4'}`}>
                      <td className="whitespace-nowrap px-4 py-2">
                          <div className="flex items-center">
                          <div className="text-sm text-gray-700">{transaction.amount}</div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-700">{transaction.category}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {transaction.type}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <a href="#" className="text-gray-700" onClick={handleDelete}>
                           ❌
                          </a>
                        </td>
                      </tr>
                  </tbody>
                </table>
              </div>
              </div>
              </div>
              </div>
              </section>
    </div>
  )
}

