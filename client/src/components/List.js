import React, { useState } from "react";
import { default as api } from "../store/apiSlice";
import { FaRegTrashCan } from 'react-icons/fa6';

export default function List() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  const [deleteTransaction] = api.useDeleteTransactionMutation();
  const [deleteError, setDeleteError] = useState(null);

  const handleDelete = async (categoryId) => {
    try {
      await deleteTransaction({ _id: categoryId });
    } catch (error) {
      setDeleteError("Failed to delete item. Please try again later.");
      console.error("Error deleting item:", error);
    }
  };

  if (isFetching) {
    return <div>Fetching...</div>;
  }

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {deleteError && <div className="text-red-500">{deleteError}</div>}
      {isSuccess &&
        data.map((category, index) => (
          <Transaction
            key={index}
            category={category}
            handleDelete={handleDelete}
          />
        ))}
    </div>
  );
}

function Transaction({ category, handleDelete }) {
  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      handleDelete(category._id);
    }
  };

  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}
    >
      <button className="px-3" onClick={handleDeleteClick}>
        <FaRegTrashCan color={category.color ?? '#e5e5e5'} />
      </button>
      <span className="block w-full">{category.name ?? ""}</span>
      <span className="block w-full">Amount: {category.amount ?? "Not available"}</span> {/* Display amount */}
    </div>
  );
}