import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {

  const { isEmpty, items, removeItem, updateItemQuantity, cartTotal, emptyCart } = useCart();
  const deleteAlert = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
          removeItem(id)
        } else {
          swal("Your imaginary file is safe!");
        }
      });
  }
  const clearAll = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
          emptyCart();
        } else {
          swal("Your imaginary file is safe!");
        }
      });
  }
  return (
    <>
      {isEmpty ? <div className='d-flex justify-content-center align-items-center'><img src="https://www.qrcardboard.com/images/cart.gif?v=01" alt="" /></div> : <div className='d-flex align-items-center justify-content-center flex-column'>
        <h1 className='my-5'>Basket</h1>
        <div className="col-9">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Photo</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, c) => (
                <tr>
                  <th scope="row">{c + 1}</th>
                  <td><img src={item.image} alt="" width={100} height={100} style={{ objectFit: "contain" }} /></td>
                  <td>{item.name}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>{item.category}</td>
                  <td>
                    <button className='btn btn-dark' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                    <span className='mx-3'>
                      {item.quantity}
                    </span>
                    <button className='btn btn-dark' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                  </td>
                  <td><button className='btn btn-danger' onClick={() => { deleteAlert(item.id) }}>X</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4 className='d-flex align-items-center justify-content-center'>Total price:<span className='text-dark'>${cartTotal}</span></h4>
          <button className='btn btn-dark d-flex align-items-center justify-content-center' onClick={() => { clearAll() }}>All Clear</button>
        </div>
      </div>}
    </>
  )
}

export default Cart