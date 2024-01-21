<script>
    import { createEventDispatcher } from "svelte";
    import UserStore from "../../store/store"

    // user name, password, password
    let username;
    let password;
    let register=true;
    let isCreate=false;

    //event dipatcher
    const dispatch = createEventDispatcher();	

    
    function createCompte(){
      let user = {id: Math.random(), username: username, password: password};
      UserStore.update(currentUsers => {
        return [user, ...currentUsers];
      });
      isCreate=true;
    }
    function goBack(){
        dispatch('goBack');
    }
</script>

<!--Login Form-->
{#if register}
<div class="login-div">
    <div>
    <h2>Register</h2>
    <label for="username">Username:</label>
    <input type="text" bind:value={username} id="username" name="username" required>
    <label for="password">Password:</label>
    <input type="password" bind:value={password} id="password" name="password" required>
    <button type="submit" on:click={createCompte}>Create compte</button>
  </div>
  <div class="create_compte">
  </div>
  </div>
  <div>
    <button on:click={goBack}>Go back</button>
  </div>
{/if}




<!---->



<style>
  
  .login-div {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #1c0e97;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}

.login-div h2 {
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
}

.login-div div label {
  display: block;
  margin-bottom: 10px;
  color: #fff;
}

.login-div div input[type="text"],
.login-div div input[type="password"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  margin-bottom: 20px;
}

.login-div div button[type="submit"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #05032d;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-div div button[type="submit"]:hover {
  background-color: #ca5b06;
}

</style>

