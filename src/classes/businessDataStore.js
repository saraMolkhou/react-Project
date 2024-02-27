import { makeObservable, observable, action, runInAction } from 'mobx';

const baseUrl = 'http://localhost:8787';

class BusinessDataStore {
    businessDataList = {
        id: "123",
        name: "Coding Academy",
        address: "Rothschild 60 Tel Aviv",
        phone: "03-1234567",
        owner: "Yariv Katz",
        logo: "https://dr-schwartz.org/wp-content/uploads/2022/08/schwartz-logo-01.png",
        description: "The best coding academy in the world",
    };

    constructor() {
        makeObservable(this, {
            businessDataList: observable,
            addBusinessData: action,
            getLast: action
        });
        // this.initList();
    }

    // async initList() {
    //     try {
    //         const res = await fetch(`${baseUrl}/businessData`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json',
    //             },
    //         });
    //         if (res.ok) {
    //             const data = await res.json();
    //             console.log('Data from server:', data);
    //             runInAction(() => {
    //                 this.setList(data);
    //             });
    //         } else {
    //             console.error('Failed to fetch businessData');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // }

    // setList(data) {
    //     this.businessDataList = data;
    // }

    async addBusinessData(businessData) {
        try {
            const response = await fetch(`${baseUrl}/businessData`, {
                method: 'POST',
                body: JSON.stringify(businessData),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            });
            if (response.ok) {
                const newBusinessData = await response.json();
                console.log({ newBusinessData });
                this.businessDataList = { ...businessData };
                console.log("BusinessData added successfully");
            } else {
                console.log("Error: BusinessData not added (status code: " + response.status + ")");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    async getLast() {
        try {
            const response = await fetch(`${baseUrl}/businessData`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            });
            if (response.ok) {
                const newBusinessData = await response.json();
                console.log(newBusinessData)
                return newBusinessData;
            } else {
                console.log("Error: Failed to get businessData (status code: " + response.status + ")");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
}

const businessDataStore = new BusinessDataStore();
export default businessDataStore;
