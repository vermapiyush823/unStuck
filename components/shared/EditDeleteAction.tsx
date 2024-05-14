"use client";
import Image from "next/image";

interface Props {
  type: string;
  itemId: string;
}

const EditDeleteAction = ({ type, itemId }: Props) => {
  const handleEdit = () => {};
  const handleDelete = () => {};
  return (
    <div className="flex items-center justify-end gap-3 max-sm:w-full">
      {type === "Question" ? (
        <Image
          src="/assets/icons/edit.svg"
          alt="Edit"
          width={14}
          height={14}
          className="cursor-pointer object-contain"
          onClick={handleEdit}
        />
      ) : (
        <Image
          src="assets/icons/delete.svg"
          alt="Delete"
          width={14}
          height={14}
          className="cursor-pointer object-contain"
        />
      )}
    </div>
  );
};

export default EditDeleteAction;
