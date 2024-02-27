import  {BusinessDataCustomers}  from "./buisnessDataCustomer"
// import Card from "./buisnessDataCustomer"
import { Showservice } from "./showService"
import { Appointments } from "./clients/apointments"
import { ClientPage } from "./ClientPage"
import {SignInSide} from "./signInSide"
import { useState } from "react"
import './customer.css'

export function CustomerPage() {
   
    return (
        <div className="body">
            <BusinessDataCustomers />
            <Showservice />
            <ClientPage />
        </div>
    );
}