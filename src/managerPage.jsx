import  BusinessDetailsManagerPage  from "./businessDataManager";
import Showservice from "./showService";
import { ShowAppointments } from "./showAppointments";
import { AddService } from "./addService";

export function ManagerPage(){
    return(
        <>
            <BusinessDetailsManagerPage></BusinessDetailsManagerPage>
            <Showservice></Showservice>
            <AddService></AddService>
            <ShowAppointments></ShowAppointments>
        </>
    )
}