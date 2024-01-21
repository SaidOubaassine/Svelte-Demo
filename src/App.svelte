<script>
    //Component
    import Calculator from "./components/calculator/Calculator.svelte";
	import Login from "./components/login/Login.svelte";
	import UserStore from "./store/store";
	import Error from "./components/error/error.svelte";
    import Register from "./components/register/register.svelte"

	let username;
	let password;
	let successLogin=false;
	let create_compte=false;
	let errorLogin=false;

     //function login
	function login(event){
		for(let i=0; i<$UserStore.length; i++){
			if(event.detail.username==$UserStore[i].username && event.detail.password==$UserStore[i].password && event.detail.conditions==true){
		        successLogin=true;
				errorLogin=false;
				username=event.detail.username;
				password=event.detail.password;
				break;
	        }else{
				errorLogin=true;
			}
		}
	}
	//function goBack
	function goBack(){
		successLogin=false;
		create_compte=false;
	}

	//function createCompte
	function createCompte(){
		create_compte=true;
		errorLogin=false;
	}
</script>

<main>
{#if !successLogin && !create_compte}
     <Login on:message={login} on:signup={createCompte} on:goBack={goBack}/>
{/if}

{#if create_compte}
<Register on:goBack={goBack}/>
{/if}

{#if errorLogin && !create_compte}
<Error />
{/if}

{#if successLogin}
<Calculator on:goBack={goBack} username={username}/>
{/if}
</main>


<!--Style-->
<style>

</style>






