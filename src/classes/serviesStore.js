import { makeObservable, observable, computed, action} from 'mobx';
import { observer } from 'mobx-react-lite';
const baseUrl = 'http://localhost:8787';
class ServiesStore{
    // Servieslist=[{
    //     id: "1",
    //     name: "פגישת ייעוץ פרונטלית",
    //     description: "פגישת ייעוץ פרטנית בקליניקה",
    //     price: 500,
    //     duration: 60,
    //     img: "https://clinic.org.il/wp-content/uploads/2021/03/servicesArtboard-1-copy-2-min.png"
    //     },{
    //     id: "2",
    //     name: "קוסמטיקה",
    //     description: "פגישת ייעוץ פרטנית בקליניקה",
    //     price: 500,
    //     duration: 60,
    //     img: "https://clinic.org.il/wp-content/uploads/2021/03/servicesArtboard-1-copy-min.png"

    //   },{
    //     id: "3",
    //     name: "כירורגיה",
    //     description: "פגישת ייעוץ פרטנית בקליניקה",
    //     price: 500,
    //     duration: 60,
    //     img: "https://clinic.org.il/wp-content/uploads/2021/03/servicesArtboard-1-copy-3_2-min.png"

    // },
    //   {
    //     id: "4",
    //     name: "אוטודונטיה",
    //     description: "פגישת ייעוץ פרטנית בקליניקה",
    //     price: 500,
    //     duration: 60,
    //     img: "https://clinic.org.il/wp-content/uploads/2021/03/servicesArtboard-1-copy-4_1-min.png"

    //   },{
    //   id: "5",
    //   name: "שיננית",
    //   description: "פגישת ייעוץ פרטנית בקליניקה",
    //   price: 500,
    //   duration: 60,
    //   img: "https://magic-touch-clinic.co.il/wp-content/uploads/2021/02/%D7%A1%D7%99%D7%91%D7%95%D7%AA-%D7%9C%D7%A2%D7%A9%D7%95%D7%AA-%D7%98%D7%99%D7%A4%D7%95%D7%9C-%D7%A9%D7%99%D7%A0%D7%A0%D7%99%D7%AA.jpg"

    // }];
    Servieslist=[{
      id: "1",
      name: "הלבנת שיניים",
      description: "הלבנת שיניים",
      price: 500,
      duration: 60,
      img: 'istockphoto-1356422942-1024x1024.jpg'
      },{
      id: "2",
      name: "השתלת שיניים",
      description: "השתלת שיניים",
      price: 500,
      duration: 60,
      img: "istockphoto-1402568717-1024x1024.jpg"

    },{
      id: "3",
      name: "יישור שיניים",
      description: "יישור שינייפ",
      price: 500,
      duration: 60,
      img: "istockphoto-1272277296-1024x1024.jpg"

  },
    {
      id: "4",
      name: "סתימה",
      description: "סתימה",
      price: 500,
      duration: 60,
      img: "istockphoto-1094536004-1024x1024.jpg"

    },{
    id: "5",
    name: "פגישת ייעוץ",
    description: "פגישת ייעוץ פרטנית בקליניקה",
    price: 500,
    duration: 60,
    img: "istockphoto-1168002540-1024x1024.jpg"

  }];
    constructor() {
        makeObservable(this, {
            Servieslist: observable,
            addServies: action,
            getList: computed,
        });
    }
  
    async addServies(newService) {
      
        try {
          const res = await fetch(`${baseUrl}/service`, {
            method: 'POST',
            body: JSON.stringify(newService),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },
          });
          if (res.status === 200)
          {this.Servieslist.push({ ...newService, id:newService.id})}
          console.log("res", res);
          
        //   this.services.push({ ...newService });
        } catch (error) {
          console.log("cant add: " + error);
        }
      }
    
    get getList(){
        return this.Servieslist;
    }
}
const ServiceStore= new ServiesStore();
export default ServiceStore;