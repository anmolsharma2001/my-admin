// import { GridColDef } from "@mui/x-data-grid";
// import "./add.scss";
// // import { useMutation, useQueryClient } from "@tanstack/react-query";

// type Props = {
//   slug: string;
//   columns: GridColDef[];
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
// };

// const Add = (props: Props) => {
//   // TEST THE API

//   // const queryClient = useQueryClient();

//   // const mutation = useMutation({
//   //   mutationFn: () => {
//   //     return fetch(`http://localhost:8800/api/${props.slug}s`, {
//   //       method: "post",
//   //       headers: {
//   //         Accept: "application/json",
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({
//   //         id: 111,
//   //         img: "",
//   //         lastName: "Hello",
//   //         firstName: "Test",
//   //         email: "testme@gmail.com",
//   //         phone: "123 456 789",
//   //         createdAt: "01.02.2023",
//   //         verified: true,
//   //       }),
//   //     });
//   //   },
//   //   onSuccess: () => {
//   //     queryClient.invalidateQueries([`all${props.slug}s`]);
//   //   },
//   // });

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     //add new item
//     // mutation.mutate();
//     props.setOpen(false);
//   };
//   return (
//     <div className="add">
//       <div className="modal">
//         <span className="close" onClick={() => props.setOpen(false)}>
//           X
//         </span>
//         <h1>Add new {props.slug}</h1>
//         <form onSubmit={handleSubmit}>
//           {props.columns
//             .filter((item) => item.field !== "id" && item.field !== "img")
//             .map((column) => (
//               <div className="item">
//                 <label>{column.headerName}</label>
//                 <input type={column.type} placeholder={column.field} />
//               </div>
//             ))}
//           <button>Send</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Add;


import { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  // State for form data
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    address: "",
  });

  // const queryClient = useQueryClient();
  // const mutation = useMutation({
  //   mutationFn: (newData: typeof formData) => {
  //     return fetch(`http://localhost:8800/api/${props.slug}s`, {
  //       method: "post",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newData),
  //     });
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries([`all${props.slug}s`]);
  //   },
  // });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:8800/api/${props.slug}s`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit");

      console.log("Submitted:", formData);
      // mutation.mutate(formData); // 👈 If you prefer react-query
    } catch (err) {
      console.error(err);
    }

    props.setOpen(false);
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          <div className="item">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
