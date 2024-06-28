import React, { useState } from 'react';


const data=[
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
        
const DataComponent = () => {
    const account = data[0];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Account Details</h1>
      <img src={account.Record_Image} alt="Record" style={{ width: '100px', height: '100px' }} />
      <h2>{account.Account_Name}</h2>
      <p><strong>Description:</strong> {account.Description}</p>
      <p><strong>Industry:</strong> {account.Industry || 'N/A'}</p>
      <p><strong>Annual Revenue:</strong> ${account.Annual_Revenue}</p>
      <p><strong>Employees:</strong> {account.Employees}</p>
      <p><strong>Website:</strong> <a href={account.Website} target="_blank" rel="noopener noreferrer">{account.Website}</a></p>
      <p><strong>Phone:</strong> {account.Phone}</p>
      <p><strong>Billing Address:</strong> {`${account.Billing_Street}, ${account.Billing_City}, ${account.Billing_State}, ${account.Billing_Country}, ${account.Billing_Code}`}</p>
      <p><strong>Shipping Address:</strong> {account.Shipping_Street ? `${account.Shipping_Street}, ${account.Shipping_City}, ${account.Shipping_State}, ${account.Shipping_Country}, ${account.Shipping_Code}` : 'N/A'}</p>
      <p><strong>Owner:</strong> {account.Owner.name} ({account.Owner.email})</p>
      <p><strong>Created By:</strong> {account.Created_By.name} ({account.Created_By.email}) on {new Date(account.Created_Time).toLocaleString()}</p>
      <p><strong>Last Modified By:</strong> {account.Modified_By.name} ({account.Modified_By.email}) on {new Date(account.Modified_Time).toLocaleString()}</p>
    </div>
  );
};

export default DataComponent;
