import React from "react";
import "./Form.css";
import logoImage from "../../assets/logo.png";

export default function Form() {
  return (
    <div className="printable-form">
      <div id="form">
        <div className="navbar">
          <div className="left">
            <div className="logo">
              <img src={logoImage} alt="logo" />
            </div>
          </div>
          <div className="log">
            <div className="text">
              ................./.................../....................
            </div>
            <div className="polica">بوليصة استلام شحنة</div>
          </div>
        </div>
        <div className="client text-center bg-black">
          <button type="button">معلومات العميل</button>
        </div>
        <div className="container">
          <table>
            <tbody>
              <tr>
                <td>الاســــم :</td>
              </tr>
              <tr>
                <td>العنـــوان :</td>
              </tr>
              <tr>
                <td>رقم الهـاتف :</td>
              </tr>
              <tr>
                <td>طــريقة الدفع :</td>
              </tr>
              <tr>
                <td>المبلغ المطلوب :</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <button type="button">المنتجــات</button>
        </div>
        <p>
          ....................................................................................................................
        </p>
        <p>
          ....................................................................................................................
        </p>
        <p>
          ....................................................................................................................
        </p>
        <p>
          ....................................................................................................................
        </p>
        <p>
          ....................................................................................................................
        </p>
        <p>
          ....................................................................................................................
        </p>
        <p>
          ....................................................................................................................
        </p>
      </div>
    </div>
  );
}
