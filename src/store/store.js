import { writable } from 'svelte/store';

const UserStore = writable([
        {
          id: 1,
          username: "Admin",
          password: "12345"
        },
]);

export default UserStore;