export const CompanyQuery = {
    getCompanyByName:
        `
SELECT company_id from companies where 
company_name=? or gst_number=?
;
`
    ,
    InsertCompany:
        `  INSERT INTO companies (company_name,phone,gst_number,address,email)
      VALUES (?, ?, ?, ?,?)
      ;

`


}