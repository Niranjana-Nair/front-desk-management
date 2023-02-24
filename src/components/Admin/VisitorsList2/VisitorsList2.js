import React from "react";
import * as Icons from "react-icons/fa";
// import "./VisitorsList.css"
import { AiOutlineDownload } from "react-icons/ai";
const VisitorsList2 = () => {
  return (
    <div className="body">
      <div className="top">
        <label className="name">Visitors List</label>
        <div className="icons">
          <div className="icon">
            <Icons.FaSortAmountDown />
            sort
          </div>
          <div className="icon">
            <Icons.FaFilter />
            filter
          </div>
          <button className="add-btn">Add visitor</button>
        </div>
      </div>

      <div className="table">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th> </th>
                <th>Name </th>
                <th>place </th>
                <th>Mobile Number</th>
                <th>Company</th>
                <th>Date of Visit</th>
                <th>Purpose of visit</th>
                <th>In time</th>
                <th>Out time</th>
                <th>person to meet</th>
                <th>visitor id number</th>
                <th>Assets</th>
                <th>Id proof</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Icons.FaUserCircle></Icons.FaUserCircle>
                </td>
                <td>Item 2</td>
                <td>Item 3</td>
                <td>Item 4</td>
                <td>Item 5</td>
                <td>Item 6</td>
                <td>Item 7</td>
                <td>Item 8</td>
                <td>Item 9</td>
                <td>Item 10</td>
                <td>Item 11</td>
                <td>Item 12</td>
                <td>Item 13</td>
                <td>
                  {" "}
                  <Icons.FaEdit />
                </td>
              </tr>
              <tr>
                <td>
                  <Icons.FaUserCircle></Icons.FaUserCircle>
                </td>
                <td>Item 2</td>
                <td>Item 3</td>
                <td>Item 4</td>
                <td>Item 5</td>
                <td>Item 6</td>
                <td>Item 7</td>
                <td>Item 8</td>
                <td>Item 9</td>
                <td>Item 10</td>
                <td>Item 11</td>
                <td>Item 12</td>
                <td>Item 13</td>
                <td>
                  {" "}
                  <Icons.FaEdit />
                </td>
              </tr>
              <tr>
                <td>
                  <Icons.FaUserCircle></Icons.FaUserCircle>
                </td>
                <td>Item 2</td>
                <td>Item 3</td>
                <td>Item 4</td>
                <td>Item 5</td>
                <td>Item 6</td>
                <td>Item 7</td>
                <td>Item 8</td>
                <td>Item 9</td>
                <td>Item 10</td>
                <td>Item 11</td>
                <td>Item 12</td>
                <td>Item 13</td>
                <td>
                  {" "}
                  <Icons.FaEdit />
                </td>
              </tr>
              <tr>
                <td>
                  <Icons.FaUserCircle></Icons.FaUserCircle>
                </td>
                <td>Item 2</td>
                <td>Item 3</td>
                <td>Item 4</td>
                <td>Item 5</td>
                <td>Item 6</td>
                <td>Item 7</td>
                <td>Item 8</td>
                <td>Item 9</td>
                <td>Item 10</td>
                <td>Item 11</td>
                <td>Item 12</td>
                <td>Item 13</td>
                <td>
                  {" "}
                  <Icons.FaEdit />
                </td>
              </tr>
              ...
            </tbody>
          </table>
        </div>
      </div>

      <div className="btn">
        <button className="add-btn">
          {" "}
          <AiOutlineDownload />
          Report
        </button>
      </div>
    </div>
  );
};

export default VisitorsList2;
