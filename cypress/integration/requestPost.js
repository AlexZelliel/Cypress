export const reqPost = () => {

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MWI4YTc3Y2M4YzYzMjBkYzhlNTI0NTYiLCJlbWFpbCI6ImFsZXhnbWlya29AZ21haWwuY29tIiwiZmluZ2VycHJpbnQiOiJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvOTYuMC40NjY0LjExMCBTYWZhcmkvNTM3LjM2IiwiaWF0IjoxNjQxMjk5MjUzLCJleHAiOjE2NDIxNjMyNTN9.12S3gUZYixhPtYPoIlUyo0VhY8TQK7ORy7J-sPDRGRk'
    it('visit site1 ', function () {
        cy.request({
            method: "POST",
            url: "http://localhost:8080/transactions",
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            failOnStatusCode: false,
         body: {
             amount: "984984984",
             category: "Office",
             currency: "UAH",
             description: "5hoeje",
         }
        })
    })
}
