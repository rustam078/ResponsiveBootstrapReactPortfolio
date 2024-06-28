import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './TableDetailsComponent.css';
import DataComponent from './DataComponent';

const data = [
  {
    "Owner": {
      "name": "Sravan Raj Semsani",
      "id": "692769000000316001",
      "email": "sravan@voicera-analytics.in"
    },
    "$currency_symbol": "$",
    "$field_states": null,
    "Account_Type": "Partner",
    "SIC_Code": null,
    "Last_Activity_Time": "2024-05-16T18:00:12+05:30",
    "Industry": null,
    "Account_Site": null,
    "$state": "save",
    "$process_flow": false,
    "Billing_Country": "United States",
    "$locked_for_me": false,
    "id": "692769000000332158",
    "$approved": true,
    "$approval": {
      "delegate": false,
      "approve": false,
      "reject": false,
      "resubmit": false
    },
    "Billing_Street": "7 Eads St",
    "Created_Time": "2024-05-13T13:32:33+05:30",
    "$editable": true,
    "Billing_Code": "60632",
    "Shipping_City": null,
    "Shipping_Country": null,
    "Shipping_Code": null,
    "Billing_City": "Chicago",
    "Created_By": {
      "name": "Sravan Raj Semsani",
      "id": "692769000000316001",
      "email": "sravan@voicera-analytics.in"
    },
    "$zia_owner_assignment": "owner_recommendation_unavailable",
    "Annual_Revenue": 190000,
    "Shipping_Street": null,
    "Ownership": "Privately Held",
    "Description": "Morlong Associates is an American investment management firm founded in 1995.",
    "Rating": null,
    "Shipping_State": null,
    "$review_process": {
      "approve": false,
      "reject": false,
      "resubmit": false
    },
    "Website": "http://morlongassociates.com/",
    "Employees": 300,
    "Record_Image": "7992fe56d1c371490f00302c779c208573a90d4980ad20c2d950cb4dafd607c4e5f8c38f8b2ca9face8a3ee8662172e4069964c819cd4fb12d2be47fb43dfab085be052115ddb2415e55ad08843fb132",
    "Modified_By": {
      "name": "Sravan Raj Semsani",
      "id": "692769000000316001",
      "email": "sravan@voicera-analytics.in"
    },
    "$review": null,
    "Phone": "6098652365",
    "Account_Name": "Morlong Associates (Sample)",
    "Account_Number": "0",
    "Ticker_Symbol": null,
    "Modified_Time": "2024-05-16T18:00:12+05:30",
    "$orchestration": false,
    "Parent_Account": null,
    "$in_merge": false,
    "Locked__s": false,
    "Billing_State": "IL",
    "Tag": [],
    "Fax": null,
    "$approval_state": "approved"
  }
];

function TableDetailsComponent() {
  const [inputValue, setInputValue] = useState("pending");
  const account = data[0];
  const base64Image = "7992fe56d1c371490f00302c779c208573a90d4980ad20c2d950cb4dafd607c4e5f8c38f8b2ca9face8a3ee8662172e4069964c819cd4fb12d2be47fb43dfab085be052115ddb2415e55ad08843fb132";



  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="container-fluid px-0 cofee-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6">
            <Table bordered hover variant="light" className="transparent-table">
              <thead className='bgcolorbrown'>
                <tr>
                  <th colSpan="8">
                    Lead Id: <span>{account.Owner.id}</span><br />
                    Lead Owner: <span>{account.Owner.name}</span>
                  </th>
                </tr>

              </thead>
              <tbody>
                <tr>
                  <th>Account_Name</th>
                  <td>{account.Account_Name}</td>
                  <td></td>
                  <th>Image</th>
                  <td> <img src={`data:image/png;base64,${base64Image}`} alt="Image not Found !" /></td>
                </tr>
                <tr>
                  <th>Account_Type</th>
                  <td>{account.Account_Type}</td>
                  <td></td>
                  <th>Phone</th>
                  <td>{account.Phone}</td>
                </tr>
                <tr>
                  <th>Annual_Revenue</th>
                  <td>{account.Annual_Revenue}</td>
                  <td></td>
                  <th>LeadStatus</th>
                  <td>
                    <input
                      name="text"
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{account.Billing_Street}<br />
                    {account.Billing_Code}<br />
                    {account.Billing_City}<br />
                    {account.Billing_State}<br />
                  </td>
                  <td></td>
                  <th>LeadId</th>
                  <td>value</td>
                </tr>
                <tr>
                  <th>Ownership</th>
                  <td>{account.Ownership}</td>
                  <td></td>
                  <th>Website</th>
                  <td><a href={account.Website} target="_blank" rel="noopener noreferrer">
                    {account.Website}
                  </a>
                  </td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td colSpan="4">{account.Description}</td>
                </tr>
                <tr>
                  <th>Comments</th>
                  <td colSpan="4">
                    <textarea id="textarea" name="textarea" rows="4" cols="50">
                      This is a placeholder text.
                    </textarea>

                  </td>
                </tr>
                <tr>
                  <th>LeadOwner</th>
                  <td>{account.Owner.name}</td>
                  <td></td>
                  <th>LeadOwnerEmail</th>
                  <td>{account.Owner.email}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableDetailsComponent;
