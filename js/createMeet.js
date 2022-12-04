async function createMeet () {
         	const BASE_URL='https://www.pithgrowth.simurgify.com/'
            const explanation=document.getElementById('detailsEventRegister')

            const body={
                partner_id:localStorage.getItem('selected_partner_id'),
                partner_contact_name:localStorage.getItem('partner_contact_name'),
                company_id:localStorage.getItem('status')==='partner' ? localStorage.getItem('partner_id'):localStorage.getItem('company_id'),
                company_name:localStorage.getItem('company_name'),
                sub_type:sessionStorage.getItem('sub_type'),
                description:explanation.value,
                name:localStorage.getItem('company_name'),
                date:sessionStorage.getItem('date'),
                time:sessionStorage.getItem('time')
            }
            try {
                const promise=await axios.post(`${BASE_URL}api/verify/meeting?token=${localStorage.getItem('status')==='partner' ? localStorage.getItem('token_partner'):localStorage.getItem('token_company')}`,body).then(()=>{
                    axios.post(`${BASE_URL}api/verify/notification/?token=${localStorage.getItem('token_company')}`,{
                       user_id:body.partner_id,
                       title:'New Meeting',
                       message:'Your have new Meeting'
                    })
                  })
                if(promise.status===200)
                {
                    alert('Meeting Created Successfully !')
                    window.location.href='index.html'
                    sessionStorage.removeItem('sub_type')
                    sessionStorage.removeItem('company')
                    sessionStorage.removeItem('time')
                    sessionStorage.removeItem('date')
                    //localStorage.removeItem('selected_partner_id')
                }
                else {
                    console.log(promise.status);
                }
            } catch (error) {
                console.log(error)
            }
}