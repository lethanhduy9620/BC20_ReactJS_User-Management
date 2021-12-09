import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";
import { findDOMNode } from "react-dom";

export default class LiftingStateUpCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      detailProduct: data[0],
      listCart: [],
    };
  };

  handleDetailProduct = (product) => {
    //Nhận product từ component sản phẩm truyền ra
    //Cập nhật lại state => để component render lại lần mới
    this.setState({
      detailProduct: product,
      //Hàm setState nhận vào một đối tượng và một hàm callback function (optional)
    });
  };

  _findIndex = (maSP) => {
    return this.state.listCart.findIndex((item) => {
      return item.maSP === maSP;
    });
  }

  handleAddProduct = (product) => {

    let listCart = [...this.state.listCart];
    // console.log(listCart);

    // console.log(productCart)
    const index = this._findIndex(product.maSP);

    if (index !== -1) {
      //Tìm thấy => cập nhật lại soLuong
      listCart[index].soLuong += 1;
    }
    else {
      //Thêm product vào listCart
      const productCart = {
        maSP: product.maSP,
        tenSP: product.tenSP,
        hinhAnh: product.hinhAnh,
        soLuong: 1,
        donGia: product.giaBan,
      };
      listCart.push(productCart);
    }

    this.setState({ listCart });
  };

  handleDelete = (product) => {
    this.setState({ listCart: this.state.listCart.filter(item => item.maSP !== product.maSP) });
  }

  handleUpdateQuantity = (product, status) => {

    // this.setState({
    //   listCart: this.state.listCart.map(item => item.maSP === product.maSP ? ({
    //     ...item,
    //     soLuong: status ? item.soLuong + 1 : !item.soLuong ? item.soLuong : item.soLuong - 1
    //   }) : item)
    // })

    //Nhận product từ model truyền ra
    // console.log(status);
    // console.log(product);
    const index = this._findIndex(product.maSP);
    if (index !== -1) {
      let listCart = { ...this.state.listCart };
      if (status) {
        listCart[index].soLuong += 1;
      }
      else {
        if (listCart[index].soLuong > 1) {
          listCart[index].soLuong -= 1;
        }
      }
      this.setState({ listCart });
    }
  }

  totalQuality = () => {
    return this.state.listCart.reduce((total, product) => {
      return (total += product.soLuong);
    }, 0);
  }



  render() {
    const { detailProduct } = this.state;
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.totalQuality})
          </button>
        </div>
        <DanhSachSanPham
          listProduct={this.state.listProduct}
          detailProduct={this.handleDetailProduct}
          addProduct={this.handleAddProduct}
        />

        {/* Modal là component giỏ hàng */}
        <Modal
          listCart={this.state.listCart}
          productDelete={this.handleDelete}
          productUpdateQuantity={this.handleUpdateQuantity}
        />
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src="./img/vsphone.jpg" alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{detailProduct.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{detailProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
