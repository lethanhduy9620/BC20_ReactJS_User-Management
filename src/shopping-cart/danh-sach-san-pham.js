import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {
  render() {
    // console.log(this.props.listProduct);
    const { listProduct } = this.props;
    return (
      <div className="container">
        <div className="row">
          {listProduct.map((product) => {
            return (<SanPham
              key={product.maSP}
              product={product}
              detailProduct={this.props.detailProduct}
              addProduct = {this.props.addProduct}
            />)
          })}
        </div>
      </div>
    );
  }
}
