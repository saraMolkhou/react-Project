import { makeObservable, observable, action, computed, runInAction } from 'mobx';

const baseUrl = 'http://localhost:8787';

class AppointmentStore {
    list = [];

    constructor() {
        makeObservable(this, {
            list: observable,
            addAppointment: action,
            getList: computed,
            setList: action
        });
        this.initList();
    }

    async initList() {
        try {
            const res = await fetch(`${baseUrl}/appointments`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });
            if (res.ok) {
                const data = await res.json();
                runInAction(() => {
                    this.setList(data);
                });
            } else {
                console.error('Failed to fetch appointments');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    // Action to set list
    setList(data) {
        this.list = data;
    }

    async addAppointment(appointment) {
        try {
            const res = await fetch(`${baseUrl}/appointment`, {
                method: 'POST',
                body: JSON.stringify(appointment),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            });
            if (res.ok) {
                const data = await res.json();
                runInAction(() => {
                    this.list.push(data);
                });
            } else {
                console.error('Failed to add appointment');
            }
        } catch (error) {
            console.error('Error adding appointment:', error);
        }
    }

    get getList() {
        return this.list;
    }
}

const singleton = new AppointmentStore();
export default singleton;
