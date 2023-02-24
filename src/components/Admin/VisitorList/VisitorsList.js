import React from "react";
import * as Icons from "react-icons/fa";
import Header from "../../Header/Header";
import "./VisitorsList.css";

const VisitorsList = () => {
  return (
    <>
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
                  <th></th>
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
                </tr>
                ...
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisitorsList;
